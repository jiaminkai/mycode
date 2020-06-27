import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/bootstrap.min.css'

// Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// axios({
//   url:'/api/index/index'
// }).then((res)=>{
//   console.log(res)
// })

// this.$http({
//   url:'http://118.25.222.68:5757/heyushuo/index/index'
// }).then(res=>{
//   console.log(res)
// })