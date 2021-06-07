<template>
  <div>
    <button @click="historyBackMethod">111</button>
  </div>
</template>

<script>
'use strict'
export default {
  name: 'Test',
  methods: {
    // 整数反转
    intReverse () {
      /**
       * @param {number} x
       * @return {number}
       */
      let x = '-1232160'
      var reverse = function (x) {
        let number = x.replace(/[\D]/g, '')
        number = number.split('').reverse()
        if (parseInt(number[0]) === 0) {
          number.shift()
          number = number.join('')
        } else {
          number = number.join('')
        }
        console.log('数字部分', number)
        let notNumber = x.replace(/[\d]/g, '')
        console.log('非数字部分', notNumber)
        return notNumber + number
      }
      reverse(x)
    },
    historyBackMethod () {
      const that = this
      that.$router.back(-1) || window.history.go(-1) || window.history.back()
    },
    preParams () {
      let value = {num: 10}
      // {...value}默认参数在被调用时才会进行计算，默认参数解构时，会创建新对象来进行解构并赋值给x
      const multiply = (x = {...value}) => {
        console.log('x参数', x)
        console.log(x.num *= 2)
      }
      multiply()
      multiply()
      multiply(value)
      multiply(value)
    },
    methodJsLink () {
      const add = x => y => z => {
        console.log(x, y, z) // 3 4 5
        return x + y + z
      }
      const temp = add(3)(4)(5)
      console.log('temp', temp)
    },
    addUniqueObj () {
      // Set构造函数创建独一无二值的对象
      const setObj = new Set([1, 1, 2, 3, 2])
      console.log('setObj', setObj.keys()) // 打印{1,2,3}
    },
    test () {
    }
  },
  created () {
    const that = this
    that.preParams()
    // that.methodJsLink() // 方法的链式调用
    // that.addUniqueObj() // Set构造函数创建独一无二值的对象
    // 整数反转
    // that.intReverse()
    // that.test()
  }
}
</script>

<style scoped>

</style>
