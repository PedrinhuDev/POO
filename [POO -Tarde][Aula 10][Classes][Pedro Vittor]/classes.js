//Todos os nomes de classes começam com letra maiuscula
//Tem que respeitar a ordem das entradas

class Aluno{ 

    constructor(nome, matricula, cidade, dataDeNascimento){
        this.nome = nome;
        this.matricula = matricula;
        this.cidade = cidade;
        this.dataDeNascimento = dataDeNascimento;
    }

}

class Professor{

     constructor(nome, disciplina, dataDeContratacao){
        this.nome = nome;
        this.disciplina = disciplina;
        this.dataDeContratacao = dataDeContratacao;
     }

}

class Conta{
    constructor(nomeDoTitular, banco, agencia, numeroDaConta){
        this.nomeDoTitular = nomeDoTitular;
        this.banco = banco;
        this.agencia = agencia;
        this.numeroDaConta = numeroDaConta;
        this.saldo = 0;
    }

}