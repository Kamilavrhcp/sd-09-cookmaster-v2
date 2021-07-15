const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('../controllers/UserController');
const LoginController = require('../controllers/LoginController');
const RecipeController = require('../controllers/RecipeController');
const { tokenValidation } = require('./auth/validateJWT');

const app = express();

app.use(bodyParser.json());

// Requisito 01
app.post('/users', UserController.create);

// Requisito 02
app.post('/login', LoginController.login);

// Requisito 03
app.post('/recipes', tokenValidation, RecipeController.create);

// Requisito 04
app.get('/recipes', RecipeController.getAll);

// Requisito 05
app.get('/recipes/:id', RecipeController.getById);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
