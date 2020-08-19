import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Cart from '../views/cart.vue'
import Categroy from '../views/categroy.vue'
import Main from '../views/main.vue'
import My from '../views/my.vue'
// import Details from '../views/Details.vue';
import special from '../views/Special.vue';
import cartgroylist from '../views/cartgroylist.vue'



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
  },
   {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/details:id',
    name: 'Details',
    
    component: () => import ('../views/Details.vue')
  },
  {
    path: '/special',
    name: 'special',
    component: special
  },
  {
    path:'/cartgroylist',
    name:'cartlist',
    component: cartgroylist
  },
  {
    path:'/branddetails',
    name:'branddetails',
    component: () => import ('../components/brand/branddetail.vue')
  },{
    path:'/brandlist',
    name:'brandlist',
    component: () => import ('../components/brand/brandlist.vue')
  },
  {
    path:'/newgoods',
    name:'newgoods',
    component:()=> import ('../views/newgoods.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
