import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import treeTable from 'vue-table-with-tree-grid';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueQuillEditor from  'vue-quill-editor';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import VDistpicker from 'v-distpicker'


Vue.use(ElementUI)
Vue.component('tree-table',treeTable)
Vue.use(VueQuillEditor)
Vue.prototype.$http = axios
Vue.component('v-distpicker', VDistpicker)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
