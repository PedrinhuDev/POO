function desenharPlaylist(lista, tagHTML) {

    tagHTML.innerHTML = '';

    for (let i = 0; i < lista.listaDeMusicas.length; i++) {
        tagHTML.innerHTML += `
        <div class='card'>
            <span>${lista.listaDeMusicas[i].titulo}</span>
            <span>${lista.listaDeMusicas[i].artista}</span>
            <span>${lista.listaDeMusicas[i].album}</span>
        </div>`;
    }
}