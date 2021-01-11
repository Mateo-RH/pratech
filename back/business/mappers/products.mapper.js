module.exports = {
  MapToDto: function ({
    _id: id,
    name,
    tag,
    available,
    description,
    expires,
    quantity,
    productType,
  }) {
    return {
      id,
      name,
      tag,
      available,
      description,
      expires,
      quantity,
      productType,
    };
  },
  MapToDao: function ({
    name,
    tag,
    available,
    description,
    expires,
    quantity,
    productType,
  }) {
    return {
      name,
      tag,
      available,
      description,
      expires,
      quantity,
      productType,
    };
  },
  MapToUpdateDao: function ({
    name,
    tag,
    available,
    description,
    expires,
    quantity,
    productType,
  }) {
    return {
      ...(name && { name }),
      ...(tag && { tag }),
      ...(available != undefined && { available }),
      ...(description && { description }),
      ...(expires && { expires }),
      ...(quantity && { quantity }),
      ...(productType && { productType }),
    };
  },
  MapToDtoList: function ({ _id: id, name, quantity }) {
    return { id, name, quantity };
  },
};
