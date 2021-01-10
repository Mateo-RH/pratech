module.exports = {
  MapToDto: function ({ id, name, email }) {
    return { id, name, email };
  },
  MapToDao: function ({ name, email, password }) {
    const bcrypt = require('bcryptjs');
    return { name, email, password: password && bcrypt.hashSync(password, 10) };
  },
};
