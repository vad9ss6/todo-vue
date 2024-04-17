<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { inject } from 'vue'

const { isLoggedIn, logout }: any = inject('session')
</script>

<template>
  <header>
    <div v-if="isLoggedIn">
      <nav>
        <button class="btn-logout" @click="logout">Logout</button>
      </nav>
      <div>
        <RouterView />
      </div>
    </div>
    <div v-else>
      <nav>
        <RouterLink to="/registration">SignUp</RouterLink>
        <RouterLink to="/login">SignIn</RouterLink>
      </nav>
      <div class="unauthorized">
        <RouterView />
      </div>
    </div>
  </header>
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
.unauthorized {
  height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
