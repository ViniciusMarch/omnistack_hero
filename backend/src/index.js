const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // Sem o ponto, ele vai pensar que o routes é um pacote

const app = express();

app.use(cors());
// O express converte o corpo da req de JSON para javascript, precisa vir antes das rotas
app.use(express.json());

app.use(routes);

app.listen(3333);
/**
 * Rota /  Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar qualquer informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end * 
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o "?", são utilizados para paginação, filtros... ex: ?page=2&name=Vinicius
 * Route Params: Parâmetro utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos. É o que fica no form, do html. Sempre será em formato JSON, ao chegar no servidor
 * 
 */

 /**
  * Configurando o Banco de Dados:
  * 
  * 3 formas de comunicar com o BD
  * Instalar o driver do BD: SELECT * FROM users
  * Query Builder, utilizando JS: table('users').select('*').where()  KNEX.JS (query builder a ser utilizado)
  */

