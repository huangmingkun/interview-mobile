<template>
  <div class="detail-item">
    <div class="label">{{ itemData.label }}</div>
    <div
      class="content"
      :style="itemData.style"
      @click.stop="itemData.clickFn && itemData.clickFn()"
    >
      {{ itemData.formatFn ? itemData.formatFn() : itemData.value }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonDetail',
  props: {
    itemData: {
      type: Object,
      default: {}
    }
  },
  methods: {
    formatFn (itemData) {

    }
  }
}
</script>

<style scoped lang="less">
.detail-item {
  margin-bottom: 12px;
  .label {
    color: #999999;
    font-size: 14px;
    line-height: 20px;
  }
  .content {
    margin-top: 4px;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
  }
}
</style>
