'use strict'
module.exports = function(app) {
    var pesquisaController = require('../controllers/pesquisaController')

    app.route('/pesquisa')
        .get(pesquisaController.lista_todas_as_pesquisas)
        .post(pesquisaController.adiciona_uma_pesquisa)
    
    app.route('/pesquisa/:pesquisaId')
        .get(pesquisaController.lista_uma_pesquisa)
        .put(pesquisaController.atualiza_uma_pesquisa)
        .delete(pesquisaController.remove_uma_pesquisa)

}