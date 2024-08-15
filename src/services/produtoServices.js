const { Produtos } = require('../models/produto_categoria')
const { Categorias } = require('../models/produto_categoria')
const Imagens = require('../models/imagem')
const { Transaction } = require('sequelize')

const list = async () => {
    const list = await Produtos.findAll()
    return list
}

const listId = async (req) => {
    const list = await Produtos.findByPk(req)
    return list
}


const create = async (productData) => {
    const produto = await Produtos.create(productData);
    console.log(produto)
    await produto.addCategorias(productData.category_ids)

    const imagens = productData.images
    const imagenADD = imagens.map(url =>({
        product_id: produto.id,
        path: url.content,
        enable: true
    }))

    Imagens.bulkCreate(imagenADD, {Transaction})
}

const deletar = async (req) => {
    await Produtos.destroy({ where: { id: req } })
}

const update = async (id, data) => {
    await Produtos.update(data, { where: { id: id } })
}

module.exports = {
    list,
    listId,
    create,
    deletar,
    update
}