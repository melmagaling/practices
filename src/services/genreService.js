import http from './httpService';

const apiEndpoint = '/genres'

export async function getGenres() {
  return http.get(apiEndpoint);
} 