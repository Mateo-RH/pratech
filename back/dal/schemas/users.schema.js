const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('User', userSchema);
