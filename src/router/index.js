import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/missions',
    name: 'Missions',
    component: () => import(/* webpackChunkName: "about" */ '../views/Missions.vue')
  },
  {
  
    // Route vers la création / modification d'un deck avec l'id qui est passable

    path: '/mission/:id',
    name: 'Mission',
    component: () => import('../views/Mission.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
