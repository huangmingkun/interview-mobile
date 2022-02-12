<template>
  <div class="dynamic-detail">
    <div class="content-container">
      <common-detail
        v-for=" (item, idx) in testArr "
        :key="idx"
        :item-data="item"
      >
      </common-detail>
    </div>
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
    return {
      testObj: {
        id: 778899,
        permission: 'hmk'
      },
      testArr: [
        {
          label: '口号',
          value: '今天不努力，明天拧螺丝',
          name: '口号'
        },
        {
          label: '公司',
          value: 'XXXX',
          name: '公司',
          style: { color: 'skyblue' },
          clickFn: () => {
            console.log(this.testObj.id)
          }
        },
        {
          label: '每天一个小技巧',
          value: '多学多看多总结',
          name: '每天一个小技巧',
          formatFn: () => {
            if (this.testObj.permission) {
              return '多学多看多总结'
            } else {
              return '没权限'
            }
          }
        },
        {
          label: '时间',
          value: '2021-11-23',
          name: '时间',
          formatFn () {
            if (this.value) {
              console.log(this.value)
              return new Date(this.value)
            }
          }
        },
      ]
    }
  }
}
</script>

<style scoped lang="less">
.dynamic-detail {
  position: relative;
  background-color: #f1f1f1;
  height: 100vh;
  overflow: hidden;
  .content-container {
    margin: 8px;
    border-radius: 8px;
    padding: 12px 16px;
    background-color: #fff;
  }
}
</style>
