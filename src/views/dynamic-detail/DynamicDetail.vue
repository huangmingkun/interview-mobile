<template>
  <div class="dynamic-detail">
    <common-detail></common-detail>
  </div>
</template>

<script>
import CommonDetail from '@/components/DetailItem'
export default {
  name: 'DynamicDetail',
  components: {
    CommonDetail
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
.dynamic-detail {
  position: relative;
  background-color: #eee;
  height: 100vh;
  overflow: hidden;
}
</style>
