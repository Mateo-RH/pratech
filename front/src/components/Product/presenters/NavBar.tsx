import React from 'react';

interface Props {
  logout: () => void;
  search: () => void;
  setProductId: (arg0: string) => void;
  productId: string;
  renderedComponent: string;
}

export const NavBar: React.FC<Props> = ({
  logout,
  productId,
  search,
  setProductId,
  renderedComponent,
}) => {
  return (
    <React.Fragment>
      <button onClick={logout}>Logout</button>
      {renderedComponent === 'table' && (
        <React.Fragment>
          <label>Product id</label>
          <input
            type="text"
            value={productId}
            onChange={(event) => setProductId(event.target.value)}
          />
          <button onClick={search}>Search</button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
