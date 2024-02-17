import axios from "axios";
export const instance = axios.create({
    baseURL: 'https://6526a8d8917d673fd76cbc13.mockapi.io/',
    timeout: 3000,
    headers: {}
  });