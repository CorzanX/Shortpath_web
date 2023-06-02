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
import VueI18n from 'vue-i18n';
import 'prismjs';
// highlight.js代码高亮指令
import Highlight from '@/utils/highlight';
 
Vue.use(VueI18n)
Vue.use(Highlight)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
axios.defaults.baseURL = 'http://120.26.196.251:8088'
Vue.prototype.$http = axios


const i18n = new VueI18n({
  locale: 'en', // 设置默认语言为英文
  messages: {
    en: {
      pagination: {
        goto: 'Go',
        page: '',
        itemsPerPage: 'items per page',
        total: (total) => `Total ${total} items`,
      },
    },
  },
});
new Vue({
  i18n,
  render: h => h(App),
  router
}).$mount('#app')

export default i18n;
