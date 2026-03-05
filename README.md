# 💡 Mural de Pensamentos 

O **Mural de Pensamentos** é uma aplicação interativa para organizar insights, frases e ideias. Este projeto nasceu de um desafio do curso da Alura ("JavaScript: Consumindo APIs"), mas foi evoluído com funcionalidades personalizadas de busca, UX aprimorada e design responsivo.

---

## 🚀 Funcionalidades e Melhorias (Além do CRUD)

Para além do básico (Criar, Ler, Atualizar e Deletar), foquei em entregar uma experiência de uso fluida e profissional:

* **Filtro de Pesquisa em Tempo Real**: Localize pensamentos instantaneamente por conteúdo ou autoria enquanto digita.
* **Design Responsivo**: Interface adaptada para uma experiência perfeita em Celulares, Tablets e Desktops.
* **Feedback Visual Avançado (UX)**:
    * **Notificações**: Mensagens personalizadas de sucesso e erro (Toast notifications).
    * **Estado Vazio (Empty State)**: Ilustração e mensagem de boas-vindas quando não há itens cadastrados.
    * **Filtro Vazio**: Feedback específico quando uma busca não retorna resultados.
* **Estabilidade Visual**: Controle de *Layout Shift* (saltos de tela) através de CSS estratégico, mantendo o scroll fixo durante a filtragem.

---

## 🛠️ Tecnologias e Ferramentas

* **JavaScript (ES6+)**: Lógica principal com manipulação dinâmica do DOM.
* **Fetch API**: Comunicação assíncrona para consumo de dados.
* **HTML5 & CSS3**: Estrutura e estilização com animações personalizadas e Media Queries.
* **Backend Online (Deploy)**: Utilização do **MockAPI** para persistência de dados em nuvem.
* **Backend Local (Desenvolvimento)**: **JSON Server** para simulação de API REST.

---

## 📂 Organização do Código

O projeto segue o princípio de **Responsabilidade Única (SRP)** para facilitar a manutenção:

* `api.js`: Centraliza todas as requisições HTTP (GET, POST, PUT, DELETE).
* `ui.js`: Gerencia a interface, renderização de elementos e notificações.
* `main.js`: Orquestra a lógica de inicialização e escuta de eventos (inputs, cliques).

---

## 🎨 Design (Figma)

O projeto seguiu a base visual da Rebrand Memoteca. Você pode [acessar o Figma aqui](https://www.figma.com/design/Sz1gmmemxqcB3amInL4Ndp/Rebrand-Memoteca-%7C-Curso-CRUD?node-id=148-26).

---

## 🔧 Como Rodar o Projeto

### 🌐 Versão Online (Deploy)
Acesse o projeto em funcionamento: **[Clique aqui](https://rafael-gtavares.github.io/mural-pensamentos/)**

### 💻 Rodando Localmente
Caso deseje rodar o projeto com o servidor local (JSON Server):

1.  Clone o repositório.
2.  Instale as dependências na pasta `backend`:
    ```bash
    npm install
    ```
3.  Inicie o servidor:
    ```bash
    npm start
    ```
4.  Abra o arquivo `index.html` utilizando a extensão **Live Server** do VS Code.

---

Desenvolvido por **Rafael Tavares**. 
*Este projeto foi uma oportunidade incrível de aprofundar em requisições assíncronas e entregar uma interface que realmente se adapta às necessidades do usuário.*
