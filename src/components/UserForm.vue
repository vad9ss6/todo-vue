<template>
  <form class="wrapper-form" @submit.prevent>
    <input class="input" v-model="username" aria-label="Email" required placeholder="Email" />

    <input
      class="input"
      v-model="password"
      aria-label="Password"
      type="password"
      required
      placeholder="Password"
    />

    <button class="btn" :disabled="!username || !password" @click="submit">
      {{ buttonText }}
    </button>
  </form>
</template>

<script lang="ts">
export default {
  props: {
    placeholderUsername: {
      type: String,
      default: 'Username'
    },
    placeholderPassword: {
      type: String,
      default: 'Password'
    },
    buttonText: {
      type: String,
      default: 'Login'
    }
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.username, this.password)
      this.username = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>
.wrapper-form {
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  width: 400px;
}

.btn {
  padding: 10px 20px;
}
</style>
