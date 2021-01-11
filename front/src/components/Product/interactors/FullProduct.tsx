import React, { useState, useEffect } from 'react';
import ProductMethods from '../controllers';

interface Props {
  id: string;
  token: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  expiration: Date;
  quantity: number;
  tags: string[];
  type: 'meat' | 'fruit' | 'vegetal';
  avaible: Boolean;
}

export const FullProduct: React.FC<Props> = ({ id, token }) => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    ProductMethods.getOne(id, token)
      .then((product) => setProduct(product))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <h1>FullProduct: {id}</h1>
    </div>
  );
};
