import axios from 'axios'
import * as storage from '../session'
// import { CONFIG } from '../../config';

const client = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json'
  }
})

client.interceptors.request.use(
  (config) => {
    const token = storage.get('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default client
