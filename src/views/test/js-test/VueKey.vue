<template>
  <div class="text_center">
    <p v-for="(item, index) in testArr" :key="index">{{item.name}}</p>
    <mt-button @click="changeDatas">改变数据源</mt-button>
  </div>
</template>

<script>
export default {
  name: 'VueKey',
  data () {
    return {
      testArr: [
        {
          name: 'hmk11'
        },
        {
          name: 'hmk22'
        },
        {
          name: 'hmk33'
        },
        {
          name: 'hmk44'
        }
      ]
    }
  },
  methods: {
    changeDatas () {
      const that = this
      that.testArr.splice(1, 1, {name: 'hmk66'})
      console.log('改变数据源后的值', that.testArr)
    }
  }
}
</script>

<style scoped>

</style>
