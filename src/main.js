// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引用路由
import VueRouter from 'vue-router'
//光引用不行，还得使用
Vue.use(VueRouter)
import App from './App'
//引用路由配置文件
import routes from '../config/routes'
//使用配置文件规则
const router = new VueRouter({
	routes
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
