<template>
  <div>
    <h1>Promise练习</h1>
  </div>
</template>

<script>
function a () {
  setTimeout(function () {
    console.log('a')
  }, 20)
}
function b () {
  setTimeout(function () {
    console.log('b')
  }, 40)
}
function c () {
  setTimeout(function () {
    console.log('c')
  }, 10)
}
export default {
  name: 'Promise',
  data () {
    return {}
  },
  created () {
    const that = this
    that.promiseMethod()
  },
  methods: {
    promiseMethod () {
      Promise.all([Promise.resolve(a), Promise.resolve(b)])
        .then(val => {
          c()
        })
    }
  }
}
</script>

<style scoped>

</style>
