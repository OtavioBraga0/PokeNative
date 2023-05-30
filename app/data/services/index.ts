import axios from 'axios';
import {envs} from '../../config/envs';

export const initializeAxios = (): void => {
  axios.defaults.baseURL = envs.API_BASE_URL;
  axios.defaults.headers['Content-Type'] = 'application/json';
  axios.defaults.headers.Accept = 'application/json';
};
