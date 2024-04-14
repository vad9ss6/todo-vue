import { createRouter, createWebHistory } from 'vue-router'
import RegisterViewVue from '@/views/RegisterView.vue'
import SignInViewVue from '@/views/SignInView.vue'
import HomeView from '@/views/HomeView.vue'
import * as localStorage from '../session'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
