musicas=[{id:"Amq-qlqbjYA",nome:"As If It's Your Last",nomeReduzido:"AsIfItsYourLast",album:"As If It's Your Last",ano:2017,compositores:"Teddy, Future Bounce, Lydia Paek",premios:"Golden Disc Award: Canções do Ano"},{id:"bwmSjveL3Lc",nome:"Boombayah",nomeReduzido:"Boombayah",album:"Square One",ano:2016,compositores:"Teddy, Bekuh BOOM"},{id:"gXBdvSj9F2I",nome:"Bet You Wanna (com Cardi B)",nomeReduzido:"BetYouWanna",album:"The Album",ano:2020,compositores:"Tommy Brown, Steven Franks, Ryan Tedder, Melanie Fontana, Becalis Almanzar, Torae Carr, Jonathan Descartes"},{id:"u7rKGj13pAs",nome:"Crazy Over You",nomeReduzido:"CrazyOverYou",album:"The Album",ano:2020,compositores:"Teddy, Bekuh BOOM, 24, R. Tee, Future Bounce"},{id:"IHNzOHi8sJs",nome:"DDU-DU-DDU-DU",nomeReduzido:"DDUDUDDUDU",album:"Square Up",ano:2018,compositores:"Teddy, 24, R. Tee",japones:!0,remix:!0,premios:"Golden Disc Award: Canções do Ano, Teen Choice Award: Melhor Single de Grupo"},{id:"FHn4P9Fyj0M",nome:"Don't Know What To Do",nomeReduzido:"DontKnowWhatToDo",album:"Kill This Love",ano:2019,compositores:"Teddy, 24, Brian Lee, Bekuh BOOM",japones:!0},{id:"tT5AkN4r3NM",nome:"Forever Young",nomeReduzido:"ForeverYoung",album:"Square Up",ano:2018,compositores:"Teddy, Future Bounce"},{id:"l6zMnMMzsss",nome:"Hope Not",nomeReduzido:"HopeNot",album:"Kill This Love",ano:2019,compositores:"Teddy, Danny Chung",japones:!0},{id:"ioNng23DkIM",nome:"How You Like That",nomeReduzido:"HowYouLikeThat",album:"The Album",ano:2020,compositores:"Teddy, R. Tee, 24",compositores:"MTV Video Music Award: Melhor Música do Verão"},{id:"vRXZj0DzXIA",nome:"Ice Cream (com Selena Gomez)",nomeReduzido:"IceCream",album:"The Album",ano:2020,compositores:"Tommy Brown, Mr. Franks, Teddy, Bekuh BOOM, Victoria Monét, 24, Selena Gomez, Ariana Grande"},{id:"-gZC9hC1PDQ",nome:"Kick It",nomeReduzido:"KickIt",album:"Kill This Love",ano:2019,compositores:"Teddy, 24",japones:!0},{id:"2S24-y0Ij3Y",nome:"Kill This Love",nomeReduzido:"KillThisLove",album:"Kill This Love",ano:2019,compositores:"Teddy, R. Tee, Calabasas Sound",japones:!0,premios:"iHeartRadio Music Award for Favorite Music Video Choreography, People's Choice Award: Videoclipe Favorito"},{id:"AX3Bsiq-13k",nome:"Kiss and Make Up (Dua Lipa com Blackpink)",nomeReduzido:"KissandMakeUp",album:"Dua Lipa: Complete Edition",ano:2018,compositores:"Dua Lipa, Teddy, Ch. Grimes, Y. Rastogi, Z. Raymond, M Lepine, M. Vincent"},{id:"wlzGXcTzdzU",nome:"Love To Hate Me",nomeReduzido:"LoveToHateMe",album:"The Album",ano:2020,compositores:"Tushar Apte, Rob Grimaldi, 24, Vince, Teddy"},{id:"dyRsYk0LyA8",nome:"Lovesick Girls",nomeReduzido:"LovesickGirls",album:"The Album",ano:2020,compositores:"Teddy, Jennie, Brian Lee, Leah Haywood, R. Tee, 24, David Guetta"},{id:"9pdj4iJD08s",nome:"Playing with Fire",nomeReduzido:"PlayingwithFire",album:"Square Two",ano:2020,compositores:"Teddy, R.Tee"},{id:"F8c8f2nK82w",nome:"Pretty Savage",nomeReduzido:"PrettySavage",album:"The Album",ano:2020,compositores:"Teddy, R.Tee, 24, Bekuh BOOM"},{id:"kgWWMfjUG_w",nome:"See U Later",nomeReduzido:"SeeULater",album:"Square Up",ano:2018,compositores:"Teddy, R. Tee, 24"},{id:"fnPn6At3v28",nome:"Sour Candy (Lady Gaga com Blackpink)",nomeReduzido:"SourCandy",album:"Chromatica",ano:2020,compositores:"Stefani Germanotta, Michael Tucker, Matthew Burns, Rami Yacoub, Madison Love, Teddy"},{id:"FzVR_fymZw4",nome:"Stay",nomeReduzido:"Stay",album:"Square Two",ano:2016,compositores:"Teddy, Seo Won-jin"},{id:"dISNgvVpWlo",nome:"Whistle",nomeReduzido:"Whistle",album:"Square One",ano:2016,compositores:"Teddy, Future Bounce, Bekuh BOOM",acustico:!0,premios:"Mnet Asian Music Award: Melhor Vídeo Musical, Golden Disk Award: Prêmio de Newbie do Ano, Seoul Music Awards for Best New Artist"},{id:"4Kk_iaaHd_Y",nome:"You Never Know",nomeReduzido:"YouNeverKnow",album:"The Album",ano:2020,compositores:"24, Bekuh BOOM"}];

