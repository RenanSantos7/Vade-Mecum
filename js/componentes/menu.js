export default function menu() {
    const menuContainer = document.querySelector('#menu-container')
    menuContainer.innerHTML = `
        <nav id="menu">
            <span id="botao-menu-fechar" class="material-symbols-outlined menu-fechar">close</span>	
            <h2><a href="../index.html">Vade Mecum</a></h2>
            <ul class="menu__links-container">
            </ul>
        </nav>
        <span id="botao-menu-abrir" class="material-symbols-outlined">menu</span>
    `
    const elMenuLinks = document.querySelector('.menu__links-container')
    links.forEach(link => {
        elMenuLinks.innerHTML += `<li><a target="_blank" href="${link.url}">${link.nome}</a></li>`
    })()
}