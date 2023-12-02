export default function pesquisaArt() {
    const divPesquisaArt = document.querySelector('#pesquisa-artigo')
    divPesquisaArt.innerHTML = `
        
        <section id="procura-artigo">
            <span id="botao-pesquisa-fechar" class="material-symbols-outlined menu-fechar">close</span>
            
            <h2>Pesquisar artigo</h2>
            <label id="label-numero" for="input-numero-artigo">Digite o número do artigo</label>
            <input id="input-numero-artigo" type="text" min="1" name="numero-artigo" />
        
            <input id="botao-pesquisar-artigo" type="button" value="Pesquisar" />
        
            <div class="linha-horizontal"></div>
            <div id="resultados-pesquisa"></div>
        </section>
    `
}

/*

<section id="procura-artigo">
    <span id="botao-pesquisa-fechar" class="material-symbols-outlined menu-fechar">close</span>
    
    <h2>Pesquisar artigo</h2>
    <label id="label-numero" for="input-numero-artigo">Digite o número do artigo</label>
    <input id="input-numero-artigo" type="text" min="1" name="numero-artigo" />

    <input id="botao-pesquisar-artigo" type="button" value="Pesquisar" />

    <div class="linha-horizontal"></div>
    <div id="resultados-pesquisa"></div>
</section>
*/
