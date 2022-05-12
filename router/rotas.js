const express = require('express');
const router = express.Router();
const PessoaController = require('../src/controller/PessoaController');

module.exports = app => {
    app.get('/index',PessoaController.index);
    app.get('indexById',PessoaController.indexById);
    app.post('/create',PessoaController.createAvaliacao);
    app.put('/update',PessoaController.updateAvaliacao);
    app.delete('/delete',PessoaController.deleteAvaliacao);
};