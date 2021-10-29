import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: () => import('../views/Project.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
