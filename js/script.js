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


//Ativar Itens do Orçamento

const parametros = new URLSearchParams(location.search); //Retorna uma Array com os paramentros de busca.

//Função que mostra cada parametro dentro da array.
function ativarProduto(parametro) {
    //Selecionando o elemento pelo ID.
    const elemento = document.getElementById(parametro);
    //Verificar se os parametros existem, mesmo que tenham outros.
    if (elemento) {
        elemento.checked = true; //Marcar o box com o tipo de seguro selecionado.
    }

}

parametros.forEach(ativarProduto);


