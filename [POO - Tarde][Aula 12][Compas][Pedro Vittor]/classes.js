class Produto{
    constructor(id, descricao, fabricante, precoUnitario){
        this.id = id;
        this.descricao = descricao;
        this.fabricante = fabricante;
        this.precoUnitario = Number(precoUnitario);
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

    calcularTotal(){
        let total = 0;
        for (let i = 0; i < this.listaDeProdutos.length; i++){
            total += this.listaDeProdutos[i].precoUnitario;
        }
        return total;
    }
}