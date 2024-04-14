import { ref } from 'vue'
import * as localStorage from './'

const AUTH_TOKEN_KEY = 'auth_token'

const defaultAccessToken = localStorage.get(AUTH_TOKEN_KEY) || null

export function useAuth() {
  const authToken = ref(localStorage.get(AUTH_TOKEN_KEY) || null)

  const login = (token: string) => {
    localStorage.set({ [AUTH_TOKEN_KEY]: token })

    authToken.value = token
  }

  const logout = () => {
    localStorage.clear()

    authToken.value = null
  }

  const isLoggedIn = () => {
    return authToken.value !== null
  }
  // console.log('login(', login(AUTH_TOKEN_KEY))

  return {
    // userData,
    authToken,
    login,
    logout,
    isLoggedIn
  }
}
