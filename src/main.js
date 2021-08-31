// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import ElemntUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false;
Vue.prototype.$axios=axios;
Vue.prototype.HOST = '/api'
/* eslint-disable no-new */
Vue.use(MuseUI);
Vue.use(ElemntUI);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
