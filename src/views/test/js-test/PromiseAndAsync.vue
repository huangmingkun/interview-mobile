<template>
  <div></div>
</template>

<script>
export default {
  name: 'PromiseAndAsync',
  data () {
    return {
    }
  },
  created () {
    function a () {
      return new Promise((resolve) => {
        setTimeout(function () {
          console.log('a')
          resolve()
        }, 10)
      })
    }
    function b () {
      return new Promise((resolve) => {
        setTimeout(function () {
          console.log('b')
          resolve()
        }, 40)
      })
    }
    function c () {
      setTimeout(function () {
        console.log('c')
      }, 20)
    }
    const asyncFun = async function () {
      await a()
      await b()
      c()
    }
    asyncFun()
  },
  methods: {
    promiseA () {
      return new Promise((resolve, reject) => {
        console.log(1)
      })
    }
  }
}
</script>

<style scoped>

</style>
