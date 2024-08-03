let inputTitulo = document.getElementById('iptTitulo');
let inputArtista = document.getElementById('iptArtista');
let inputAlbum = document.getElementById('iptAlbum');
let buttonAdicionar = document.getElementById('btnAdicionar');
let c1 = document.getElementById('container1');
let cTotal = document.getElementById('containerTotal');

let lista = new Playlist();

function quandoClicaNoBotaoAdicionar() {

    let p1 = new Musica(
        inputTitulo.value,
        inputArtista.value,
        inputAlbum.value
    );

    lista.adicionarMusica(p1);

    console.log(lista);

    desenharPlaylist(lista, c1, cTotal);
    
}

buttonAdicionar.addEventListener('click', quandoClicaNoBotaoAdicionar)
