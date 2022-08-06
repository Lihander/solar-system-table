import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.le-systeme-solaire.net/rest'
})
