<template>
  <div>
    <router-link :to="url">跳转测试</router-link>
    <p class="padding_tb50"
       v-for="i in 100"
       :key="i">测试数据{{i}}</p>
    <div class="scroll-top-btn" @click="scrollTopMethos(20)">
      top
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollTop',
  data () {
    return {
      url: '/router'
    }
  },
  created () {
    // let that = this
    // let k = 3
    // let nums = [1, 2, 3, 1]
    // let nums = [1, 2, 3, 1, 2, 3]
    // console.log(11111111111, that.containsNearbyDuplicate(nums, k))
  },
  methods: {
    scrollTopMethos (spread) {
      let spreadVal = spread || 30
      let scrollTime = setInterval(function () {
        let currentScrollVal = document.documentElement.scrollTop || document.body.scrollTop
        // console.log('当前滚动条的值', currentScrollVal)
        currentScrollVal -= spreadVal
        console.log('下一个滚动条的值', currentScrollVal)
        if (currentScrollVal > 0) {
          window.scrollTo(0, currentScrollVal)
        } else {
          window.scrollTo(0, 0)
          clearInterval(scrollTime)
        }
      })
    },
    containsNearbyDuplicate (nums, k) {
      console.log(nums.length)
      for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
          // console.log(1111, Math.abs(j - i))
          if (nums[i - 1] === nums[j] && Math.abs(j - i) < k) {
            return true
          }
        }
      }
      return false
    }
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log('步骤' + 11111111)
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
}
</script>

<style scoped>
  .scroll-top-btn {
    position: fixed;
    bottom: 10px;
    right: 10px;
    height: 30px;
    line-height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #d0e6df;
    color: white;
  }
</style>
