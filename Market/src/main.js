// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入全局样式表
import './assets/css/global.css'
import './plugins/element.js'
import axios from 'axios'
import qs from 'qs'
//引入全局状态管理
import store from './store/index'

Vue.prototype.$http = axios
Vue.prototype.$qs = qs

axios.defaults.baseURL = 'http://127.0.0.1:8080/staff/'
//需要转换成表单类型的配置，否则后端接受为空
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use(config => {
  //console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem("token")
  return config
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
