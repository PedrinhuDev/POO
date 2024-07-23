function desenharCarrinhoDeCompras(carrinho, tagHTML) {

    tagHTML.innerHTML = '';

    for (let i = 0; i < carrinho.listaDeProdutos.length; i++) {
        tagHTML.innerHTML += `
        <div class='card'>
            <span>${carrinho.listaDeProdutos[i].id}</span>
            <span>${carrinho.listaDeProdutos[i].descricao}</span>
            <span>${carrinho.listaDeProdutos[i].precoUnitario}</span>
        </div>`;
        
    }
}