const { MapToDao, MapToDto } = require('./mappers/products.mapper');

class ProductsBusiness {
  constructor({ ProductsRepository }) {
    this.repo = ProductsRepository;
  }

  async create(product) {
    return await this.repo.create(product);
  }

  async getAll() {
    return await this.repo.getAll();
  }

  async getOne(id) {
    return await this.repo.getOne(id);
  }

  async delete(id) {
    return await this.repo.delete(id);
  }

  async update(id, product) {
    return await this.repo.update(id, product);
  }
}

module.exports = ProductsBusiness;
