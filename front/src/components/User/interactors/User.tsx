import React, { useState } from 'react';
import { LoginForm } from '../presenters/LoginForm';
import { RegisterForm } from '../presenters/RegisterForm';
import { Error } from '../presenters/Error';
import UserMethods from '../controllers';

interface Props {
  setToken: (arg0: string) => void;
}

interface User {
  name: string;
  email: string;
  password: string;
}

export const User: React.FC<Props> = ({ setToken }) => {
  const [user, setUser] = useState<User>({ name: '', email: '', password: '' });
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const login = () => {
    UserMethods.login(user.email, user.password)
      .then((token) => {
        localStorage.setItem('token', token);
        setToken(token);
      })
      .catch((error) => {
        setError(error.message);
        setTimeout(() => setError(''), 3000);
      });
  };

  const register = () => {
    UserMethods.register(user.email, user.password, user.name)
      .then(() => {
        setError('Registration succeeded');
        setTimeout(() => setError(''), 3000);
        switchForms();
      })
      .catch((error) => {
        setError(error.message);
        setTimeout(() => setError(''), 3000);
      });
  };

  const switchForms = () => {
    setUser({ name: '', email: '', password: '' });
    setShowRegister(!showRegister);
  };

  return (
    <React.Fragment>
      {error && <Error error={error} />}
      {showRegister ? (
        <RegisterForm
          user={user}
          setUser={setUser}
          register={register}
          switchForms={switchForms}
        />
      ) : (
        <LoginForm
          login={login}
          user={user}
          setUser={setUser}
          switchForms={switchForms}
        />
      )}
    </React.Fragment>
  );
};
