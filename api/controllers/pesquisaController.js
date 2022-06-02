'use strict'
const pgp = require('pg-promise')();
//const db = pgp("postgres://postgres:123456@localhost:5432/pesquisa"); // base de dados localhost
const db = pgp("postgres://satisf_desev:pesquisa01@@satisf_desev.postgresql.dbaas.com.br:5432/satisf_desev"); // base de dados desenvolvimento



// POST
exports.adiciona_uma_pesquisa = function(req, res) {
    console.log("Adicionando uma pesquisa")
    let query = "insert into pesquisa (experienciaCompra, comentario, recomendacao, notaFiscal) values ($1, $2, $3, $4)";
    db.none(query, [req.body.experienciaCompra, req.body.comentario, req.body.recomendacao, req.body.notaFiscal]);
    res.json({"Mensagem": "pesquisa adicionado com sucesso"})
}

// GET ALL
exports.lista_todas_as_pesquisas = function(req, res) {
    db.any('SELECT * FROM pesquisa')
    .then(data => {
        console.log(data)
        res.json(data)
    });
}

// GET ID
exports.lista_uma_pesquisa = function(req, res) {
    db.one('SELECT * FROM pesquisa where id = $1', [req.params.pesquisaId])
    .then(data => {
        console.log(data)
        res.json(data)
    });
}

// PUT
exports.atualiza_uma_pesquisa = function(req, res) {
    res.json(req.params)
}

// DELETE
exports.remove_uma_pesquisa = function(req, res) {
    res.json({"Mensagem": "pesquisa deletado com sucesso"})
}