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
      .then((res) => {
        setUpdateTable({});
        console.log(res);
      })
      .catch((e) => {
        // TODO: error
        console.log(e);
      });
  };

  const createProduct = () => {
    ProductMethods.create(token, product)
      .then((res) => {
        setUpdateTable({});
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
          updateProduct={id ? updateProduct : createProduct}
        />
      )}
      <button onClick={() => setRenderedComponent('table')}>
        Back to table
      </button>
    </React.Fragment>
  );
};
