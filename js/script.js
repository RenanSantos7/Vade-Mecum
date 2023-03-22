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

//var artigos = document.getElementsByClassName("artigo");

// artigos.forEach(artigo => {
//     artigo.outerHTML
// });

//Pedir o número para o usuário -> colocar numa variável do tipo número
//Para ir para o artigo, basta pegar o seu número -1 e usá-lo como índice no array 'artigos'