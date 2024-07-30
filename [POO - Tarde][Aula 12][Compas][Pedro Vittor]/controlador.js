let inputId = document.getElementById('iptId');
let inputDescricao = document.getElementById('iptDescricao');
let inputFabricante = document.getElementById('iptFabricante');
let inputPrecoUnico = document.getElementById('iptPrecoUnitario');
let buttonAdicionar = document.getElementById('btnAdicionar');
let c1 = document.getElementById('container1');
let cTotal = document.getElementById('containerTotal');

// ==========================================================
let cesta = new CarrinhoDeCompras();
// ==========================================================

function quandoClicaNoBotaoAdicionar() {

    let p1 = new Produto(
        inputId.value,
        inputDescricao.value,
        inputFabricante.value,
        inputPrecoUnico.value
    );

    cesta.adicionarProduto(p1);

    console.log(cesta);

    desenharCarrinhoDeCompras(cesta, c1, cTotal);
    
    console.log(cesta.calcularTotal());
}

buttonAdicionar.addEventListener('click', quandoClicaNoBotaoAdicionar)


