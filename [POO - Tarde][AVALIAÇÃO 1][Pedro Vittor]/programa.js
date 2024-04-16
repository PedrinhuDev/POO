let serie1 = {
    poster:'TheOffice.jpg',
    nome:'The Office',
    atorPrincipal: {
        nome: 'Steve Carell',
        dataDeNascimento: '16 de agosto de 1962',
        nacionalidade: 'norte-americano'
    },
    temporadas:9,
    anoDeLancamento:2005
}

let serie2 = {
    poster:'GOT.jpg',
    nome:'Game of Thrones',
    atorPrincipal: {
        nome: 'Kit Harington',
        dataDeNascimento: '26 de dezembro de 1986',
        nacionalidade: 'britânico'
    },
    temporadas:8,
    anoDeLancamento:2011
}

let serie3 = {
    poster:'Grimm.jpg',
    nome:'Grimm',
    atorPrincipal: {
        nome: 'David Giuntoli',
        dataDeNascimento: '18 de junho de 1980',
        nacionalidade: 'americano'
    },
    temporadas:6,
    anoDeLancamento:2011
}

let serie4 = {
    poster:'Brooklyn-Nine-Nine.jpg',
    nome:'Brooklyn Nine-Nine',
    atorPrincipal: {
        nome: 'Andy Samberg',
        dataDeNascimento: '18 de agosto de 1978',
        nacionalidade: 'norte-americano'
    },
    temporadas:8,
    anoDeLancamento:2013
}

let serie5 = {
    poster:'Moon-Knight.jpg',
    nome:'Moon Knight',
    atorPrincipal: {
        nome: 'Oscar Isaac',
        dataDeNascimento: '9 de março de 1979',
        nacionalidade: 'guatemalteco'
    },
    temporadas:1,
    anoDeLancamento:2022
}

let serie6 = {
    poster:'The-Last-of-Us.png',
    nome:'The Last of Us',
    atorPrincipal: {
        nome: 'Pedro Pascal',
        dataDeNascimento: '2 de abril de 1975',
        nacionalidade: 'chileno-americano'
    },
    temporadas:1,
    anoDeLancamento:2023
}

let serie7 = {
    poster:'The-Witcher.jpg',
    nome:'The Witcher',
    atorPrincipal: {
        nome: 'Henry Cavill',
        dataDeNascimento: '5 de maio de 1983',
        nacionalidade: 'britânico'
    },
    temporadas:3,
    anoDeLancamento:2019
}

let serie8 = {
    poster:'Stranger-Things.jpg',
    nome:'Stranger Things',
    atorPrincipal: {
        nome: 'Millie Bobby Brown',
        dataDeNascimento: '19 de fevereiro de 2004',
        nacionalidade: 'britânica'
    },
    temporadas:4,
    anoDeLancamento:2016
}

let serie9 = {
    poster:'Loki.jpg',
    nome:'Loki',
    atorPrincipal: {
        nome: 'Tom Hiddleston',
        dataDeNascimento: '9 de fevereiro de 1981',
        nacionalidade: 'britânico'
    },
    temporadas:2,
    anoDeLancamento:2021
}

let serie10 = {
    poster:'The-Boys.jpg',
    nome:'The Boys',
    atorPrincipal: {
        nome: 'Karl Urban',
        dataDeNascimento: '7 de junho de 1972',
        nacionalidade: 'neozelandês'
    },
    temporadas:4,
    anoDeLancamento:2019
}

let top5 = [
    serie1,
    serie2,
    serie8,
    serie9,
    serie6
]

let lancamentos = [
    serie3,
    serie4,
    serie5,
    serie7,
    serie10
]

let listaDeSeries = [serie1, serie2, serie3, serie4, serie5, serie6, serie7, serie8, serie9, serie10]

for (let i = 0; i < listaDeSeries.length; i++) {
    document.write(`
    
    <div class="card">
        <img class='poster' src="./img/${listaDeSeries[i].poster}" alt="">
        <p class= "nome">${listaDeSeries[i].nome}</p>
        <p class= "ator">Ator Principal:${listaDeSeries[i].atorPrincipal.nome} <br>Nascimento: ${listaDeSeries[i].atorPrincipal.dataDeNascimento} <br>Nacionalidade: ${listaDeSeries[i].atorPrincipal.nacionalidade}</p>
        <p class= "ano">Lançamento: ${listaDeSeries[i].anoDeLancamento}</p>
        <p class= "temporadas">${listaDeSeries[i].temporadas} Temporadas</p>
    </div>

    `)
    
}