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

//Perguntas Frequêntes

//Selecionar a classe dos elementos que queremos add o evento de clicar.
const perguntas = document.querySelectorAll('.perguntas button');

//Função que vai ocorrer ao 'click'
function ativarPergunta(event) {
    //Puxar o elemento que estou clicando.
    const pergunta = event.currentTarget;
    //Puxar o valor do atributo que tem na pergunta.
    const controls = pergunta.getAttribute('aria-controls');
    //Selecionar o elemento que contem a resposta através do controls.
    const resposta = document.getElementById(controls);

    //Adicionar uma classe no elemento que contem a resposta.
    resposta.classList.toggle('ativa');
    //Mudar o atributo do Aria-Expended.
    const ativa = resposta.classList.contains('ativa');
    pergunta.setAttribute('aria-expended', ativa);

}

//Função que add o evento de click.
function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta)
}

//Criar a função de clicar para CADA pergunta.
perguntas.forEach(eventosPerguntas);
