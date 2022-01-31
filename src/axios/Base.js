import Axios from 'axios';

export const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://utility.rastaiha.ir'
    : 'https://utility.rastaiha.ir/people/'

const baseAxios = Axios.create({
  baseURL: baseURL,
  timeout: 20000,
  maxRedirects: 5,
});

export default baseAxios;
