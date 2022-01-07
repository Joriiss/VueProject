import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/videos',
    name: 'Videos',
    component: () => import('../views/Videos.vue')
  },
  { 
    path: '/video/:id', 
    name: 'Video',
    component: () => import('../views/Video.vue') 
  }
]

const router = new VueRouter({
  routes
})

export default router
