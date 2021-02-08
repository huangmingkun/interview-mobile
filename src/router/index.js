import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress' // 进度条插件
import 'nprogress/nprogress.css' // 进度条插件样式
import routesStatic from './routesStatic' // 静态路由数据
import whiteList from './whiteList' // 路由白名单
Vue.use(Router)
// 进度条参数配置
Nprogress.configure({ easing: 'ease', speed: 500, showSpinner: false })
// console.log('routesStatic1111', routesStatic)
// console.log('whiteList', whiteList)
const router = new Router({
  // 1.路由模式mode，history模式url无“#”，hash模式url有“#”;
  // 2.打包放在umeet1.0的服务器上，需要hash模式，路由才能正常跳转；history模式会导致路由给“干掉”
  mode: 'history',
  routes: routesStatic // 静态路由数据引入
})
export default router

// 全局前置守卫
router.beforeEach((to, from, next) => {
  console.log('路由步骤' + 22222222)
  // 进度条开始
  Nprogress.start()
  /**
   * 页面的身份验证--方式一
   */
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   // this route requires auth, check if logged in
  //   // if not, redirect to login page.
  //   if (!auth.loggedIn()) {
  //     next({
  //       path: '/login',
  //       query: { redirect: to.fullPath }
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next() // 确保一定要调用 next()
  // }
  /**
   * 身份验证--方式二
   */
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // else next()
  // console.log('to', to)
  // console.log('to.fullPath', to.fullPath)
  // console.log('whiteList.indexOf(to.fullPath)', whiteList.indexOf(to.fullPath))
  /**
   * 白名单过滤
   **/
  if (whiteList.indexOf(to.fullPath) > -1) {
    // console.log('白名单')
    next()
  } else {
    // 检测是否已经登录
    // console.log('需要登录的页面')
    next()
  }
})
// 全局解析守卫 --- 在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
router.beforeResolve((to, from, next) => {
  console.log('路由步骤' + 66666666)
  next()
})
// 全局后置守卫 --- 这些钩子不会接受 next 函数也不会改变导航本身
router.afterEach((to, from) => {
  console.log('路由步骤' + 77777777)
  // 进度条结束
  Nprogress.done()
})
