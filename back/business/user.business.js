const { MapToDomain } = require('./mappers/user.mappers');

class UserBusiness {
  constructor({ UserRepositorty }) {
    this.repo = UserRepositorty;
  }

  async create(user) {
    user = MapToDomain(user);
    return await this.repo.create(user);
  }
}

module.exports = UserBusiness;
