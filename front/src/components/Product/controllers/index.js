import Axios from 'axios';

const productMapper = function ({
  name,
  description,
  expires,
  quantity,
  tags,
  type,
  available,
}) {
  return { name, description, expires, quantity, tags, type, available };
};

export default {
  create: function (token, product) {
    product = productMapper(product);
    return Axios.post('products', product, {
      headers: { authorization: token },
    }).then((res) => res.data.payload);
  },

  getAll: function (token) {
    return Axios.get('products', { headers: { authorization: token } }).then(
      (res) => res.data.payload
    );
  },

  getOne: function (id, token) {
    return Axios.get(`products/${id}`, {
      headers: { authorization: token },
    }).then((res) => res.data.payload);
  },

  update: function (id, token, product) {
    product = productMapper(product);
    return Axios.patch(`products/${id}`, product, {
      headers: { authorization: token },
    }).then((res) => res.data.payload);
  },

  delete: function (id, token) {
    return Axios.delete(`products/${id}`, {
      headers: { authorization: token },
    }).then((res) => res.data.payload);
  },
};
