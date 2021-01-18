<template>
  <mt-loadmore :top-method="loadTop" ref="loadmore">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="(item, index) in list" :key="index">{{ item }}</li>
      </ul>
  </mt-loadmore>
<!--  <ul-->
<!--    v-infinite-scroll="loadMore"-->
<!--    infinite-scroll-disabled="loading"-->
<!--    infinite-scroll-distance="10">-->
<!--    <li v-for="(item, index) in list" :key="index">{{ item }}</li>-->
<!--  </ul>-->
</template>

<script>
export default {
  name: 'scroll-test',
  data () {
    return {
      loading: false,
      list: [ 1, 2, 4, 1, 2, 4, 1, 2, 4, 1, 2, 4 ]
    }
  },
  methods: {
    loadTop () {
      console.log('上拉刷新')
      this.list = [ 1, 2, 4, 1, 2, 4, 1, 2, 4, 1, 2, 4 ]
      // 加载更多数据
      this.$refs.loadmore.onTopLoaded()
    },
    loadMore () {
      this.loading = true
      setTimeout(() => {
        let last = this.list[this.list.length - 1]
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i)
        }
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style scoped>
li {
  height: 80px;
}
</style>
