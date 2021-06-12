<template>
  <div>
    <h1>父组件</h1>
    <children-component></children-component>
  </div>
</template>

<script>
import ChildrenComponent from './ChildrenComponent'
export default {
  name: 'ComponentCommunication',
  data () {
    return {
    }
  },
  components: {
    ChildrenComponent
  },
  beforeCreate () {
    console.log('father-beforeCreate')
  },
  created () {
    console.log('father-created')
  },
  beforeMount () {
    console.log('father-beforeMount')
  },
  mounted () {
    console.log('father-mounted')
  },
  beforeUpdate () {
    console.log('father-beforeUpdate')
  },
  updated () {
    console.log('father-updated')
  },
  beforeDestroy () {
    console.log('father-beforeDestroy')
  },
  destroyed () {
    console.log('father-destroyed')
  },
  methods: {}
}
</script>

<style scoped>
</style>
