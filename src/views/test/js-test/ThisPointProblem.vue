<template>
  <div>
    <h1>this的指向问题</h1>
    <input v-model="testVal"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// 普通html--script中的this指向window
// 组件内的this指向一个{},{}里面有vue的方法
console.log('export外的this', this) // {}
this.a = 1111
export default {
  name: 'ThisPointProblem',
  data () {
    return {
      testVal: 123
    }
  },
  computed: {
    tempVal: () => {
      // this指向不是vue的实例
      console.log('computed--箭头函数--this', this)
      return 123
    },
    totalVal: function (val) {
      // this指向vue的实例
      console.log('computed---普通函数--this', this)
      return this.testVal
    },
    ...mapState('common', {
      vuexCount: 'count',
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        // 此时this指向vue的实例
        console.log('computed---普通函数--mapstate--this', this)
        return state.count + this.testVal
      }
      // countPlusLocalState: (state) => {
      //  此时this不是指向vue的实例
      //   console.log('computed---箭头函数--mapstate--this', this)
      //   return state.count + this.testVal
      // }
    })
  },
  created () {
    console.log('created--this', this)
    console.log('created--访问computed', this.tempVal)
    console.log('created--访问computed', this.totalVal)
    console.log('created--computed--mapstate', this.countPlusLocalState)
  },
  methods: {},
  watch: {
    'testVal': function (newVal, oldVal) {
      // watch中使用普通函数时，this指向vue实例
      console.log('watch--普通函数--this', this)
      console.log(newVal, oldVal)
    }
    // 'testVal': (newVal, oldVal) => {
    //   // 注意：watch中使用箭头函数时，this不是指向vue实例
    //   console.log('watch--箭头函数--this', this)
    //   console.log(newVal, oldVal)
    // }
  }
}
</script>

<style scoped>

</style>
