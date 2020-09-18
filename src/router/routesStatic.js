const routesStatic = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login')
  },
  {
    path: '/commonUse',
    name: 'CommonUse',
    component: () => import('@/components/CommonUse')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/components/Home')
  },
  {
    path: '/router',
    name: 'router',
    component: () => import(/* webpackChunkName: "group-foo" */ '@/views/test/router/Router'),
    children: [
      {
        path: 'children',
        component: () => import('../views/test/router/children/RouterChildren')
      }
    ],
    beforeEnter: (to, from, next) => {
      // 路由独享的守卫
      console.log('步骤' + 44444444)
      next()
    }
  },
  {
    path: '/debounceOrThrottle',
    name: 'DebounceOrThrottle',
    component: () => import('@/views/test/debounce-throttle/DebounceOrThrottle')
  },
  {
    path: '/ulList',
    name: 'ulList',
    component: () => import('@/views/test/ul-list/UlList')
  },
  {
    path: '/alloyFinger',
    name: 'alloyFinger',
    component: () => import('@/views/test/tencent-plugin/AlloyFinger')
  },
  {
    path: '/scrollTop',
    name: 'scrollTop',
    component: () => import('@/views/test/scroll-top/ScrollTop')
  },
  {
    path: '/dateTime',
    name: 'dateTime',
    component: () => import('@/views/test/date-time/DateTime')
  },
  {
    path: '/clipboard',
    name: 'Clipboard',
    component: () => import('@/views/test/clipboard/Clipboard')
  },
  {
    path: '/prop',
    name: 'Prop',
    component: () => import('@/views/test/prop/Prop')
  },
  {
    path: '/encryption',
    name: 'encryption',
    component: () => import('@/views/test/encryption/Encryption')
  },
  {
    path: '/array',
    name: 'array',
    component: () => import('@/views/test/array/Array')
  },
  {
    path: '/jstest',
    name: 'JsTest',
    component: () => import('@/views/test/js-test/JsTest')
  },
  {
    path: '/range',
    name: 'Range',
    component: () => import('@/views/test/range/Range')
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import('@/views/test/grid/Grid')
  },
  {
    path: '/css',
    name: 'CssTest',
    component: () => import('@/views/test/css-test/CssTest')
  },
  {
    path: '/hoverText',
    name: 'hoverText',
    component: () => import('@/views/test/css-test/HoverText')
  },
  {
    path: '/triangle',
    name: 'Triangle',
    component: () => import('@/views/test/css-test/Triangle')
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import('@/views/test/slot/Slot')
  }
]

export default routesStatic
