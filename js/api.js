import ui from "./ui.js"

// Para rodar localmente: const URL_BASE = 'http://localhost:3000';
const URL_BASE = 'https://699944639a9ce1d259f17ef2.mockapi.io/';

const api = {
    async buscarPensamentos(termoBusca = "") {
        try {
            const url = `${URL_BASE}/pensamentos`;
            const response = await fetch(url);
            
            console.log('Pensamentos carregados')
            return await response.json();
        } catch (erro) {
            ui.exibirNotificacao('Ocorreu um erro na busca de pensamentos. Para saber mais, olhe no console.');
            console.log("Erro: ", erro);
        }
    }, 

    async salvarPensamento(pensamento) {
        try {
            const url = `${URL_BASE}/pensamentos`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            });

            console.log('Pensamento salvo')
            return await response.json();
        } catch (erro) {
            ui.exibirNotificacao('Ocorreu um erro no salvamento de pensamentos. Para saber mais, olhe no console.');
            console.log("Erro: ", erro);
        }
    },

    async buscarPensamentoPorId(id) {
        try {
            const url = `${URL_BASE}/pensamentos/${id}`;
            const response = await fetch(url);

            return await response.json()
        } catch(erro) {
            ui.exibirNotificacao('Erro na busca do pensamento com id: ', id, ". Para mais detalhes, verifique o console.")
            console.log('Erro na busca do pensamento com id: ', id,
                'Erro: ', erro
            )
        }
    },

    async editarPensamento(pensamento) {
        try {
            const url = `${URL_BASE}/pensamentos/${pensamento.id}`;
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            });

            console.log('Pensamento editado: ', pensamento)
            return await response.json();
        } catch(erro) {
            ui.exibirNotificacao('Erro ao editar pensamento. Para mais detalhes verifique o console.');
            console.log('Erro ao editar pensamento: ', erro)
        }
    },

    async excluirPensamento(id) {
        try {
            const url = `${URL_BASE}/pensamentos/${id}`;
            const response = await fetch(url, {
                method: "DELETE",
            });

            console.log('Pensamento excluído! Id: ', id)
        } catch(erro) {
            ui.exibirNotificacao('Erro ao excluir pensamento. Para mais detalhes verifique o console.');
            console.log('Erro ao excluir pensamento (id: ', id, '): ', erro)
        }
    }
}

export default api;