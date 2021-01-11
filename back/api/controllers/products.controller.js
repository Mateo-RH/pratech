class ProductsController {
  constructor({ ProductsBusiness }) {
    this.business = ProductsBusiness;
  }

  async create(req, res) {
    try {
      const { body } = req;
      const product = await this.business.create(body);
      return res.send({
        payload: product,
      });
    } catch (e) {
      return res
        .status(500)
        .send({ message: e.message || 'Internal server error' });
    }
  }
  async getAll(req, res) {
    try {
      const product = await this.business.getAll();
      return res.send({
        payload: product,
      });
    } catch (e) {
      return res
        .status(500)
        .send({ message: e.message || 'Internal server error' });
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const product = await this.business.getOne(id);
      return product
        ? res.send({
            payload: product,
          })
        : res.status(404).send();
    } catch (e) {
      return res
        .status(500)
        .send({ message: e.message || 'Internal server error' });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      await this.business.delete(id);
      return res.status(204).send();
    } catch (e) {
      return res
        .status(500)
        .send({ message: e.message || 'Internal server error' });
    }
  }
  async update(req, res) {
    try {
      const {
        body,
        params: { id },
      } = req;
      await this.business.update(id, body);
      return res.status(204).send();
    } catch (e) {
      return res
        .status(500)
        .send({ message: e.message || 'Internal server error' });
    }
  }
}

module.exports = ProductsController;
