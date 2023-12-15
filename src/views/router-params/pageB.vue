<template>
  <div>
    <div>query：{{ JSON.parse($route.query.A )}}</div>
    <div>params：{{ $route.params }}</div>
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
