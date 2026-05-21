import axios from 'axios';

// Instância do Axios utilizando a API externa pública JSONPlaceholder
export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});