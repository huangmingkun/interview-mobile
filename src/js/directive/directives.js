import Vue from 'vue'
import Clipboard from 'vue-clipboard2'
Vue.use(Clipboard)
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: (el, binding, vNode) => {
    // mint--input聚焦
    // console.log(22222, el.getElementsByTagName('input')[0])
    el.getElementsByTagName('input')[0].focus()
    // 原生input聚焦
    // console.log(11111, el)
    // el.focus()
  }
})
