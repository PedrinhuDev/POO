let clienteA = {
    nome: 'João',
    endereco: 'Rua Tal, 10 - Tabuleiro - Maceío - AL - CEP: 57000-000'
}

let clienteB = {
    nome: 'Cleiton',
    rua: 'X',
    numero: '15',
    bairro: 'Mata do Rolo',
    cidade: 'Rio Largo',
    estado: 'AL',
    cep: '57000-000'
}

let clienteC = {
    nome: 'Rasta',
    endereco: {
        rua: 'da Pedra',
        numero: '20',
        bairro: 'Centro',
        ciddade: 'Cajueiro'
    }
}

//como imprimir cidade de cada cliente
console.log(`${clienteA.endereco}`);
console.log(`${clienteB.cidade}`);
console.log(`${clienteC.endereco.ciddade}`);

//======================================================================

let alunoA = {
    nome: 'José',
    diciplinas: ['POO', 'PWEB']
}

console.log(`${alunoA.diciplinas}`);

alunoA.diciplinas.push('BD');

console.log(`${alunoA.diciplinas}`);

let alunoB = {
    nome: 'Maria',
    historico: {
        poo: 10,
        pweb: 9,
        bd: 9.5,
        aps: 10
    }
}

console.log(``);


//=======================================================================

let turmaX = {
    codigo: 'INFO034',
    disciplina: 'POO',
    alunos: [
        'Edilene',
        'Sthefany',
        'Pedro',
        'Daniel',
        'Nathalya',
        'Katiane',
        'Matheus',
        'Airton'
    ]
}

//console.log(`${turmaX.alunos[4]}`);

let turmaY = {
    codigo: 'INFO034',
    disciplina: 'POO',
    alunos: [
       {
        nome: 'Daniel',
        cpf: '000.000.000-00'
       },
       {
        nome: 'Pedro',
        cpf: '111.111.111-11'
       },
       {
        nome: 'Airton',
        cpf: '222.222.222-22'
       }
    ]
}

console.log(`${turmaY.alunos[1].nome}`);
console.log(`${turmaY.alunos[1].cpf}`);