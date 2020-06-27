import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/cart.vue'
import Categroy from '../views/categroy.vue'
import Main from '../views/main.vue'
import My from '../views/my.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main1',
    component: Main
  },
 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/categroy',
    name: 'Categroy',
    component: Categroy
  }, {
    path: '/my',
    name: 'My',
    component: My
  }, {
    path: '/main',
    name: 'Main',
    component: Main
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
