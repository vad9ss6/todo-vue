import { ref } from 'vue'
import * as localStorage from './'
import { type Router } from 'vue-router'

const AUTH_TOKEN_KEY = 'auth_token'

const defaultAccessToken = localStorage.get(AUTH_TOKEN_KEY) || null

export function useSession(router: Router) {
  const authToken = ref(defaultAccessToken)
  const isLoggedIn = ref(defaultAccessToken !== null)

  const login = (token: string) => {
    localStorage.set({ [AUTH_TOKEN_KEY]: token })

    isLoggedIn.value = true
    authToken.value = token
  }

  const logout = () => {
    localStorage.clear()
    router.push('/login')
    isLoggedIn.value = false
    authToken.value = null
  }

  return {
    isLoggedIn,
    login,
    logout
  }
}
