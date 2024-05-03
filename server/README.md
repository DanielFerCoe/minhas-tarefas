
# Minhas Tarefas API

API RESTful desenvolvida para a aplicação Minhas Tarefas, usando conceitos de SOLID e também Factory Pattern para facilitar o uso de testes unitários e testes E2E.

### Tecnologias Utilizadas

* [Node](https://nodejs.org/en)
* [TypeScript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/pt-br/)
* [Prisma](https://www.prisma.io/)
* [PostgreSQL](https://www.postgresql.org/)
* [Docker](https://www.docker.com/)
* [Vitest](https://vitest.dev/)


## Dependências e Versões Necessárias

* Node - Versão: 18
* Docker - Versão: 25

## ▶️ Como executar o projeto 

Instalar as dependências do Node

```
npm i
```

Criar container no Docker

```
docker compose up
```

Rodar as migrations do Prisma

```
npx prisma migrate dev
```

Iniciar no modo de desenvolvimento

```
npm run start:dev
```

⚠️ Lembre-se de preencher o arquivo .env assim como o .env.example. Caso escolha usar configurações personalizadas no banco de dados, edite o arquivo docker-compose.yml na raiz do projeto.

Se tudo ocorrer bem no terminal será exibido: HTTP server is running ▶.

## ▶️ Como executar os testes

Para executar os testes unitários

```
npm run test
```

Para executar os testes unitários e continuar rodando enquanto edita os arquivos

```
npm run test:watch
```

Para executar os testes e2e (end-to-end)

```
npm run test:e2e
```

Para executar os testes e2e e continuar rodando enquanto edita os arquivos

```
npm run e2e:watch
```

## 📌 Rotas HTTP 📌

## `GET /tasks/day`
**Parâmetros (query):**
- date: Date

**Resposta:**
- Status: `200 OK`
- Corpo (exemplo):
  ```json
    {
      "possibleTasks": [
        {
          "id": "1c497a09-b0bc-4383-b9ab-446af6e227fb",
          "title": "Exemplo 1",
          "created_at": "2024-03-13T03:00:00.000Z",
          "deleted_at": "2024-03-15T03:00:00.000Z"
        },
        {
          "id": "311281f9-47ad-44d7-a9b4-cf620e598839",
          "title": "Exemplo 2",
          "created_at": "2024-03-07T03:00:00.000Z",
          "deleted_at": null
        }
      ],
      "completedTasks": ["311281f9-47ad-44d7-a9b4-cf620e598839"]
    }

## `POST /tasks`
**Parâmetros (body):**
 ```json
  {
    "title": "Exemplo",
    "weekDays": [3,4]
  }
 ```

⚠️ O weekDays é um array de numeros de 0 a 6, sendo 0 domingo e 6 sábado

**Resposta:**
- Status: `201 CREATED`
- Corpo (exemplo):
  ```json
  {
    "task": {
      "id": "921bf40c-3111-4896-8f05-8680a6592430",
      "title": "Exemplo",
      "created_at": "2024-03-22T03:00:00.000Z",
      "deleted_at": null
    }
  }

## `PATCH /tasks/:id/toggle`
**Parâmetros (path):**
- id: string

**Resposta:**
- Status: `200 OK`

## `DELETE /tasks/:id`
**Parâmetros (path):**
- id: string

**Resposta:**
- Status: `201 NO CONTENT`
   
