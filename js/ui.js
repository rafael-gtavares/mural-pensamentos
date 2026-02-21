import api from "./api.js"

const ui = {
    async preencherForm(idPensamento) {
        const pensamento = await api.buscarPensamentoPorId(idPensamento);

        document.querySelector('#pensamento-id').value = pensamento.id;
        document.querySelector('#pensamento-conteudo').value = pensamento.conteudo;
        document.querySelector('#pensamento-autoria').value = pensamento.autoria;
    },

    async renderizarPensamentos(termoBusca = '') {
        const listaPensamentos = document.querySelector('#lista-pensamentos');
        listaPensamentos.innerHTML = ""

        try {  
            const pensamentos = await api.buscarPensamentos(); 
            const pensamentosFiltrados = pensamentos.filter(pensamento => {
                return pensamento.conteudo.toLowerCase().includes(termoBusca.toLowerCase()) || 
                pensamento.autoria.toLowerCase().includes(termoBusca.toLowerCase());
            })

            pensamentosFiltrados.forEach(pensamento => ui.adicionarPensamento(pensamento));


            if (pensamentosFiltrados.length === 0) {
                if (termoBusca === "") {
                    const listaPensamentos = document.querySelector('#lista-pensamentos')

                    const div = document.createElement('div');
                    div.classList.add('container-vazio')

                    const paragrafo = document.createElement('p');
                    paragrafo.innerHTML = 'Nada por aqui ainda, que tal compartilhar alguma ideia?'
                    paragrafo.classList.add('container-vazio__p');

                    const img = document.createElement('img');
                    img.src = './assets/imagens/caixa-vazia.png';
                    img.alt = 'Caixa vazia';
                    img.classList.add('caixa-vazia-img');

                    div.appendChild(paragrafo);
                    div.appendChild(img);

                    listaPensamentos.appendChild(div)
                }else {
                    listaPensamentos.innerHTML = `<p class="aviso-vazio">Nenhum pensamento encontrado para "${termoBusca}"</p>`
                }
            }
        } catch(erro) {
            ui.exibirNotificacao('Ocorreu um erro na busca de pensamentos. Para saber mais, olhe no console.');
            console.log("Erro: ", erro);
        }
    },

    async exibirNotificacao(mensagem) {
        const container = document.querySelector('#container-notificacoes');
        const elemento = document.createElement('div');
        
        elemento.classList.add('notificacao');
        elemento.textContent = mensagem;
        
        container.appendChild(elemento);

        setTimeout(() => {
            elemento.classList.add('fade-out');
            
            setTimeout(() => {
                elemento.remove();
            }, 1000); 
        }, 2000);
    },

    async adicionarPensamento(pensamento) {
        const listaPensamentos = document.querySelector('#lista-pensamentos');

        const li = document.createElement('li');
        li.setAttribute('data-id', pensamento.id);
        li.classList.add('li-pensamento');

        const img = document.createElement('img');
        img.src = "./assets/imagens/aspas-azuis.png";
        img.alt = "Aspas azuis";
        img.classList.add('icone-aspas');

        const divConteudo = document.createElement('div');
        divConteudo.classList.add('pensamento-conteudo');
        divConteudo.innerHTML = pensamento.conteudo

        const divAutoria = document.createElement('div');
        divAutoria.classList.add('pensamento-autoria');
        divAutoria.innerHTML = pensamento.autoria;

        const botaoEditar = document.createElement('a');
        botaoEditar.classList.add('botao-editar');
        botaoEditar.href = "#main";
        botaoEditar.addEventListener('click', async () => {
            await ui.preencherForm(pensamento.id);

            const subtitulo = document.querySelector('#main_subtitulo');
            subtitulo.innerHTML = 'Edite o seu pensamento:';
        });

        const iconeEditar = document.createElement('img');
        iconeEditar.src = './assets/imagens/icone-editar.png';
        iconeEditar.alt = 'Ícone de editar';
        botaoEditar.appendChild(iconeEditar);

        const botaoExcluir = document.createElement('button');
        botaoExcluir.classList.add('botao-excluir');
        botaoExcluir.addEventListener('click', async (evento) => {
            evento.preventDefault();
            try {
                await api.excluirPensamento(pensamento.id);
                
                ui.exibirNotificacao(`O pensamento de ${pensamento.autoria} foi excluído!`);
                ui.renderizarPensamentos();
            } catch(erro) {
                ui.exibirNotificacao("Erro ao excluir o pensamento.");
            }
        });

        const iconeExcluir = document.createElement('img');
        iconeExcluir.src = './assets/imagens/icone-excluir.png';
        iconeExcluir.alt = 'Ícone de excluir';
        botaoExcluir.appendChild(iconeExcluir);


        const botoes = document.createElement('div');
        botoes.classList.add('icones');
        botoes.appendChild(botaoEditar);
        botoes.appendChild(botaoExcluir);


        li.appendChild(img);
        li.appendChild(divConteudo);
        li.appendChild(divAutoria);
        li.appendChild(botoes);
        listaPensamentos.appendChild(li)
    }
}
export default ui;