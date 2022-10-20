// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/font/iconfont.css'

// import Resource from './resource'

import './style/index.css'
// import Vant from 'vant'
// import 'vant/lib/index.css'

// 注册使用vant组件库
// Vue.use(Vant)

import api from './api/api'

Vue.config.productionTip = false
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // resource: Resource,
  components: { App },
  template: '<App/>'
})
