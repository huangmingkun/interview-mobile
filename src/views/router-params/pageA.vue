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
        name: 'pageB',
        query: {
          'A': JSON.stringify([
            {name: '张三'},
            {name: '张三'},
            {name: '张三'},
            {name: '张三'},
            {name: '张三'},
            {name: '张三'},
            {name: '张三'},
          ])
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
