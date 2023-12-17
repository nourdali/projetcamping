import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/ContactView.vue'
import Profil from '../views/ProfilView.vue'
import Detail from '../views/DetailView.vue'
import Services from '../views/ServicesView.vue'
import Exemple from '../views/ExpView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
   
    component:Contact
  },
  {
    path: '/exemple',
   
    component:Exemple
  },
  {
    path: '/profil',
   
    component:Profil
  },
  {
    path: '/detail',
   
    component:Detail
  },
  {
    path: '/services',
   
    component:Services
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
