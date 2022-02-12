<template>
  <div class="traverse-array">
    <div>数据遍历方法</div>
  </div>
</template>

<script>
export default {
  name: 'TraverseArray',
  data () {
    return {
      testArr: ['hmk', 'zhangsan', 'lisi']
    }
  },
  created () {
    this.mapFunc()
  },
  methods: {
    // 数组map方法练习
    mapFunc () {
      let testObj = this.testArr.map( item => {
        return item + '-map'
      })
      console.log(testObj)
    }
  }
}
</script>

<style scoped lang="less">
.traverse-array {
  >div {
    text-align: center;
  }
}
</style>
