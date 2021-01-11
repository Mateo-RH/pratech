import React, { useEffect, useState } from 'react';
import { FullProduct } from './FullProduct';
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

  const mapToRow = (product: Product) => {
    return (
      <tr key={product.id} onClick={() => setProductId(product.id)}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.quantity}</td>
      </tr>
    );
  };

  const renderTable = () => {
    return (
      <table>
        <thead>
          <tr>
            {Object.keys(products[0]).map((attribute) => (
              <th>{attribute}</th>
            ))}
          </tr>
        </thead>
        <tbody>{products.map(mapToRow)}</tbody>
      </table>
    );
  };

  return (
    <div>
      {productId ? (
        <FullProduct id={productId} token={token} />
      ) : (
        <React.Fragment>
          <h1>Products Table</h1>
          {products.length > 0 ? renderTable() : <p>No products</p>}
        </React.Fragment>
      )}
    </div>
  );
};
