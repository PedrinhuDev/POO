class Musica{
    constructor(titulo, artista, album){
        this.titulo = titulo;
        this.artista = artista;
        this.album = album;
    }
}

class Playlist{
    constructor(){
        this.listaDeMusicas = []
    }

    adicionarMusica(Musica){
        this.listaDeMusicas.push(Musica);
    }
}