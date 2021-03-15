import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import user from '../views/users.vue'
import login from '../views/login.vue'
import roles from '../views/roles.vue'
import weight from '../views/weight.vue'
import list from '../views/list.vue';
import params from '../views/params.vue';
import categories from '../views/categories.vue';
import orders from "../views/orders.vue";
import reports from '../views/reports.vue';
import add from '../views/addgoods.vue';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path: '/',
      name: 'login',
      component: login
    },
  {
    path: '/Home',
    name: 'Home',
    redirect:'/users',
    children:[
      {path:'/users',component:user},
      {path:'/roles',component:roles},
      {path:'/rights',component:weight},
      {path:'/goods',component:list},
      {path:'/params',component:params},
      {path:'/categories',component:categories},
      {path:'/orders',component:orders},
      {path:'/reports',component:reports},
      { path:'/goods/add',component:add}
    ],
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
