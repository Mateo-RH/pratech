import React from 'react';
import { BiSearch } from 'react-icons/bi';

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
    <div className="navBar">
      {renderedComponent === 'table' && (
        <div className="searchBox">
          <input
            type="text"
            value={productId}
            placeholder="Product id"
            onChange={(event) => setProductId(event.target.value)}
          />
          <BiSearch onClick={search} className="searchBtn" />
        </div>
      )}
      <div></div>
      <button onClick={logout} className="logoutBtn">
        Logout
      </button>
    </div>
  );
};
