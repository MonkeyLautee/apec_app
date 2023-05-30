import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Translator from './views/Translator.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/translator',
    name: 'Translator',
    component: Translator
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router