import { createRouter, createWebHashHistory } from 'vue-router'
import RegisterViewVue from '@/views/RegisterView.vue'
import SignInViewVue from '@/views/SignInView.vue'
import HomeView from '@/views/HomeView.vue'
import * as localStorage from '../session'

interface ImportMeta {
  readonly env: {
    BASE_URL: string
  }
}

const { env } = import.meta as unknown as ImportMeta

const router = createRouter({
  history: createWebHashHistory('/todo-vue/'),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegisterViewVue
    },
    {
      path: '/login',
      name: 'login',
      component: SignInViewVue
    }
  ]
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.get('auth_token')

    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
