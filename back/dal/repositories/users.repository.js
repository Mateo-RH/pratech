const UsersSchema = require('../schemas/users.schema');

module.exports = {
  create: async function (user) {
    const newUser = new UsersSchema(user);
    return await newUser.save();
  },
  getByEmail: async function ({ email }) {
    return await UsersSchema.findOne({ email });
  },
};
