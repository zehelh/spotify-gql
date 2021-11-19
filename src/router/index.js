import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dragons',
        name: 'Dragons',
        component: () =>
            import ('../views/Dragons.vue')
    },
    {
        path: '/rockets',
        name: 'Rockets',
        component: () =>
            import ('../views/Rockets.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
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


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router