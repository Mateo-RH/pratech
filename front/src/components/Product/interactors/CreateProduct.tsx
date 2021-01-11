import React, { useState } from 'react';
import ProductMethods from '../controllers';
import { ProductForm } from '../presenters/ProductForm';

interface Props {
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

export const CreateProduct: React.FC<Props> = ({ token }) => {
  const [product, setProduct] = useState<Product>({
    id: '',
    name: '',
    description: '',
    expires: new Date().toISOString(),
    quantity: 0,
    tag: 'healthy',
    productType: '',
    available: true,
  });

  const createProduct = () => {
    ProductMethods.create(token, product)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        // TODO: error
        console.log(e);
      });
  };

  return (
    <React.Fragment>
      {product && (
        <ProductForm
          product={product}
          setProduct={setProduct}
          updateProduct={createProduct}
        />
      )}
    </React.Fragment>
  );
};
