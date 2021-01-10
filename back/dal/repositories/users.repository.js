const UsersSchema = require('../schemas/users.schema');

module.exports = {
  create: function (user) {
    const newUser = new UsersSchema(user);
    return newUser.save();
  },
  getByEmail: function ({ email }) {
    return UsersSchema.findOne({ email });
  },
};
