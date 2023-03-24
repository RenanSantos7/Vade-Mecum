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

var inputQualArtigo = document.querySelector('#inputQualArtigo').value;
var testeArtigo = new RegExp("\d+(-\b)?");

//if (Escrever - condição) {
    //inputQualArtigo deve passar por testeArtigo
if (inputQualArtigo<10) {
    var qualArtigo = ". "+inputQualArtigo+"º"
}
//}