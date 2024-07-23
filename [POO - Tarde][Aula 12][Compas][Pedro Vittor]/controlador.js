let inputId = document.getElementById('iptId');
let inputDescricao = document.getElementById('iptDescricao');
let inputPrecoUnico = document.getElementById('iptPrecoUnitario');
let buttonAdicionar = document.getElementById('btnAdicionar');
let c1 = document.getElementById('container1');

// ==========================================================
let cesta = new CarrinhoDeCompras();
// ==========================================================

function quandoClicaNoBotaoAdicionar() {

    let p1 = new Produto(
        inputId.value,
        inputDescricao.value,
        inputPrecoUnico.value
    );

    cesta.adicionarProduto(p1);

    console.log(cesta);

    desenharCarrinhoDeCompras(cesta, c1);
}

buttonAdicionar.addEventListener('click', quandoClicaNoBotaoAdicionar)


