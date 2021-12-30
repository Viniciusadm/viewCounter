const key = 'AIzaSyDdC1FKo0jddDNkp8Pycqk2OD1Pk-sf-WQ'
const idPlaylist = 'PLqSz0ak5p5kWs6ry0vo-aO2RRc1maiq2h'
// PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n

const url1 = 'https://www.googleapis.com/youtube/v3/videos?id='
const url2 = '&key=' + key + '&fields=items(snippet(title,publishedAt),statistics(viewCount,likeCount))&part=snippet,statistics'

async function getContent() {

    const response = await fetch('https://www.googleapis.com/youtube/v3/playlistItems?playlistId=' + idPlaylist + '&key=' + key + '&fields=items(contentDetails(videoId))&part=contentDetails&maxResults=50')
    const playlist = await response.json()

    var conteudo = ''
    let videosIds = []

    for (let videoIds of playlist.items) {
        id = videoIds.contentDetails.videoId
        videosIds.push(id)
    }

    var listaDeVideos = []

    for (let id of videosIds) {
        urlVideo = url1 + id + url2
        let responseVideo = await fetch(urlVideo)
        const videoDetalhes = await responseVideo.json()

        let nomeInteiro = videoDetalhes.items[0].snippet.title

        let nomeArray = nomeInteiro.split('')

        let nomeLista = []

        let caractereDeCorte = ['-', '–']
        let indesejados = ["'", "‘", "’"]

        for (let caractere of caractereDeCorte) {
            if (nomeArray.indexOf(caractere) !== -1) {
                for (let i = nomeArray.indexOf(caractere) + 2; i < nomeArray.length - 4; i++) {
                    nomeLista.push(nomeArray[i])
                }
            }
        }

        for (let caractere of indesejados) {
            while (nomeLista.indexOf(caractere) !== -1) {
                nomeLista.splice(nomeLista.indexOf(caractere), 1)
            }
        }

        let nomeVideo = nomeLista.join('')

        let urlImagem = `https://i.ytimg.com/vi/${id}/sddefault.jpg`
        let views = videoDetalhes.items[0].statistics.viewCount
        let viewsTipoNumero = Number(views)
        let dataVideoAtual = new Date(videoDetalhes.items[0].snippet.publishedAt)
        let hoje = new Date();
        
        if (nomeVideo === 'Lovesick Girls' || nomeVideo === 'Ice Cream (with Selena Gomez)') {
            var diasPassados = (hoje - dataVideoAtual - 86400000) / 86400000
        } else {
            var diasPassados = (hoje - dataVideoAtual) / 86400000
        }

        if (diasPassados < 1) {
            diasPassados = 1
        }

        if (nomeVideo === 'Lovesick Girls') {
            var viewsPorDia = Math.trunc((views - 58420000) / Math.trunc(diasPassados))
        } else if (nomeVideo === 'Ice Cream (with Selena Gomez)') {
            var viewsPorDia = Math.trunc((views - 76000000) / Math.trunc(diasPassados))
        } else {
            var viewsPorDia = Math.trunc(views / Math.trunc(diasPassados))
        }
        
        let viewsLista = views.split('').reverse()
        let numeroComPontos = []

        viewsLista.forEach((valor, index) => {
            if (index % 3 === 0 && index !== 0) {
                numeroComPontos.push('.', valor)
            } else {
                numeroComPontos.push(valor)
            }
        })

        let viewsNumero = numeroComPontos.reverse().join('')

        if (viewsTipoNumero > 1000000000) {
            viewsQueFaltam = viewsTipoNumero - 1000000000
        } else {
            viewsQueFaltam = viewsTipoNumero
        }

        let milhar

        if (String(viewsQueFaltam).length === 8) {
            milhar = 100000000
        } else {
            milhar = Number(String(viewsQueFaltam)[0]) * 100000000 + 100000000
        }

        viewsQueFaltam = milhar - viewsQueFaltam

        if (viewsTipoNumero > 1000000000) {
            milhar += 1000000000
        }

        let milharLista = String(milhar).split('').reverse()
        let milharComPontos = []

        milharLista.forEach((valor, index) => {
            if (index % 3 === 0 && index !== 0) {
                milharComPontos.push('.', valor)
            } else {
                milharComPontos.push(valor)
            }
        })

        let milharNumero = milharComPontos.reverse().join('')

        let diasQueFaltam = Math.ceil(viewsQueFaltam / viewsPorDia)

        listaDeVideos.push({
            urlImagem,
            nomeVideo,
            viewsNumero,
            id,
            diasQueFaltam,
            milharNumero,
            viewsPorDia
        })
    }

    listaDeVideos.sort((a, b) => b.views - a.views)
    let contador = 1
    let numeroLinha = 1
    let numeroLinha2 = 3

    for (video of listaDeVideos) {
        if (contador === 1) {
            conteudo +=
                `<div class="row">
            <div class="video p-2 col-12 col-sm-6 col-md-4">
            <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank"><img class="img-fluid" src="${video.urlImagem}"></a>
            <h1 class="py-2 mt-2 mb-0 tituloMusicas"><span class="primeiro">${contador}°</span> ${video.nomeVideo}</h1>
            <p class="lead visualizacoes"><span class="bordaVisualizacoes">${video.viewsNumero}</span> visualizações</p>
            <p class="lead"><span class="numero">${video.diasQueFaltam}</span> dia(s) pra chegar em ${video.milharNumero} visualizações</p>
            </div>`

            contador++
            numeroLinha += 3
        } else if (contador === 2) {
            conteudo +=
                `<div class="video p-2 col-12 col-sm-6 col-md-4">
            <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank"><img class="img-fluid" src="${video.urlImagem}"></a>
            <h1 class="py-2 mt-2 mb-0 tituloMusicas"><span class="segundo">${contador}°</span> ${video.nomeVideo}</h1>
            <p class="lead visualizacoes"><span class="bordaVisualizacoes">${video.viewsNumero}</span> visualizações</p>
            <p class="lead"><span class="numero">${video.diasQueFaltam}</span> dia(s) pra chegar em ${video.milharNumero} visualizações</p>
            </div>`

            contador++
        } else if (contador === 3) {
            conteudo +=
                `<div class="video p-2 col-12 col-sm-6 col-md-4">
            <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank"><img class="img-fluid" src="${video.urlImagem}"></a>
            <h1 class="py-2 mt-2 mb-0 tituloMusicas"><span class="terceiro">${contador}°</span> ${video.nomeVideo}</h1>
            <p class="lead visualizacoes"><span class="bordaVisualizacoes">${video.viewsNumero}</span> visualizações</p>
            <p class="lead"><span class="numero">${video.diasQueFaltam}</span> dia(s) pra chegar em ${video.milharNumero} visualizações</p>
            </div>
            </div>`

            contador++
            numeroLinha2 += 3
        } else {
            if (contador === numeroLinha) {
                conteudo += '<div class="row">'
                numeroLinha += 3
            }

            conteudo +=
                `<div class="video p-2 col-12 col-sm-6 col-md-4">
                <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank"><img class="img-fluid" src="${video.urlImagem}"></a>
                <h1 class="py-2 mt-2 mb-0 tituloMusicas">${contador}° ${video.nomeVideo}</h1>
                <p class="lead visualizacoes"><span class="bordaVisualizacoes">${video.viewsNumero}</span> visualizações</p>
                <p class="lead"><span class="numero">${video.diasQueFaltam}</span> dia(s) pra chegar em ${video.milharNumero} visualizações</p>
                </div>`

            if (contador === numeroLinha2) {
                conteudo += '</div>'
                numeroLinha2 += 3
            }
            contador++
        }
    }
    document.querySelector('main').innerHTML = conteudo
}

getContent()
