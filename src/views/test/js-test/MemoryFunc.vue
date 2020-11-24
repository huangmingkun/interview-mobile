<template>
  <div>
    <h1 @click="memoryClick">JS练习</h1>
  </div>
</template>

<script>
export default {
  name: 'JsTest',
  created () {
    const that = this
    // 记忆函数
    that.memoryMethod()
    // 触发记忆函数
    that.memoryMethodActive()
  },
  methods: {
    // 记忆函数---利用缓存来记忆计算过的值，防止同一参数时重复计算
    memoryMethod () {
      const that = this
      let add = function () {
        let cache = {}
        let startTime = new Date().getTime()
        console.log('初始时间', startTime)
        // console.log('cache', cache)
        return function (num) {
          if (num in cache) {
            let endTime = new Date().getTime()
            console.log(`--------------------缓存耗时：${endTime - startTime}毫秒`)
            return `From cache！ ${cache[num]}`
          } else {
            let result = num + 10
            cache[num] = result
            // console.log('内部cache', cache)
            let endTime = new Date().getTime()
            console.log(`--------------------计算耗时：${endTime - startTime}毫秒`)
            // console.log('计算--结束时间', endTime)
            return `caculated！${result}`
          }
        }
      }
      // 为什么直接调用会清理缓存的值？？
      // console.log(add()(10))
      // console.log(add()(10))
      // console.log(add()(5 * 2))
      // console.log(add()(5 * 5))
      // 闭包函数被引用时，不会清除作用域链上的参数缓存
      that.addMethod = add()
    },
    memoryMethodActive () {
      const that = this
      console.log(that.addMethod(10))
      console.log(that.addMethod(10))
      console.log(that.addMethod(5 * 2))
      console.log(that.addMethod(5 * 5))
    },
    memoryClick () {
      const that = this
      console.log(that.addMethod(25))
    }
  }
}
</script>

<style scoped>

</style>
