const mongoose = require("mongoose");


const Product = mongoose.model("Product");

module.exports = {

  //Lista todos os Produtos
  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });

    return res.json(products);
  },

  //Procura apenas 1 Produto pelo ID
  async show(req, res) {
    const products = await Product.findById(req.params.id);

    return res.json(products);
  },


  //Cria um novo Produto
  async store(req, res) {
    const products = await Product.create(req.body);

    return res.json(products);
  },

  //Atualiza apenas 1 Produto
  async update(req, res) {
    const products = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(products);
  },

  //Deleta 1 Produto
  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    return res.send();
  }
}