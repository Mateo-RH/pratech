import React from 'react';
import './styles.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi';

interface Props {
  products: Product[];
  setSelectedProduct: (arg0: string) => void;
  setRenderedComponent: (arg0: any) => void;
  deleteProduct: (arg0: string) => void;
}

interface Product {
  id: string;
  name: string;
  quantity: number;
}

export const ProductsTable: React.FC<Props> = ({
  products,
  setSelectedProduct,
  setRenderedComponent,
  deleteProduct,
}) => {
  const switchComponent = (productId = '') => {
    setSelectedProduct(productId);
    setRenderedComponent('single');
  };

  const renderRow = (product: Product) => {
    return (
      <tr key={product.id}>
        {Object.entries(product).map((x, i) => (
          <td key={i}>{x[1]}</td>
        ))}
        <FiEdit3
          className="tableBtn"
          onClick={() => switchComponent(product.id)}
        />
        <AiOutlineDelete
          className="tableBtn"
          onClick={() => deleteProduct(product.id)}
          style={{ marginLeft: '10px', color: '#ff495f' }}
        />
      </tr>
    );
  };

  const renderTable = () => {
    return (
      <table>
        <thead>
          <tr>
            {Object.keys(products[0]).map((attribute, i) => (
              <th key={i}>{attribute}</th>
            ))}
          </tr>
        </thead>
        <tbody>{products.map(renderRow)}</tbody>
      </table>
    );
  };

  return (
    <div className="table">
      <h1>Products Table</h1>
      {products.length > 0 ? (
        renderTable()
      ) : (
        <p style={{ color: 'black' }}>No products</p>
      )}
      <button onClick={() => switchComponent()}>New Product</button>
    </div>
  );
};
