import axios from 'axios'
import * as storage from '../session'

const baseURL = process.env.PUBLIC_URL

const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Ngrok-Skip-Browser-Warning': '1111'
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
