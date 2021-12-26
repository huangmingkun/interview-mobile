<template>
  <div class="common-detail">
    <div class="detail-item">
      <div class="label">口号</div>
      <div class="content">今天不努力，明天拧螺丝</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonDetail',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">
.detail-item {
  margin: 8px;
  background-color: #fff;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 14px;
  .label {
    color: #999999;
  }
}
</style>
