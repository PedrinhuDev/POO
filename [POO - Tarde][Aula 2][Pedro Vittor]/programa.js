let alunos = [];
alunos.push('João')
alunos.push('Maria')
alunos.push('Jusé')
alunos.push('Pedro')
alunos.push('Paulo')

alert(alunos[3]);

alunos[4] = 'Gerson';

alunos.push('Joaquim');

let notas = [10, 8, 5, 7, 9, 6];
console.log(notas);

for (let i = 0; i < alunos.length; i++) {
    console.log(`Aluno: ${alunos[i]} -> Nota: ${notas[i]}`)
    
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-==
//criação de objetos

let aluno1 = {
    nome: 'João',
    cpf: '00000000000',
    nota: 10
}

let aluno2 = {
    nome: 'Maria',
    cpf: '11111111111',
    nota: 8
}

let aluno3 = {
    nome: 'José',
    cpf: '22222222222',
    nota: 5
}

let aluno4 = {
    nome: 'Pedro',
    cpf: '33333333333',
    nota: 7
}

let aluno5 = {
    nome: 'Paulo',
    cpf: '44444444444',
    nota: 9
}

let aluno6 = {
    nome: 'Joaquim',
    cpf: '55555555555',
    nota: 6
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=--==
// Atividade:
// Pesquise 5 carros usados em sites de venda
// Verifique se eles também usam os atributos abaixo.
// Depois crie 5 objetos com as informações pesquisadas.

//modelo;
//marca;
//ano;
//quilometragem;
//potenciaMotor;
//cor;
//preço;

let carro1 = {
    modelo: 'ONIX',
    marca: 'Chevrolet',
    ano: 2021,
    quilometragem: 70.000,
    potenciaMotor: 1.0,
    cor: 'branco',
    preço: 61.500
}

let carro2 = {
    modelo: 'Ford Explore',
    marca: 'Ford',
    ano: 1994,
    quilometragem: 16.600,
    potenciaMotor: 4.0,
    cor: 'Laranja',
    preço: 38.000
}

let carro3 = {
    modelo: 'Fiesta',
    marca: 'Ford',
    ano: 2013,
    quilometragem: 128000, 
    potenciaMotor: 1.6,
    cor: 'Vermelho',
    preço: 18.000
}

let carro4 = {
    modelo: 'Ecosport',
    marca: 'Ford',
    ano: 2016,
    quilometragem: 95000,
    potenciaMotor: 1.6, 
    cor: 'Branco',
    preço: 58.000
}

let carro5 = {
    modelo: 'Ford KA',
    marca: 'Ford',
    ano: 2015,
    quilometragem: 75000,
    potenciaMotor: 1.0,
    cor: 'Branco',
    preço: 37.500
}

let carro6 = {
    modelo: 'HONDA CIVIC',
    marca: 'HONDA',
    ano: 2020,
    quilometragem: 63500,
    potenciaMotor: 2.0,
    cor: 'Branco',
    preço: 116.000
}

let carro7 = {
    modelo: 'Hillux',
    marca: 'TOYOTA',
    ano: 2020,
    quilometragem: 83000,
    potenciaMotor: 2.0,
    cor: 'Branco',
    preço: 219.000
}

let carro8 = {
    modelo: 'Volkswagen Gol',
    marca: 'Volkswagen',
    ano: 2019,
    quilometragem: 47067,
    potenciaMotor: 1.6,
    cor: 'Branco',
    preço: 49.990
}

console.log('');

console.log(`CARROS SEM FOR ---------------------------------------------------------`);

console.log('');

console.log(`${carro1.marca} ${carro1.modelo} ${carro1.ano} --> ${carro1.preço.toFixed(3)}`);
console.log(`${carro2.marca} ${carro2.modelo} ${carro2.ano} --> ${carro2.preço.toFixed(3)}`);
console.log(`${carro3.marca} ${carro3.modelo} ${carro3.ano} --> ${carro3.preço.toFixed(3)}`);
console.log(`${carro4.marca} ${carro4.modelo} ${carro4.ano} --> ${carro4.preço.toFixed(3)}`);
console.log(`${carro5.marca} ${carro5.modelo} ${carro5.ano} --> ${carro5.preço.toFixed(3)}`);

let listaDeCarros = []

listaDeCarros.push(carro1);
listaDeCarros.push(carro2);
listaDeCarros.push(carro3);
listaDeCarros.push(carro4);
listaDeCarros.push(carro5);
listaDeCarros.push(carro6);
listaDeCarros.push(carro7);
listaDeCarros.push(carro8);

console.log(``);

console.log(`CARROS COM FOR ---------------------------------------------------------`);

console.log(``);

for (let i = 0; i < listaDeCarros.length; i++) {
    console.log(`${listaDeCarros[i].marca} ${listaDeCarros[i].modelo} ${listaDeCarros.ano} --> ${listaDeCarros[i].preço.toFixed(3)}`);  
}

