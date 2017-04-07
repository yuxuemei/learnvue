// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入jquery
import $ from 'jquery'
//引用路由
import VueRouter from 'vue-router'
//光引用不行，还得使用
Vue.use(VueRouter)
import App from './App'
//引用路由配置文件
import routes from './routes/routes'
//使用配置文件规则创建路由实例
const router = new VueRouter({
	routes
})
// 关键在这里，设置afterEach钩子函数
router.afterEach((to, from, next) => {
  document.title = to.name;
})
Vue.config.productionTip = false
//d导入全局less文件
require('!style-loader!css-loader!less-loader!./css/style.less');
//导入组件
import header from './components/header'
// 注册全局组件
Vue.component('my-component', header)
// 引入公共js
import common from './common'
Vue.use(common)

//store为实例化生成的
import store from './store/index'
//Vue.component('menu', menu)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store //注入到vue
})
