import React, { useState, useEffect } from 'react';
import ProductMethods from '../controllers';
import { ProductForm } from '../presenters/ProductForm';

interface Props {
  id: string;
  token: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  expires: string;
  quantity: number;
  tag: string;
  productType: string;
  available: Boolean;
}

export const FullProduct: React.FC<Props> = ({ id, token }) => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    ProductMethods.getOne(id, token)
      .then((product) => {
        setProduct(product);
        console.log(product);
      })
      .catch((e) => {
        // TODO: error
        console.log(e);
      });
  }, []);

  const updateProduct = () => {
    ProductMethods.update(id, token, product).then((res) => {
      console.log(res);
    });
  };

  return (
    <React.Fragment>
      {product && (
        <ProductForm
          product={product}
          setProduct={setProduct}
          updateProduct={updateProduct}
        />
      )}
    </React.Fragment>
  );
};
