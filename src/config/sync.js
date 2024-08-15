const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const Usuarios = require('../models/usuarios');
// const index = require('../models/index.js')
// const {Produtos} = require('../models/index.js');
// const {Categorias} = require('../models/index.js');
const Produtos = require('../models/produtos.js')
const Categorias = require('../models/categorias.js')
const ProdutoCategoria = require('../models/produto_categoria');
const imagens = require('../models/imagem');
const opcoes = require('../models/opcoes');

(async () => {
    try {
        await Usuarios.sync(); 
        await Produtos.sync();
        await Categorias.sync(); 
        await ProdutoCategoria.sync();
        await imagens.sync();
        await opcoes.sync();
        console.log('Tabelas sincronizadas com sucesso.');
    } catch (error) {
        console.error('Erro ao sincronizar as tabelas:', error);
    }
})();

module.exports