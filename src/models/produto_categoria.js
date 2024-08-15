const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Produtos = require('./produtos');
const Categorias = require('./categorias');

const ProdutoCategoria = sequelize.define('ProdutoCategoria', {
  Product_Id: {
    type: DataTypes.INTEGER,
    references: {
      model: Produtos,
      key: 'id'
    },
    primaryKey: true
  },
  Category_Id: {
    type: DataTypes.INTEGER,
    references: {
      model: Categorias,
      key: 'id'
    },
    primaryKey: true
  },
}, {
  timestamps: true
});



module.exports = ProdutoCategoria;
