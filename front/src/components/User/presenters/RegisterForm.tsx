import React from 'react';

interface Props {
  register: () => void;
  user: any;
  setUser: (arg0: any) => void;
}

export const RegisterForm: React.FC<Props> = ({ user, setUser, register }) => {
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
      <h1>Registration</h1>
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
      <label>Name</label>
      <input
        type="text"
        value={user.name}
        name="name"
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
