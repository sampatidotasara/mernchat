import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const register = (username, email, password) => {
  return axios.post(`${API_URL}/api/auth/register`, {
    username,
    email,
    password
  });
};

const login = (email, password) => {
  return axios.post(`${API_URL}/api/auth/login`, {
    email,
    password
  });
};

export default {
  register,
  login
};
