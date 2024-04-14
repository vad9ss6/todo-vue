import { createRouter, createWebHistory } from 'vue-router'
import RegisterViewVue from '@/views/RegisterView.vue'
import SignInViewVue from '@/views/SignInView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterViewVue
    },
    {
      path: '/auth',
      name: 'auth',
      component: SignInViewVue
    }
  ]
})

// router.beforeEach((to, _, next) => {
//   if (to.meta.requiresAuth) {
//     const token = localStorage.getItem('token')
//     if (token) {
//       // User is authenticated, proceed to the route
//       next()
//     } else {
//       // User is not authenticated, redirect to login
//       next('/login')
//     }
//   } else {
//     // Non-protected route, allow access
//     next()
//   }
// })

export default router
