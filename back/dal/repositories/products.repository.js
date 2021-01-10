const ProductsSchema = require('../schemas/products.schema');

module.exports = {
  create: function (product) {
    const newProduct = new ProductsSchema(product);
    return newProduct.save();
  },

  getAll: function () {
    return ProductsSchema.find();
  },

  getOne: function (id) {
    return ProductsSchema.findById(id);
  },

  delete: function (id) {
    return ProductsSchema.findByIdAndDelete(id);
  },

  update: function (id, product) {
    return ProductsSchema.findByIdAndUpdate(id, product);
  },
};
