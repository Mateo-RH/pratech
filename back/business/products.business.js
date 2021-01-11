const {
  MapToDao,
  MapToDto,
  MapToDtoList,
  MapToUpdateDao,
} = require('./mappers/products.mapper');

class ProductsBusiness {
  constructor({ ProductsRepository }) {
    this.repo = ProductsRepository;
  }

  async create(product) {
    product = MapToDao(product);
    product.available = true;
    const createdProduct = await this.repo.create(product);
    return MapToDto(createdProduct);
  }

  async getAll(id) {
    try {
      const products = id
        ? [await this.repo.getOne(id)]
        : await this.repo.getAll();
      return products.map(MapToDtoList);
    } catch {
      return [];
    }
  }

  async getOne(id) {
    const product = await this.repo.getOne(id);
    return product && MapToDto(product);
  }

  async delete(id) {
    return await this.repo.delete(id);
  }

  async update(id, product) {
    product = MapToUpdateDao(product);
    return await this.repo.update(id, product);
  }
}

module.exports = ProductsBusiness;
