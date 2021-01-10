const { MapToDao, MapToDto } = require('./mappers/user.mappers');

class UserBusiness {
  constructor({ UserRepositorty }) {
    this.repo = UserRepositorty;
  }

  generateToken(User) {
    const jwt = require('jsonwebtoken');
    return jwt.sign({ User }, 'JWTSeed', { expiresIn: '2h' });
  }

  async create(user) {
    user = MapToDao(user);
    const newUser = await this.repo.create(user);
    return MapToDto(newUser);
  }

  async login(user) {
    const bcrypt = require('bcryptjs');
    const { password } = user;
    user = MapToDao(user);
    const dbUser = await this.repo.getByEmail(user);
    return (
      dbUser &&
      password &&
      bcrypt.compareSync(password, dbUser.password) &&
      this.generateToken(dbUser)
    );
  }
}

module.exports = UserBusiness;
