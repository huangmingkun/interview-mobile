<template>
  <div>
    <h1>子组件</h1>
  </div>
</template>

<script>
export default {
  name: 'ChildrenComponent',
  data () {
    return {
    }
  },
  beforeCreate () {
    console.log('child-beforeCreate')
  },
  created () {
    console.log('child-created')
  },
  beforeMount () {
    console.log('child-beforeMount')
  },
  mounted () {
    console.log('child-mounted')
  },
  beforeUpdate () {
    console.log('child-beforeUpdate')
  },
  updated () {
    console.log('child-updated')
  },
  beforeDestroy () {
    console.log('child-beforeDestroy')
  },
  destroyed () {
    console.log('child-destroyed')
  },
  methods: {}
}
</script>

<style scoped>
</style>
