<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <UserForm
      :placeholderUsername="'Enter your username'"
      :placeholderPassword="'Enter your password'"
      :buttonText="'Sign In'"
      @submit="handleLogin"
    />
  </div>
</template>

<script lang="ts">
import { inject, defineComponent, ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'

import UserForm from '@/components/UserForm.vue'
import ApiService from '@/services'

export default defineComponent({
  components: {
    UserForm
  },
  setup() {
    const router = useRouter()

    const isLoading: Ref<boolean> = ref(false)
    const error: Ref<string | null> = ref(null)

    const handleLogin = async (username: string, password: string) => {
      if (username && password) {
        try {
          isLoading.value = true
          const { data } = await ApiService.auth({
            user_name: username,
            password: password
          })
          if ('login' in session) {
            session.login(data.access_token)
          }
          router.push('/home')
        } catch (error: any) {
          console.error('Error:', error)
          error.value = error.message || 'An error occurred'
        } finally {
          isLoading.value = false
        }
      }
    }

    const session: any = inject('session')

    return {
      isLoading,
      error,
      handleLogin
    }
  }
})
</script>
