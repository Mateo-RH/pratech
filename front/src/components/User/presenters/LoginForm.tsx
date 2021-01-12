import React from 'react';
import './styles.css';

interface Props {
  login: () => void;
  user: any;
  setUser: (arg0: any) => void;
  switchForms: () => void;
}

export const LoginForm: React.FC<Props> = ({
  login,
  user,
  setUser,
  switchForms,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login();
  };

  const handleChange = (event: any) => {
    const newUser = {
      ...user,
      [event.target.name]: event.target.value,
    };
    setUser(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="box">
        <h1>Login</h1>
        <input
          type="text"
          value={user.email}
          name="email"
          onChange={handleChange}
          className="email"
          placeholder="Email"
        />
        <input
          type="password"
          value={user.password}
          className="email"
          onChange={handleChange}
          name="password"
          placeholder="Password"
        />
        <input type="submit" value="Sign In" className="btn" />
        <a href="#">
          <div id="btn2" onClick={switchForms}>
            Sign Up
          </div>
        </a>
      </div>
    </form>
  );
};
