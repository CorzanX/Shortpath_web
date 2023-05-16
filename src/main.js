import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import router from './router'
import Sigma from 'sigma'
import * as d3 from 'd3'
import 'prismjs'
// highlight.js代码高亮指令
import Highlight from '@/utils/highlight';
 

Vue.use(Highlight)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
axios.defaults.baseURL = 'http://120.26.196.251:8088'
Vue.prototype.$http = axios
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
