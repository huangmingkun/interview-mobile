<template>
  <div class="v-model-container">
    <mt-button @click.stop="showToastFunc">v-model练习</mt-button>
    <children
      v-model="isShowToast"
    >
    </children>
  </div>
</template>

<script>
import Children from './component/Children'
export default {
  name: 'VModel',
  components: {
    Children
  },
  data () {
    return {
      isShowToast: false
    }
  },
  methods: {
    showToastFunc () {
      this.isShowToast = true
    }
  }
}
</script>

<style scoped>

</style>
