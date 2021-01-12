import React from 'react';

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
        <td onClick={() => switchComponent(product.id)}>edit</td>
        <td onClick={() => deleteProduct(product.id)}>delete</td>
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
      <button onClick={() => switchComponent()}>Create Product</button>
    </React.Fragment>
  );
};
