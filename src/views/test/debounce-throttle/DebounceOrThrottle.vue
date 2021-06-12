<template>
  <div>
<!--    <mt-button @click="clickMethod" type="primary">点击</mt-button>-->
<!--    <mt-field class="input-common-class _margin-20"-->
<!--              v-model="inputValue"-->
<!--              :attr="{maxlength: 100}"-->
<!--              :state="stateType"-->
<!--              @keydown.native="clickMethod">-->
<!--    </mt-field>-->
    <input
      v-model="inputValue"
      oninput="value=value.replace(/[\'&]/, '')"
      @keypress="clickMethod">
   <!-- <mt-button @click="clickMethod">点击</mt-button>-->
    <p class="padding_tb50"
       v-for="(index) in 100"
       :key="index">
      hello + {{inputValue}}</p>
  </div>
</template>

<script>
import { debounce } from 'lodash/function'
export default {
  name: 'DebounceOrThrottle',
  data () {
    return {
      inputValue: '',
      stateType: 'success' // 表单校验状态样式，接受 error, warning, success
    }
  },
  methods: {
    clickMethod: debounce(function () {
      let that = this
      console.log(111)
      that.handle()
      // that.customDebounce(that.handle, 5000)()
      // that.customThrottling(that.handle, 500, 1000)()
    }, 500),
    // 闭包方式优化滚动事件---滚动完成再触发事件
    customDebounce (fn, time) {
      console.log('time', time)
      let timeout = null
      return function () {
        if (timeout !== null) clearTimeout(timeout)
        timeout = setTimeout(function () {
          fn('防抖')
        }, time)
      }
    },
    // 自定义方法实现抖动和节流
    customThrottling (fn, time, maxTimeLong) {
      let timeout = null
      let startTime = Date.parse(new Date())
      return function () {
        if (timeout !== null) clearTimeout(timeout)
        let currentTime = Date.parse(new Date())
        if (currentTime - startTime >= maxTimeLong) {
          console.log('----------------', currentTime - startTime)
          fn('节流')
          startTime = currentTime
        } else {
          timeout = setTimeout(function () {
            fn('防抖')
          }, time)
        }
      }
    },
    // 滚动后打印信息
    handle (params) {
      console.log(params + '----------', this.$lodash.random(100))
    }
  },
  created () {
  },
  mounted () {
    let that = this
    /**
     * 闭包
     * 节流
     * **/
    // 闭包方式优化滚动事件---滚动完成再触发事件
    // window.addEventListener('scroll', that.customDebounce(that.handle, 2000))
    // 节流+防抖动优化滚动事件
    window.addEventListener('scroll', that.customThrottling(that.handle, 500, 1000))
  }
}
</script>

<style scoped>
  .input-common-class {
    border: 1px solid #b4eed2;
    border-radius: .5rem;
  }
</style>
