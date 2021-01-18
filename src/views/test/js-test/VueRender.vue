<template>
  <!--利用 render 函数减小了代码重复率-->
  <div>
    <child :level="level">{{childData}}</child>
    <child :level="4">{{childData}}</child>
    <mt-button @click="changeData">改变数据</mt-button>
  </div>
</template>

<script type='text/javascript'>
import child from '@/js/component-js/component-render'
/** 方式一：全局注册child
 */
// import Vue from 'vue'
// Vue.component('child', {
//   render (h) {
//     // console.log('hhhhhh', h)
//     const tag = ['div', 'p', 'strong', 'h1', 'h2', 'textarea'][this.level - 1]
//     return h(tag, this.$slots.default)
//   },
//   props: {
//     level: { type: Number, required: true }
//   }
// })
/**
  *方式二：局部注册child
 **/
// var child = {
//   render (h) {
//     // console.log('hhhhhh', h)
//     const tag = ['div', 'p', 'strong', 'h1', 'h2', 'textarea'][this.level - 1]
//     return h(tag, this.$slots.default)
//   },
//   props: {
//     level: { type: Number, required: true }
//   }
// }
export default {
  name: 'hehe',
  data () {
    return {
      level: 3,
      childData: 'Hello world!'
    }
  },
  components: {
    child
  },
  methods: {
    changeData () {
      const that = this
      that.childData = 'I am Fine'
    }
  }
}
</script>
