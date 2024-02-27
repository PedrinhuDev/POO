console.log('Testando o console');

let frutas = [];
frutas.push('mamão');
frutas.push('morango');
frutas.push('abacate');
frutas.push('uva');

console.log(frutas);

frutas[3] = 'banana';

console.log(frutas);

//faça o programa percorrer  o array e imprimir
//cada elemento um por um no console.

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

//faça o programa receber 5 lanches e armazená-los em um array chamado lanches
//depois o programa deve imprimir este array no console.

let lanches = [];

for (let i = 0; i < 5; i++) {
    lanches.push = prompt('Digite um lanche: ');     
}
console.log(lanches)