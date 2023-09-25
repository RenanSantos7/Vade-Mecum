// % Menu Lateral

const menuLinks = document.getElementById("menu");
const botaoMenuAbrir = document.getElementById("botao-menu-abrir");
const botaoMenuFechar = document.getElementById("botao-menu-fechar")

function mostraMenu(menu) {
    menu.style.left = "0";
}

function ocultaMenu(menu) {
    menu.style.left = "-500px";
}

botaoMenuAbrir.addEventListener("click", function () {
    mostraMenu(menuLinks)
});

botaoMenuFechar.addEventListener("click", function () {
    ocultaMenu(menuLinks)
});

// % Procurar Artigo

const botaoPesquisaAbrir = document.querySelector("#botao-pesquisa-abrir");
const menuPesquisa = document.querySelector("#procura-artigo");
const inputPesquisa = document.querySelector("#numero-artigo");
const botaoPesquisar = document.querySelector('#botao-artigo');
const botaoPesquisaFechar = document.querySelector('#botao-pesquisa-fechar');
const secResultados = document.querySelector('#resultados-pesquisa');

const artigos = document.querySelectorAll(".artigo"); // array com todos os artigos
const pesquisaArtigos = Array.from(artigos).map(item => item.textContent.replace("Art. ","").replace("º","").replace(".","").replace("-",""))
