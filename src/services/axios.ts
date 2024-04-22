import axios from 'axios'
import * as storage from '../session'
// import { CONFIG } from '../../config';

const client = axios.create({
  baseURL: 'https://0a00-64-226-91-13.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json'
  }
})

client.interceptors.request.use(
  (config) => {
    const token = storage.get('auth_token')
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
