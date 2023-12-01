import menu from './componentes/menu.js'
import procuraArt from './componentes/procura-artigo.js'

menu()
procuraArt()

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

const botaoAbrirPesquisa = document.querySelector("#botao-pesquisa-abrir");
const menuPesquisa = document.querySelector("#procura-artigo");
const inputPesquisa = document.querySelector("#input-numero-artigo");
const botaoPesquisarArtigo = document.querySelector('#botao-pesquisar-artigo');
const botaoFecharPesquisa = document.querySelector('#botao-pesquisa-fechar');
const divResultados = document.querySelector('#resultados-pesquisa');

// NodeList com todos os artigos
const artigos = document.querySelectorAll(".artigo");

// converte a NodeList em arrray simples
const artigosArray = Array.from(artigos)
const idArtigos = artigosArray.map(item => item.textContent
    .replace("Art. ", "")
    .replace("º", "")
    .replaceAll(".", "")
    .replaceAll("-", ""))

function pesquisarArtigos() {
    const criterioPesquisa = inputPesquisa.value
    const indResultadoPesquisa = idArtigos.findIndex(item => item.match(new RegExp(criterioPesquisa, 'i')))
    const resultadoPesquisa = artigos[indResultadoPesquisa]
    const resultadoPesquisaStr = resultadoPesquisa.textContent
    const idResultado = idArtigos[indResultadoPesquisa]
    
    const resultado = document.createElement('a')
    resultado.setAttribute('class', 'resultado-pesquisa')
    resultado.setAttribute('href', `#${idResultado}`)
    resultado.textContent = `${resultadoPesquisaStr}`

    divResultados.appendChild(resultado)

    resultado.addEventListener('click', () => {
        ocultaMenu(menuPesquisa)
        divResultados.innerHTML = ''
        inputPesquisa.value = ''
    })
}

for (let i = 0; i < artigos.length; i++) {
    artigos[i].setAttribute('id', `${idArtigos[i]}`)
}

botaoAbrirPesquisa.addEventListener('click', () => {
    mostraMenu(menuPesquisa)
})

botaoFecharPesquisa.addEventListener('click', () => {
    ocultaMenu(menuPesquisa)
})

botaoPesquisarArtigo.addEventListener('click', pesquisarArtigos)

inputPesquisa.addEventListener('keydown', (event) => {
    if (event.key == "Enter" && inputPesquisa.value != '') {
        pesquisarArtigos()
    }
})