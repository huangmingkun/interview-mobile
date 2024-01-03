<template>
  <div>
    <my-input v-model="inputVal" label="姓名" />
  </div>
</template>

<script>
import MyInput from './MyInput.vue'
export default {
  name: 'index',
  data () {
    return {
      inputVal: '111'
    }
  },
  components: {
    MyInput
  },
  watch: {
    inputVal (newVal, oldVal) {
      // console.log('新旧值', { newVal, oldVal })
      this.getDataByInputVal()
    }
  },
  created () {
    this.getDataByInputVal = this.debounce(this.getDataByInputVal, 1000)
  },
  methods: {
    debounce (fn, wait = 500) {
      let timer = null
      return function (...args) {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
          console.log('防抖执行了')
          fn()
        }, wait)
      }
    },
    getDataByInputVal () {
      setTimeout(() => {
        console.log(this.inputVal)
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
