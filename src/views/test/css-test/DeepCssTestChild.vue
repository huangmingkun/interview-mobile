<template>
  <div>
    <p class="deep-child">子组件---style带scoped属性</p>
  </div>
</template>

<script>
export default {
  name: 'DeepCssTestChild'
}
</script>

<style scoped>
  .deep-child {
    color: green;
  }
</style>
