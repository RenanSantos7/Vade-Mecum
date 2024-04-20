/**
 * pega lei a partir da versão carregada no navegador
 */
class Lei {
    constructor(titulo, alias, jurisdicao, area, conteudo) {
        this.id = ''
		this.titulo = titulo
		this.alias = alias
		this.linksRelacionados = []
		this.jurisdicao = jurisdicao
		this.area = area
		this.conteudo = conteudo
	}
}

let tituloLei = document.querySelector('#titulo').textContent
let corpo = document.querySelector('#corpo');
corpo.removeChild(corpo.querySelector('#titulo'));
let conteudoLei = corpo.innerHTML;

let novaLei = new Lei(tituloLei, tituloLei, 'nacional', '', conteudoLei)

console.log(novaLei)
