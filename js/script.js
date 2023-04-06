// % Menu Lateral

var menu = document.getElementById("menu");
var botaoMenuAbrir = document.getElementById("botao-menu-abrir");
var botaoMenuFechar = document.getElementById("botao-menu-fechar")

function mostraMenu() {
    menu.style.left = "0";
}

function ocultaMenu() {
    menu.style.left = "-500px";
}

botaoMenuAbrir.addEventListener("click", mostraMenu);
botaoMenuFechar.addEventListener("click", ocultaMenu);

// % Procurar Artigo

const artigos = document.querySelectorAll(".artigo");

artigos.forEach(artigo => {
    let numeroArtigo = artigo.textContent;
    numeroArtigo = numeroArtigo.replace(/\./g, "");
    numeroArtigo = numeroArtigo.replace(/ /g, "");
    numeroArtigo = numeroArtigo.replace("º", "");
    numeroArtigo = numeroArtigo.replace(/-/g, "");
    numeroArtigo = numeroArtigo.toLowerCase();
    artigo.id = numeroArtigo;
});

// % MOSTRAR MENU DE PESQUISA DE ARTIGO

