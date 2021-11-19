import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/capsules',
    name: 'Capsules',
    component: () => import( '../views/Capsules.vue')
  },
  {
    path: '/capsule/:capid',
    name: 'Capsule',
    component: () => import('../views/Capsule.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
