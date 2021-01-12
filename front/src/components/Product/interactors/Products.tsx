import React, { useEffect, useState } from 'react';
import { FullProduct } from './FullProduct';
import { ProductsTable } from '../presenters/ProductsTable';
import { NavBar } from '../presenters/NavBar';
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

type RenderedComponent = 'table' | 'single';

export const Products: React.FC<Props> = ({ token, setToken }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productId, setProductId] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [updateTable, setUpdateTable] = useState<any>({});
  const [renderedComponent, setRenderedComponent] = useState<RenderedComponent>(
    'table'
  );

  useEffect(() => {
    ProductMethods.getAll(token)
      .then((products) => {
        setProducts(products);
      })
      .catch((e) => {
        //   TODO: ERROR MESSAGES
        console.log(e);
      });
  }, [updateTable]);

  const deleteProduct = (productId: string) => {
    ProductMethods.delete(productId, token)
      .then(() => setUpdateTable({}))
      .catch((e) => {
        console.log(e);
      });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  const search = () => {
    ProductMethods.getAll(token, productId)
      .then((products) => {
        setProducts(products);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <React.Fragment>
      <NavBar
        productId={productId}
        logout={logout}
        search={search}
        setProductId={setProductId}
        renderedComponent={renderedComponent}
      />
      {renderedComponent === 'table' ? (
        <ProductsTable
          products={products}
          setSelectedProduct={setSelectedProduct}
          setRenderedComponent={setRenderedComponent}
          deleteProduct={deleteProduct}
        />
      ) : (
        <FullProduct
          id={selectedProduct}
          token={token}
          setRenderedComponent={setRenderedComponent}
          setUpdateTable={setUpdateTable}
        />
      )}
    </React.Fragment>
  );
};
