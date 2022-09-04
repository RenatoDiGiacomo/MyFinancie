import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
  withCredentials: true
});

export default api;

