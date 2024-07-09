let aluno1 = new Aluno('Pedro', '202440028922', 'Maceió', '26/04/2002');
console.log(aluno1.nome);

let aluno2 = new Aluno('João', '202440028923', 'Maceió', '24/06/2003');
let aluno3 = new Aluno('Maria', '202440028924', 'Maceió', '01/04/2004');
let aluno4 = new Aluno('José', '202440028925', 'Maceió', '10/01/2005');

console.log(`${aluno2.nome}, Data de Nascimento: ${aluno2.dataDeNascimento}`);
console.log(`${aluno3.nome}, Data de Nascimento: ${aluno3.dataDeNascimento}`);
console.log(`${aluno4.nome}, Data de Nascimento: ${aluno4.dataDeNascimento}`);

//========================================================================================

let professor1 = new Professor('Alex', 'POO', '2019');
let professor2 = new Professor('João', 'Português', '2022');
let professor3 = new Professor('Maria', 'História', '2020');

console.log(`Nome: ${professor1.nome}, Disciplina: ${professor1.disciplina}, Data de contratação: ${professor1.dataDeContratacao}`);
console.log(`Nome: ${professor2.nome}, Disciplina: ${professor2.disciplina}, Data de contratação: ${professor2.dataDeContratacao}`);
console.log(`Nome: ${professor3.nome}, Disciplina: ${professor3.disciplina}, Data de contratação: ${professor3.dataDeContratacao}`);



let alunos = [];

// instanceof verifica se o objeto é de determinada classe

if (professor1 instanceof Aluno) {
    alunos.push(aluno4);
}
if (aluno1 instanceof Aluno) {
    alunos.push(aluno1);
}

console.log(`VERIFICAÇÃO DE CLASSE -----------------------`)
console.log(alunos);

//=======================================================================================

let conta1 = new Conta('Pedro', 'Nuback', 'app/site', '0123456789', 0.75);
let conta2 = new Conta('Melyes', 'Bradesco', 'Centro', '0123456766', 883745.00);
let conta3 = new Conta('Lulu', 'Caixa', 'Alí', '0123456376', 7632.00);

console.log(`Nome: ${conta1.nomeDoTitular}, ${conta2.banco}, ${conta1.agencia}, ${conta1.numeroDaConta}, ${conta1.saldo}`);


