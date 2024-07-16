class Livro{

    constructor(titulo, nomeDoAutor, genero, editora){
        this.titulo = titulo;
        this.nomeDoAutor = nomeDoAutor;
        this.genero = genero;
        this.editora = editora;
    }

}

class ListaDeLivros{

    constructor(){
        this.dataDaCriacao = new Date();
        this.livros = [];
    }

    adicionarLivro(livro){
        if (livro instanceof Livro) {
            this.livros.push(livro)
        }
        else{
            console.error('Só livros, Burro!');
        }
    }

}

// ==============================================================

