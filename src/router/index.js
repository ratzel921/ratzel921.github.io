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
    {
        path: '*', // Catch all route
        name: 'NotFound',
        component: () => import('../views/FooterSites/NotFound404.vue')
    },
]

const router = new VueRouter({
    mode: 'history', // Use history mode
    routes
})

export default router