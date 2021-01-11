import React, { useEffect, useState } from 'react';
import { FullProduct } from './FullProduct';
import { CreateProduct } from './CreateProduct';
import { ProductsTable } from '../presenters/ProductsTable';
import ProductMethods from '../controllers';

interface Product {
  id: string;
  name: string;
  quantity: number;
}

interface Props {
  token: string;
  setToken: (arg0: string) => void;
}

export const Products: React.FC<Props> = ({ token, setToken }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productId, setProductId] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [showCreateProduct, setShowCreateProduct] = useState<boolean>(false);

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

  const logout = () => {
    setToken('');
  };

  const search = () => {
    ProductMethods.getAll(token, productId)
      .then((products) => {
        setProducts(products);
      })
      .catch((e) => {
        //   TODO: ERROR MESSAGES
        console.log(e);
      });
  };

  return (
    <React.Fragment>
      <button onClick={logout}>Logout</button>
      <label>Product id</label>
      <input
        type="text"
        value={productId}
        onChange={(event) => setProductId(event.target.value)}
      />
      <button onClick={search}>Search</button>
      {showCreateProduct ? (
        <CreateProduct token={token} />
      ) : selectedProduct ? (
        <FullProduct id={selectedProduct} token={token} />
      ) : (
        <ProductsTable
          products={products}
          setSelectedProduct={setSelectedProduct}
        />
      )}
      <button onClick={() => setShowCreateProduct(true)}>New Product</button>
    </React.Fragment>
  );
};
