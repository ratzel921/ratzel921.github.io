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
    name: 'Mini Spielehalle',
    component: () => import('../projects/MiniSpielehalle.vue')
  },
  {
    path: '/HyphenTechnologies',
    name: 'Hyphen Technologies',
    component: () => import('../projects/HyphenTechnologies.vue')
  },
  {
    path: '/ParkingControlSystem',
    name: 'Parking Control System',
    component: () => import('../projects/ParkingControlSystem.vue')
  },
  {
    path: '/Webshop',
    name: 'Webshop',
    component: () => import('../projects/Webshop.vue')
  },
  {
    path: '/DeviceManagement',
    name: 'DeviceManagement',
    component: () => import('../projects/DeviceManagement.vue')
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
