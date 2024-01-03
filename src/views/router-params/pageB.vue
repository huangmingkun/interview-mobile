<template>
  <div>
    <div>query：{{ JSON.parse($route.query.nameObj) }}</div>
<!--    <div>query：{{ JSON.parse($route.query.nameList) }}</div>-->
<!--    <div>params：{{ $route.query.name }}</div>-->
<!--    <div>params：{{ $route.params.name }}</div>-->
  </div>
</template>

<script>
export default {
  name: 'pageB',
  create () {
    console.log('query', this.$router.query)
    console.log('params', this.$router.params)
  }
}
</script>

<style scoped>

</style>
