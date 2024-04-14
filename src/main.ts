import { createApp } from 'vue'
import router from './router'

import App from './App.vue'
import { useSession } from './session'

import './assets/main.css'

const session = useSession(router)

const app = createApp(App).provide('session', { ...session })

app.use(router)
app.mount('#app')
