<template>
  <div class="wrap">
    <deep-css-test-child></deep-css-test-child>
  </div>
</template>

<script>
import DeepCssTestChild from './DeepCssTestChild'
export default {
  name: 'CssDeepTest',
  components: {
    DeepCssTestChild
  }
}
</script>

<style scoped>
  .wrap /deep/ .deep-child {
    color: red;
  }
</style>
