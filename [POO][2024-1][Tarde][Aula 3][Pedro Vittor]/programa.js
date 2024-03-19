let celular1 = {
    foto:'XiaomiC65.jpg',
    marca: 'Xiaomi',
    modelo: 'C65',
    armazenamento: '256 GB',
    ram: '8 G',
    procossador: 'MediaTek',
    tipoTela: '6,74 Polegadas',
    cor: 'Purple',
    bateria: '5000 Milliampere Hour (mAh)',
    preco: 899.00
}

let celular2 = {
    foto: 'realme11x.jpg',
    marca: 'Realme',
    modelo: 'Realme 11X',
    armazenamento: '128 GB',
    ram: '8 GB',
    procossador: 'MediaTek',
    tipoTela: 'AMOLED',
    cor: 'Purple Dawn',
    bateria: '5000 Milliampere Hour (mAh)',
    preco: 1379.90
}

let celular3 = {
    foto: 'MotoG54.png',
    marca: 'Motorola',
    modelo: 'Moto G54',
    armazenamento: '256 GB',
    ram: '8 G',
    procossador: 'Dimensity 7020',
    tipoTela: 'IPS',
    cor: 'Verde - Vegan Leather',
    bateria: '5000 mAh',
    preco: 1299.00
}

let celular4 = {
    foto: 'GalaxyS24.jpg',
    marca: 'Samsung',
    modelo: 'Galaxy S24',
    armazenamento: '256 GB',
    ram: '8 GB',
    procossador: 'Qualcomm',
    tipoTela: 'Infinita Dynamic AMOLED 2X',
    cor: 'Creme',
    bateria: '4000mAh',
    preco: 9899.10
}

let celular5 = {
    foto: 'Smart7.jpg',
    marca: 'Infinix',
    modelo: 'Smart 7',
    armazenamento: '64GB',
    ram: '3GB',
    procossador: 'MediaTek Helio A22',
    tipoTela: 'Imersiva LCD IPS True Bright',
    cor: 'Preto',
    bateria: 'Li-Ion, 5000 mAh',
    preco: 539.10
}

let celular6 = {
    foto: 'iPhone13.jpg',
    marca: 'Apple',
    modelo: 'iPhone 13',
    armazenamento: '128GB',
    ram: '4.0GB',
    procossador: 'A15 Bionic',
    tipoTela: 'Super Retina XDR',
    cor: 'Estelar',
    bateria: 'Bateria interna recarregável de íon de lítio',
    preco: 3799.05
}

let celular7 = {
    foto: 'MotoG23.jpg',
    marca: 'Motorola',
    modelo: 'Moto G23',
    armazenamento: '128GB',
    ram: '4GB',
    procossador: 'Helio G85 Octa-Core',
    tipoTela: 'IPS',
    cor: 'Azul',
    bateria: '5000mAh',
    preco: 899.10
}

let listaDeCelulares = [celular1, celular2, celular3, celular4, celular5, celular6, celular7]

for (let i = 0; i < listaDeCelulares.length; i++) {
    console.log(`

    ${listaDeCelulares[i].marca} ${listaDeCelulares[i].modelo} ${listaDeCelulares[i].armazenamento} ${listaDeCelulares[i].ram} ${listaDeCelulares[i].cor} --> R$ ${listaDeCelulares[i].preco}

    `);
    
    document.write(`

    <div class= 'card'>
        <img class='foto' src='img/${listaDeCelulares[i].foto}'>
        <p class= 'nome'> ${listaDeCelulares[i].marca}  ${listaDeCelulares[i].modelo} </p>
        <p class= 'armazenamento'> ${listaDeCelulares[i].armazenamento} </p>
        <p class= 'ram'> ${listaDeCelulares[i].ram} </p>
        <p class= 'processador'> ${listaDeCelulares[i].procossador} </p>
        <p class= 'tipo_de_tela'> ${listaDeCelulares[i].tipoTela} </p>
        <p class= 'cor'> ${listaDeCelulares[i].cor} </p>
        <p class= 'bateria'> ${listaDeCelulares[i].bateria} </p>
        <p class= 'preco'> R$ ${listaDeCelulares[i].preco} </p>
    </div>

    `)
}