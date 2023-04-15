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

const artigos = document.querySelectorAll(".artigo"); // array com todos os artigos
const botaoPesquisaAbrir = document.querySelector("#botao-pesquisa-abrir");
const menuPesquisa = document.querySelector("#procura-artigo");
const inputPesquisa = document.querySelector("#numero-artigo");
const botaoPesquisar = document.querySelector('#botao-artigo');
const botaoPesquisaFechar = document.querySelector('#botao-pesquisa-fechar');
const secResultados = document.querySelector('#resultados-pesquisa');

artigos.forEach(artigo => { //atribui um id para cada artigo
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

botaoPesquisaFechar.addEventListener("click", function () {
    ocultaMenu(menuPesquisa)
});

botaoPesquisar.addEventListener('click', function() {
    pesquisarArtigos(inputPesquisa.value);
});

function montaResultado(a) {
    if (a.nodeName = 'span') {
        let b = document.createElement('a');
        b.textContent = a.textContent;
        b.classList = a.classList;
        b.id = a.id;
        a = b;
    }
    a.classList.add('resultado-pesquisa');
    a.href = "#" + a.id;
    a.id = "";
    secResultados.appendChild(a);
}

function pesquisarArtigos(query) {
    var resultado = document.querySelectorAll('.artigo:contains(query)');
    resultado.forEach(item => {
        montaResultado(item);
    });
}

// inputPesquisa.addEventListener('input', function () {
//     if (isNaN(inputPesquisa.value)) {
//         botaoPesquisar.disabled = "true";
//         console.log("O input é inválido");
//     } else {
//         botaoPesquisar.disabled = "false";
//     }
// })

