const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  productType: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('Product', productSchema);
