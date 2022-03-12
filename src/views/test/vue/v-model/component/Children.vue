<template>
  <div>
    <mt-button v-show="value" @click.stop="closeToastAction">V-Model子组件</mt-button>
  </div>
</template>

<script>
export default {
  name: 'Children',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      setTimeoutFlag: null
    }
  },
  watch: {
    value (newVal, oldVal) {
      newVal && this.closeToast()
    }
  },
  methods: {
    closeToast () {
      this.setTimeoutFlag = setTimeout(() => {
        this.closeToastAction()
      }, 2000)
    },
    closeToastAction () {
      if (this.setTimeoutFlag) clearTimeout(this.setTimeoutFlag)
      this.$emit('input', false)
    }
  }
}
</script>

<style scoped>

</style>
