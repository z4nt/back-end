const Produtos = require('./produtos.js')
const Categorias = require('./categorias.js')

Produtos.belongsToMany(Categorias, { through: 'ProdutoCategoria', foreignKey: 'Product_Id'});
Categorias.belongsToMany(Produtos, { through: 'ProdutoCategoria', foreignKey: 'Categoria_Id'});

module.exports = {
    Produtos,
    Categorias
}