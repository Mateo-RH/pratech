import React, { useState, useEffect } from 'react';
import ProductMethods from '../controllers';
import { ProductForm } from '../presenters/ProductForm';

interface Props {
  id?: string;
  token: string;
  setRenderedComponent: (arg0: any) => void;
  setUpdateTable: (arg0: any) => void;
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

export const FullProduct: React.FC<Props> = ({
  id,
  token,
  setRenderedComponent,
  setUpdateTable,
}) => {
  const [product, setProduct] = useState<Product>({
    id: '',
    name: '',
    description: '',
    expires: new Date().toISOString(),
    quantity: 0,
    tag: 'healthy',
    productType: 'meat',
    available: true,
  });
  const [message, setMessage] = useState<any>('');

  useEffect(() => {
    id &&
      ProductMethods.getOne(id, token)
        .then((product) => {
          setProduct(product);
        })
        .catch((e) => {
          // TODO: error
          console.log(e);
        });
  }, []);

  const updateProduct = () => {
    ProductMethods.update(id, token, product)
      .then(() => {
        setUpdateTable({});
        setMessage('Product updated');
        setTimeout(() => setMessage(''), 3000);
      })
      .catch((e) => {
        setMessage(e);
        setTimeout(() => setMessage(''), 3000);
      });
  };

  const createProduct = () => {
    ProductMethods.create(token, product)
      .then(() => {
        setUpdateTable({});
        setMessage('Product created');
        setTimeout(() => setMessage(''), 3000);
      })
      .catch((e) => {
        setMessage(e);
        setTimeout(() => setMessage(''), 3000);
      });
  };

  return (
    <React.Fragment>
      {message && <p>{message}</p>}
      {product && (
        <ProductForm
          product={product}
          setProduct={setProduct}
          updateProduct={id ? updateProduct : createProduct}
          setRenderedComponent={setRenderedComponent}
        />
      )}
    </React.Fragment>
  );
};
