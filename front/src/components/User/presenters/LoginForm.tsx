import React from 'react';

interface Props {
  login: () => void;
  user: any;
  setUser: (arg0: any) => void;
}

export const LoginForm: React.FC<Props> = ({ login, user, setUser }) => {
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
      <h1>Login</h1>
      <label>Email</label>
      <input
        type="text"
        value={user.email}
        name="email"
        onChange={handleChange}
      />
      <label>Password</label>
      <input
        type="password"
        value={user.password}
        name="password"
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
