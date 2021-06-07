// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ApiService from './api/https.js'
// vuex
import store from './store/index'
// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入iconfont
import './assets/iconfont/iconfont.css'
// import baseLayout from './views/test/BaseLayout' // 全局注册组件
// 引入全局css
import './assets/css/init.css'
import './assets/css/common.css'
// 引入全局filter方法
import filters from './js/common/utils'
import Lodash from 'lodash' // lodash--js函数
import './js/directive/directives'// 全局引入指令
import './js/common/common-config.js'// 全局引入相关配置
// 引入echarts
import echarts from 'echarts'
import Mock from './mock/mock'
// 根据环境变量决定是否引入mock
if (process.env.NODE_ENV === 'development') {
  // console.log('process.env.NODE_ENV', process.env.API)
  Mock.mockData()
}
// 引入mock
// import Mock from './mock/mock'
// Mock.mockData()

Vue.prototype.$log = window.console.log // 全局引入打印调试
Vue.prototype.$lodash = Lodash // lodash--js函数
Vue.use(MintUI)
// 全局注册api方法
Vue.prototype.$ApiService = ApiService
// 局部引入---在使用的页面加上下面一行代码即可局部引入成功
// import {ApiService} from '../js/api/https--anxuyinru.js';

Vue.config.productionTip = false
// 引入全局filter
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
// 全局注册组件--方式一
// Vue.component('base-layout', baseLayout)

// 全局注册组件--方拾二
// Vue.component('base-layout', {
//   template: `<div class="container">` +
//   `<header>` +
//   `<slot name="header"></slot>` +
//   `</header>` +
//   `<main>` +
//   `<slot></slot>` +
//   `</main>` +
//   `<footer>` +
//   `<slot name="footer"></slot>` +
//   `</footer>` +
//   `</div>`
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
