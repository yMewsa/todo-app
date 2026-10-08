# ToDoList - Next

## Introdução ao desenvolvimento de uma aplicação To-Do com Next.js e MongoDB

## Objetivos

Aplicação de Lista de Tarefas completa, integrando o front do Next.js com backend em API Routes e o MongoDB. Consolidando ideias de arquitetura Full-Stack dentro de um mesmo framework.

- Criar e configurar um projeto Next.js com typescript
- Configurar a conexão com o MongoDB usando Mongoose
- Criar uma modelagem de dados
- Implementar rotas de API ( Listar, Cadastrar, Atualizar e Excluir tarefas)
- Consumir essas rostas a partir do FrontEnd
- Compreender o fluxo do CRUD na aplicação

## Contextualização

A aplicação deve permitir que o Usuário:
- Adicione uma nova tarefa
- Visualize todas as tarefas cadastradas
- Marque tarefa como concluída ou pendente
- Remova itens da lista
- Tenha persistência de dados em banco

## Visão Geral da Arquitetura

```mermaid
flowchart TB
    Frontend["Frontend<br/> React + Next.js<br/>Componentes e interface"]
    API["API Routes (Next.js)<br/>/api/todos"]
    MongoDB["MongoDB<br/>Armazenamento de Tarefas"]

    Frontend -->|Request HTTP / fetch| API
    API --> |Solicitação Mongoose| MongoDB
    MongoDB --> |Devolve a Solicitação| API
    API --> |Response HTTP/ fetch| Frontend
```

## Escopo do Projeto

### FrontEnd (Next.js/React)

- exibição da lista de tarefas;
- formulário para adicionar novas tarefas;
- botão para alternar status (concluída ou pendente);
- botão para excluir tarefas;
- atualização dinâmica da interface sem recarregar a página.

### BackEnd (Next.js API Routes)

- exibição da lista de tarefas;
- formulário para adicionar novas tarefas;
- botão para alternar status (concluída ou pendente);
- botão para excluir tarefas;
- atualização dinâmica da interface sem recarregar a página.

### Banco de Dados (MongoDB)

- armazenamento das tarefas;
- persistência do título e do status de conclusão;
- conexão segura e reutilizável com o banco.

## Estrutura do Projeto

```text
todo-app/
|-- src/
|   |-- app/
|   |   |-- pages/
|   |   |-- componentes/
|   |   |-- model/
```

## Dependências
npm install mongoose
> Permite conectar a aplicação ao MongoDB, definir Modelos para os dados e realizar operações do CRUD

npm install -D @types/react @types/node
> Adiciona definições para o TypeScript dos componentes React e Node
