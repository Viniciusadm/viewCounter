const key = 'AIzaSyBJ77lJ443xyt0aF0Opxq0PjIrz4P3jnoAa'
const idPlaylist = 'PLqSz0ak5p5kWs6ry0vo-aO2RRc1maiq2h'

const url1 = 'https://www.googleapis.com/youtube/v3/videos?id='
const url2 = '&key=' + key + '&fields=items(snippet(title),statistics(viewCount))&part=snippet,statistics'

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

        if (nomeVideo === 'How You Like That DANCE PERFORMANCE V') {
            nomeVideo = 'How You Like That DANCE'
        }

        let urlImagem = `https://i.ytimg.com/vi/${id}/sddefault.jpg`
        let views = videoDetalhes.items[0].statistics.viewCount

        let viewsLista = views.split('').reverse()

        numeroComPontos = []

        viewsLista.forEach((valor, index) => {
            if (index % 3 === 0 && index !== 0) {
                numeroComPontos.push('.', valor)
            } else {
                numeroComPontos.push(valor)
            }
        })

        viewsNumero = numeroComPontos.reverse().join('')

        listaDeVideos.push({
            urlImagem,
            nomeVideo,
            views,
            viewsNumero,
            id
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
            <p class="lead"><span class="bordaVisualizacoes">${video.viewsNumero}</span> visualizações</p>
            </div>`

            contador++
            numeroLinha += 3
        } else if (contador === 2) {
            conteudo +=
                `<div class="video p-2 col-12 col-sm-6 col-md-4">
            <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank"><img class="img-fluid" src="${video.urlImagem}"></a>
            <h1 class="py-2 mt-2 mb-0 tituloMusicas"><span class="segundo">${contador}°</span> ${video.nomeVideo}</h1>
            <p class="lead"><span class="bordaVisualizacoes">${video.viewsNumero}</span> visualizações</p>
            </div>`

            contador++
        } else if (contador === 3) {
            conteudo +=
                `<div class="video p-2 col-12 col-sm-6 col-md-4">
            <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank"><img class="img-fluid" src="${video.urlImagem}"></a>
            <h1 class="py-2 mt-2 mb-0 tituloMusicas"><span class="terceiro">${contador}°</span> ${video.nomeVideo}</h1>
            <p class="lead"><span class="bordaVisualizacoes">${video.viewsNumero}</span> visualizações</p>
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
                <p class="lead"><span class="bordaVisualizacoes">${video.viewsNumero}</span> visualizações</p>
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