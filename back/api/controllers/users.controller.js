class UserController {
  constructor({ UserBusiness }) {
    this.business = UserBusiness;
  }

  async create(req, res) {
    const { body } = req;
    const user = await this.business.create(body);
    return res.status(201).send({
      payload: user,
    });
  }

  async login(req, res) {
    return res.status(201).send('Login');
  }
}

module.exports = UserController;
