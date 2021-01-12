import React, { useState, useEffect } from 'react';
import { Products } from './Product/interactors/Products';
import { User } from './User/interactors/User';
import Axios from 'axios';

export const Session: React.FC = () => {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    token &&
      Axios.get('users/validate', {
        headers: { authorization: token },
      })
        .then(() => setToken(token))
        .catch(() => localStorage.removeItem('token'));
  }, []);

  return (
    <React.Fragment>
      {token ? (
        <Products token={token} setToken={setToken} />
      ) : (
        <User setToken={setToken} />
      )}
    </React.Fragment>
  );
};
