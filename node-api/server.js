const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir')
//INICIANDO APP
const app = express();
app.use(express.json()); //enviar dados em forma de .json
app.use(cors()); //outros sites acessem as aplicações(aplicação web)

//iniciando DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser: true});

//REQUISITANDO MODELS

requireDir('./src/models');



//ROTAS
app.use('/api', require('./src/routes'));

app.listen(3001);