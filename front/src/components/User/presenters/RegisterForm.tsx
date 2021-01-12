import React from 'react';
import './styles.css';

interface Props {
  register: () => void;
  user: any;
  setUser: (arg0: any) => void;
  switchForms: () => void;
}

export const RegisterForm: React.FC<Props> = ({
  user,
  setUser,
  register,
  switchForms,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    register();
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
        <h1>Registration</h1>
        <input
          type="text"
          value={user.email}
          name="email"
          placeholder="Email"
          className="email"
          onChange={handleChange}
        />
        <input
          type="password"
          value={user.password}
          name="password"
          placeholder="Password"
          className="email"
          onChange={handleChange}
        />
        <input
          type="text"
          value={user.name}
          name="name"
          placeholder="Name"
          className="email"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" className="btn" />
        <a href="#">
          <div id="btn2" onClick={switchForms}>
            Login
          </div>
        </a>
      </div>
    </form>
  );
};
