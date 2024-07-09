let notebook1 = {
    marca: 'Dell',
    modelo: 'Inspiron 15',
    procossador: 'Intel® Core™  i5-1235U ',
    ram: '8GB DDR4',
    armazenamento: 'SSD de 512GB',
    tamanhoDaTela: 'Full HD de 15.6" (1920 x 1080), 120 Hz, WVA',
    valor: 2699.00
}

let notebook2 = {
    marca: 'Acer',
    modelo: 'Aspire 5',
    procossador: 'Intel Core i5 12º Geração',
    ram: '8GB RAM',
    armazenamento: '256GB SSD',
    tamanhoDaTela: '15.6" LED Full HD TN 60hz',
    valor: 2609.00
}

let notebook3 = {
    marca: 'Samsung',
    modelo: 'Galaxy Book Go',
    procossador: 'Samsung',
    ram: '4 GB',
    armazenamento: '128 GB',
    tamanhoDaTela: '14 Polegadas',
    valor: 1852.00
}

let notebook4 = {
    marca: 'ASUS',
    modelo: 'Vivobook 15',
    procossador: 'Intel Core i5',
    ram: '8GB',
    armazenamento: '512GB SSD',
    tamanhoDaTela: '15,6 Polegadas',
    valor: 2792.90
}

let notebook5 = {
    marca: 'Lenovo',
    modelo: 'IdeaPad 1',
    procossador: 'Core i3-1215U',
    ram: '4GB',
    armazenamento: '256 GB',
    tamanhoDaTela: '15.6 Polegadas',
    valor: 2006.00
}

let listaDeNotebooks = []
listaDeNotebooks.push(notebook1);
listaDeNotebooks.push(notebook2);
listaDeNotebooks.push(notebook3);
listaDeNotebooks.push(notebook4);
listaDeNotebooks.push(notebook5);

for (let i = 0; i < listaDeNotebooks.length; i++) {
    console.log(`
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-==-=-=-=
        ${listaDeNotebooks[i].marca} 
        ${listaDeNotebooks[i].modelo} 
        Processador: ${listaDeNotebooks[i].procossador}
        Memória RAM: ${listaDeNotebooks[i].ram}
        Armazenamento: ${listaDeNotebooks[i].armazenamento}
        Valor $R ${listaDeNotebooks[i].valor} 
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-==-=-=-=
    `);
    
}
