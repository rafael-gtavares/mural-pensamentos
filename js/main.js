import ui from "./ui.js";
import api from "./api.js";

function cancelarPensamento(evento) {
    const formPensamento = document.querySelector('#pensamento-form');
    formPensamento.reset();

    const pensamentoID = document.querySelector('#pensamento-id');
    pensamentoID.value = "";

    const subtitulo = document.querySelector('#main_subtitulo');
    subtitulo.innerHTML = 'Adicione um pensamento novo:';

    /*document.querySelector('#main_subtitulo').innerHTML = 'Adicione um pensamento novo:';
    document.querySelector('#pensamento-id').value = "";*/
};

document.addEventListener('DOMContentLoaded', async () => {
    await ui.renderizarPensamentos();

    const formPensamento = document.querySelector('#pensamento-form');
    formPensamento.addEventListener('submit', submeterDados);

    const botaoCancelar = document.querySelector('#botao-cancelar');
    botaoCancelar.addEventListener('click', cancelarPensamento);

    const campoBusca = document.querySelector('#campo-busca');
    campoBusca.addEventListener('input', (evento) => {
        ui.renderizarPensamentos(evento.target.value);
    })
});

async function submeterDados(evento) {
    evento.preventDefault();

    const id = document.querySelector('#pensamento-id').value;
    const conteudo = document.querySelector('#pensamento-conteudo').value;
    const autoria = document.querySelector('#pensamento-autoria').value;
    
    const pensamento = { conteudo, autoria };
    if (id) {
        pensamento.id = id;
        const subtitulo = document.querySelector('#main_subtitulo');
        subtitulo.innerHTML = 'Adicione um pensamento novo:';
    }

    try {
        const acao = id ? api.editarPensamento(pensamento) : api.salvarPensamento(pensamento);
        await acao;

        evento.target.reset();
        document.querySelector('#pensamento-id').value = "";
        ui.renderizarPensamentos(); 

    } catch (erro) {
        const tipoErro = id ? 'edição' : 'salvamento';
        ui.exibirNotificacao(`Erro na ${tipoErro} do pensamento. Verifique o console.`);
        console.error(`Erro na ${tipoErro}:`, erro);
    }
};
