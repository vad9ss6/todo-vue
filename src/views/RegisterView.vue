<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <UserForm
      :placeholderUsername="'Enter your username'"
      :placeholderPassword="'Enter your password'"
      :buttonText="'Sign Up'"
      @submit="handleLogin"
    />
  </div>
</template>

<script lang="ts">
import UserForm from '@/components/UserForm.vue'
import ApiService from '@/services'

export default {
  components: {
    UserForm
  },
  data() {
    return {
      isLoading: false,
      error: null
    }
  },
  methods: {
    async handleLogin(username: string, password: string) {
      if (username && password) {
        try {
          this.isLoading = true
          await ApiService.createUser({
            user_name: username,
            password: password
          })
          this.isLoading = false
        } catch (error: any) {
          console.error('Error:', error)
          this.error = error.message || 'An error occurred'
        } finally {
          this.isLoading = false
        }
      }
    }
  }
}
</script>

<style scoped>
/* Add your parent component styles here */
</style>
