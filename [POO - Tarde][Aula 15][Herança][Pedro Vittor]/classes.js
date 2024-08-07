class Usuario{
    constructor(nome, cpf, dataNasc){
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
    }

    imprimirDados(){
        console.log(`
            Nome: ${this.nome}
            CPF: ${this.cpf}
            Data de Nascimento: ${this.dataNasc}
        `);
    }
}

// A classe Aluno é filha da classe Usuario.
// por isso, ela terá todos os atributos e métodos da classe mãe.
class Aluno extends Usuario{

    constructor(nome, cpf, dataNasc, nomeResponsavel, serie, matricula){
        // OBRIGATÓRIO.
        // chamando o construtor da clsse mão.
        super(nome, cpf, dataNasc); //chama o construtor da classe mãe(Usuario)

        // criando os atributos especificos e inicalizando-os
        this.nomeResponsavel = nomeResponsavel;
        this.serie = serie;
        this.matricula = matricula;
    }

    imprimirDados(){
        console.log(`
            Nome: ${this.nome}
            CPF: ${this.cpf}
            Data de Nascimento: ${this.dataNasc}
            Nome do Responsável: ${this.nomeResponsavel}
            Matricula: ${this.matricula}
        `);
    }
}

class Professor extends Usuario{
    constructor(nome, cpf, dataNasc, formacao, siape){
        super(nome, cpf, dataNasc);
        this.formacao = formacao;
        this.siape = siape;
    }

    imprimirDados(){
        console.log(`
            Nome: ${this.nome}
            CPF: ${this.cpf}
            Data de Nascimento: ${this.dataNasc}
            Formação: ${this.formacao}
            SIAPE: ${this.siape}
        `);
    }
}