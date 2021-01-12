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
      .catch((error) => setError(error.message));
  };

  const register = () => {
    UserMethods.register(user.email, user.password, user.name)
      .then(() => {
        // TODO: show success
        setShowRegister(false);
      })
      .catch((error) => setError(error.message));
  };

  const switchForms = () => {
    setUser({ name: '', email: '', password: '' });
    setError('');
    setShowRegister(!showRegister);
  };

  return (
    <React.Fragment>
      {error && setTimeout(() => setError(''), 3000) && <Error error={error} />}
      {showRegister ? (
        <React.Fragment>
          <RegisterForm user={user} setUser={setUser} register={register} />
          <button onClick={switchForms}>Back to login</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <LoginForm login={login} user={user} setUser={setUser} />
          <button onClick={switchForms}>Create Account</button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
