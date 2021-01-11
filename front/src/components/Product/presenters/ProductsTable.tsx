import React from 'react';

interface Props {
  products: Product[];
  setSelectedProduct: (arg0: string) => void;
}

interface Product {
  id: string;
  name: string;
  quantity: number;
}

export const ProductsTable: React.FC<Props> = ({
  products,
  setSelectedProduct,
}) => {
  const renderRow = (product: Product) => {
    return (
      <tr key={product.id}>
        {Object.entries(product).map((x, i) => (
          <td key={i}>{x[1]}</td>
        ))}
        <button onClick={() => setSelectedProduct(product.id)}>Select</button>
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
    <React.Fragment>
      <h1>Products Table</h1>
      {products.length > 0 ? renderTable() : <p>No products</p>}
    </React.Fragment>
  );
};
