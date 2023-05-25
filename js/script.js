//Menu Ativo

//Seleção dos Links do Menu
const links = document.querySelectorAll('.header-menu a');

//Adicionar Função para cada um dos links do Menu
function ativarLink(link) {
    const url = window.location.href;
    const href = link.href;

    if(url.includes(href)) {
        link.classList.add('ativo')

    }

}

links.forEach(ativarLink);
