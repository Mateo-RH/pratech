import Axios from 'axios';

const userMethods = {
  login: function (email, password) {
    return Axios.post('users/login', { email, password }).then(
      (res) => res.data.payload
    );
  },
  register: function (email, password, name) {
    return Axios.post('users', { email, password, name }).then(
      (res) => res.data.payload
    );
  },
};

export default userMethods;
