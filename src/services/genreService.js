import { apiUrl } from '../config.json';
import http from './httpService';

const apiEndpoint = apiUrl + '/genres'

export async function getGenres() {
  return http.get(apiEndpoint);
} 