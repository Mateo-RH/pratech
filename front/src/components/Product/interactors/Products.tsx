import React, { useEffect, useState } from 'react';
import { FullProduct } from './FullProduct';
import { ProductsTable } from '../presenters/ProductsTable';
import ProductMethods from '../controllers';

interface Product {
  id: string;
  name: string;
  quantity: number;
}

interface Props {
  token: string;
}

export const Products: React.FC<Props> = ({ token }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productId, setProductId] = useState<string>();

  useEffect(() => {
    ProductMethods.getAll(token)
      .then((products) => {
        setProducts(products);
      })
      .catch((e) => {
        //   TODO: ERROR MESSAGES
        console.log(e);
      });
  }, []);

  return (
    <React.Fragment>
      {productId ? (
        <FullProduct id={productId} token={token} />
      ) : (
        <ProductsTable products={products} setProductId={setProductId} />
      )}
    </React.Fragment>
  );
};
