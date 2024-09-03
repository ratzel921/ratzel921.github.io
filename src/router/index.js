import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/MiniSpielehalle',
    name: 'MiniSpielehalle',
    component: () => import('../projects/MiniSpielehalle.vue')
  },
  {
    path: '/ParkingControlSystem',
    name: 'Parking Control System',
    component: () => import('../projects/ParkingControlSystem.vue')
  },
  {
    path: '/WebShop',
    name: 'WebShop',
    component: () => import('../projects/WebShop.vue')
  },
  {
    path: '/DeviceManagement',
    name: 'DeviceManagement',
    component: () => import('../projects/DeviceManagement.vue')
  },
  {
    path: '/HandInHand',
    name: 'HandInHand',
    component: () => import('../projects/HandInHand.vue')
  },
  {
    path: '/BeGuided',
    name: 'BeGuided',
    component: () => import('../projects/BeGuided.vue')
  },
  {
    path: '/imprint',
    name: 'Imprint',
    component: () => import('../views/FooterSites/Imprint.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/FooterSites/Privacy.vue')
  },
  // {
  //   path: '/projects',
  //   name: 'Projects',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  // },
  // {
  //   path: '/skills',
  //   name: 'Skills',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Skills.vue')
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  // },
]

const router = new VueRouter({
  routes
})

export default router
