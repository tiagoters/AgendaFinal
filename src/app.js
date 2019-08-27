'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router  = express.Router();

//Carrega as rotas
const indexRoutes = require('./routes/index-routes');
const produtosRoutes = require('./routes/products-routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
})); 

app.use('/', indexRoutes);
app.use('/produtos', produtosRoutes); 

module.exports = app;



