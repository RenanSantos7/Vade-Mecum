// % Menu Lateral

var menuLinks = document.getElementById("menu");
var botaoMenuAbrir = document.getElementById("botao-menu-abrir");
var botaoMenuFechar = document.getElementById("botao-menu-fechar")

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

const artigos = document.querySelectorAll(".artigo");
const botaoPesquisaAbrir = document.querySelector("#botao-pesquisa-abrir");
const menuPesquisa = document.querySelector("#procura-artigo");
const inputPesquisa = document.querySelector("#numero-artigo");
const botaoPesquisar = document.querySelector('#botao-artigo');

artigos.forEach(artigo => {
    let numeroArtigo = artigo.textContent;
    numeroArtigo = numeroArtigo.replace(/\./g, "");
    numeroArtigo = numeroArtigo.replace(/ /g, "");
    numeroArtigo = numeroArtigo.replace("º", "");
    numeroArtigo = numeroArtigo.replace(/-/g, "");
    numeroArtigo = numeroArtigo.toLowerCase();
    artigo.id = numeroArtigo;
});

botaoPesquisaAbrir.addEventListener("click", function () {
    mostraMenu(menuPesquisa)
})

// inputPesquisa.addEventListener('input', function () {
//     if (isNaN(inputPesquisa.value)) {
//         botaoPesquisar.disabled = "true";
//         console.log("O input é inválido");
//     } else {
//         botaoPesquisar.disabled = "false";
//     }
// })

