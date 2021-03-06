class UserController {
  constructor({ UserBusiness }) {
    this.business = UserBusiness;
  }

  async create(req, res) {
    try {
      const { body } = req;
      const user = await this.business.create(body);
      return res.status(201).send({
        payload: user,
      });
    } catch (e) {
      return res
        .status(500)
        .send({ message: e.message || 'Internal server error' });
    }
  }

  async login(req, res) {
    try {
      const { body } = req;
      const token = await this.business.login(body);
      return !token
        ? res.status(401).send({ message: 'Invalid email and/or password' })
        : res.send({
            payload: token,
          });
    } catch (e) {
      return res
        .status(500)
        .send({ message: e.message || 'Internal server error' });
    }
  }

  async validate(req, res) {
    return res.status(204).send();
  }
}

module.exports = UserController;
