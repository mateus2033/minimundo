const { response } = require('express');
var pessoaModel = require('../model/PessoaModel');


exports.index = function(req, res) 
{  
	res.send("PessoaController Index")
};

exports.indexById = function(req, res) 
{  
	res.send("PessoaController indexById")
};

exports.createAvaliacao = function(req, res) 
{   
	res.send("PessoaController createAvaliacao")
};

exports.updateAvaliacao = function(req, res) 
{
	res.send("PessoaController updateAvaliacao")
};

exports.deleteAvaliacao = function(req, res) 
{
	res.send("PessoaController deleteAvaliacao")
};
