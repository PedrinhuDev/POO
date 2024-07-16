let livro1 = new Livro('A Dança dos Dragões', 'George R. R. Martin', 'Alta fantasia', 'Suma');
let livro2 = new Livro('O homem mais rico da Babilônia', 'George S Clason', 'autoajuda', 'HarperCollins');
let livro3 = new Livro('Duna', 'Frank Herbert', 'Ficção científica', 'Aleph');
let livro4 = new Livro('A Guerra dos Tronos', 'George R. R. Martin', 'Alta fantasia', 'Suma');
let livro5 = new Livro('Mente afiada', 'Sanjay Gupta', 'Autoajuda', 'Sextante');

let livrosQueLi = new ListaDeLivros();
let livrosQueQueroLer = new ListaDeLivros();

livrosQueLi.adicionarLivro(livro4)
livrosQueLi.adicionarLivro(livro5)

livrosQueQueroLer.adicionarLivro(livro1)
livrosQueQueroLer.adicionarLivro(livro2)
livrosQueQueroLer.adicionarLivro(livro3)

// Adicionar livros e livrosQueQueroLer

for (let i = 0; i < 3; i++) {
    let titulo = prompt('Título do Livro');
let autor = prompt('Autor do Livro');
let genero = prompt('Gênero do Livro');
let editora = prompt('Editora do Livro');

let livroTemp = new Livro(titulo, autor, genero, editora);

livrosQueQueroLer.adicionarLivro(livroTemp);
    
}

console.log(livrosQueLi);
console.log(livrosQueQueroLer);