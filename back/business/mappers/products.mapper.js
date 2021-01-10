module.exports = {
  MapToDto: function ({
    _id: id,
    name,
    tags,
    available,
    description,
    expires,
    quantity,
    type,
  }) {
    return {
      id,
      name,
      tags,
      available,
      description,
      expires,
      quantity,
      type,
    };
  },
  MapToDao: function ({
    name,
    tags,
    available,
    description,
    expires,
    quantity,
    type,
  }) {
    return {
      name,
      tags,
      available,
      description,
      expires,
      quantity,
      type,
    };
  },
  MapToDtoList: function ({ _id: id, name, quantity }) {
    return { id, name, quantity };
  },
};
