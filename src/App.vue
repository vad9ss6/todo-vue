<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { inject } from 'vue'

const { isLoggedIn, logout }: any = inject('session')
</script>

<template>
  <header>
    <div class="wrapper">
      <nav v-if="isLoggedIn">
        <button @click="logout">Logout</button>
      </nav>
      <nav v-else>
        <RouterLink to="/registration">SignUp</RouterLink>
        <RouterLink to="/login">SignIn</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
