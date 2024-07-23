class Produto{
    constructor(id, descricao, precoUnitario){
        this.id = id;
        this.descricao = descricao;
        this.precoUnitario = precoUnitario;
    }
}

class CarrinhoDeCompras{
    constructor(){
        this.dataDeCriacao = '23-07-2024'
        this.listaDeProdutos = [];
    }

    adicionarProduto(produto){
        if (produto instanceof Produto) {
            this.listaDeProdutos.push(produto);
        }
        else{
            console.log('Produto não encontrado');
        }
    }
}