// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//开启debug模式
Vue.config.debug = true;
import App from './App'
// 引用路由插件  
 import VueRouter from 'vue-router'  
// // 试用路由插件  
 Vue.use(VueRouter)  
//引入路由配置文件  
import routes from './config/routes' 
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap-reset.css'
import './assets/css/base.css'
import './assets/css/style.css'
import './assets/css/font-awesome2.css'
import './assets/js/bootstrap.min.js'
import './assets/js/html5shiv.min.js'
import './assets/css/bootstrap-table.css'
import vue_extends from './assets/js/vue-extends-method.js'

Vue.use(vue_extends)
//console.log(vue_extends)
// 使用配置文件规则  
const router = new VueRouter({  
  mode: 'history',  
  base: __dirname,  
  routes: routes }) 


const app = new Vue({  
      router: router,  
      render: h => h(App)  
}).$mount('#app')
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
