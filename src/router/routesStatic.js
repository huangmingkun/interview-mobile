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
      console.log('路由步骤' + 44444444)
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
    path: '/uniqueArray',
    name: 'UniqueArray',
    component: () => import('@/views/test/array/UniqueArray')
  },
  {
    path: '/MemoryFunc',
    name: 'MemoryFunc',
    component: () => import('@/views/test/js-test/MemoryFunc')
  },
  {
    path: '/JsTest',
    name: 'JsTest',
    component: () => import('@/views/test/js-test/JsTest')
  },
  {
    path: '/Closure',
    name: 'Closure',
    component: () => import('@/views/test/js-test/Closure')
  },
  {
    path: '/Algorithm',
    name: 'Algorithm',
    component: () => import('@/views/test/js-test/Algorithm')
  },
  {
    path: '/ClickDecoration',
    name: 'ClickDecoration',
    component: () => import('@/views/test/js-test/ClickDecoration')
  },
  {
    path: '/VueRender',
    name: 'VueRender',
    component: () => import('@/views/test/js-test/VueRender')
  },
  {
    path: '/getUrlDomain',
    name: 'GetUrlDomain',
    component: () => import('@/views/test/js-test/GetUrlDomain')
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
    path: '/CssLayoutFloat',
    name: 'CssLayoutFloat',
    component: () => import('@/views/test/css-test/CssLayoutFloat')
  },
  {
    path: '/CssLayoutPosition',
    name: 'CssLayoutPosition',
    component: () => import('@/views/test/css-test/CssLayoutPosition')
  },
  {
    path: '/SystecElectronDemo',
    name: 'SystecElectronDemo',
    component: () => import('@/views/test/css-test/SystecElectronDemo')
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
    path: '/shanGeHua',
    name: 'ShanGeHua',
    component: () => import('@/views/test/css-test/ShanGeHua')
  },
  {
    path: '/jieGou',
    name: 'Es6JieGou',
    component: () => import('@/views/test/js-test/Es6JieGou')
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('@/views/test/vuex/Vuex')
  },
  {
    path: '/VuexDataInteraction',
    name: 'VuexDataInteraction',
    component: () => import('@/views/test/vuex/VuexDataInteraction')
  },
  {
    path: '/eventLoop',
    name: 'EventLoop',
    component: () => import('@/views/test/js-test/EventLoop')
  },
  {
    path: '/designDecorate',
    name: 'DesignDecorate',
    component: () => import('@/views/test/js-test/DesignDecorate')
  },
  {
    path: '/regularExp',
    name: 'RegularExp',
    component: () => import('@/views/test/js-test/RegularExp')
  },
  {
    path: '/computedTest',
    name: 'ComputedTest',
    component: () => import('@/views/test/js-test/ComputedTest')
  },
  {
    path: '/shortId',
    name: 'ShortId',
    component: () => import('@/views/test/js-test/ShortId')
  },
  {
    path: '/directive',
    name: 'Directive',
    component: () => import('@/views/test/directive/Directive')
  },
  {
    path: '/ScrollTest',
    name: 'ScrollTest',
    component: () => import('@/views/test/mint-ui/ScrollTest')
  },
  {
    path: '/Vuelidate',
    name: 'Vuelidate',
    component: () => import('@/views/test/vuelidate/VuelidateTest')
  },
  {
    path: '/VueKey',
    name: 'VueKey',
    component: () => import('@/views/test/js-test/VueKey')
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import('@/views/test/slot/Slot')
  }
]

export default routesStatic
