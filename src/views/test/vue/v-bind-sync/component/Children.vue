<template>
  <div>
    <h1 v-show="show">v-bind.sync练习</h1>
    <slot></slot>
    <mt-button @click.stop="closeFunc">改变父组件的值</mt-button>
  </div>
</template>

<script>
export default {
  name: 'children',
  props: {
    show: {
      type: Boolean
    }
  },
  data () {
    return {}
  },
  methods: {
    closeFunc () {
      this.$emit('update:show', false)
      this.$emit('update:age', 19)
    }
  }
}
</script>

<style scoped>

</style>
