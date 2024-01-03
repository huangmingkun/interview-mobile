<template>
  <div class="page-A">
    <mt-button @click="gotoPageB">带参跳转B页面</mt-button>
  </div>
</template>

<script>
export default {
  name: 'pageA',
  methods: {
    gotoPageB () {
      this.$router.push({
        path: '/pageB',
        // 传递参数为对象组成的数组或者对象时，页面刷新会导致值变为[object, Object]，需要使用JSON.stringify()转为字符串，接收时使用JSON.parse()处理参数
        // 参数是有基本类型数据组成的数组时，刷新页面能正常显示
        query: {
          'nameObj': JSON.stringify({name: '张三'})
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
