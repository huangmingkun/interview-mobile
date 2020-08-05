import Vue from 'vue'

const focus = Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: (el, binding, vNode) => {
    // console.log(11111, el)
    console.log(22222, el.getElementsByTagName('input')[0]) // 获取mint--input框元素
    // el.focus()
    el.getElementsByTagName('input')[0].focus()
  }
})

export {focus}