capas = ["As If It's Your Last", "asIfIt'sYourLast.jpg", "Chromatica", "chromatica.jpg", "Dua Lipa: Complete Edition", "duaLipa.jpg", "Kill This Love", "killThisLove.jpg", "Square One", "squareOne.jpg", "Square Two", "squareTwo.jpg", "Square Up", "squareUp.jpg", "The Album", "theAlbum.jpg"]

conteudo = ''

for (musica of musicas) {
    capa = capas[capas.indexOf(musica.album) + 1]
    conteudo +=
        `<div class="musica row">
    <a href="https://www.youtube.com/watch?v=${musica.id}" target="_blank"><img class="p-2 col-12 col-sm capa img-fluid" src="img/albuns/${capa}"></a>
    <div class="p-1 col-12 col-sm ${musica.nomeReduzido}">
    <h1 class="p-1 m-1 tituloMusicas">${musica.nome}</h1>
    <p class="p-1 m-1"><span class="album">Álbum:</span> ${musica.album}</p>
    <p class="p-1 m-1"><span class="ano">Ano:</span> ${musica.ano}</p>
    <p class="p-1 m-1"><span class="compositores">Compositor(es):</span> ${musica.compositores}</p>
    </div>
    </div>`
}

document.querySelector('main').innerHTML = conteudo

conteudo = ''

for (musica of musicas) {
    if (musica.premios) {
        conteudo =
            `<p class="p-1 m-1"><span class="p-1 premio">Premios:</span> ${musica.premios}</p>`
        document.querySelector(`.${musica.nomeReduzido}`).innerHTML += conteudo
    }
    if (musica.japones === true) {
        conteudo =
            `<p class="p-1 m-1">Também disponível em versão japonesa</p>`
        document.querySelector(`.${musica.nomeReduzido}`).innerHTML += conteudo
    }
    if (musica.remix === true) {
        conteudo =
            `<p class="p-1 m-1">Também disponível em versão remixada</p>`
        document.querySelector(`.${musica.nomeReduzido}`).innerHTML += conteudo
    }
    if (musica.acustico === true) {
        conteudo =
            `<p class="p-1 m-1">Também disponível em versão acústica</p>`
        document.querySelector(`.${musica.nomeReduzido}`).innerHTML += conteudo
    }
}
