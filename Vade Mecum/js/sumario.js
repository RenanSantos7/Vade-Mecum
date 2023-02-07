var sumario = document.getElementById("sumario");
var toc1 = document.getElementsByClassName("sum1");
var lista = document.createElement("ul");

for (var i=0; i < toc1.length; i++) {
    var itemlista = document.createElement("li");
    itemlista.textContent = toc1[i].textContent;
    lista.appendChild(itemlista);
}

sumario.appendChild(lista);