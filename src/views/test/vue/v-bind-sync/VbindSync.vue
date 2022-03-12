<template>
  <div class="v-bind-sync">
    <mt-button @click.stop="showToast">显示</mt-button>
    <children
      :show.sync="showFlag"
      v-bind.sync="testObj"
    >
      {{ testObj.name }}：{{ testObj.age }}
    </children>
  </div>
</template>

<script>
import Children from './component/Children'
export default {
  name: 'VbindSync',
  components: {
    Children
  },
  data () {
    return {
      showFlag: false,
      testObj: {
        name: 'hmk',
        age: 18
      }
    }
  },
  watch: {
    showFlag (newVal, oldVal) {
      console.log('父监听', newVal, oldVal)
    },
    testObj: {
      handler (newVal, oldVal) {
        console.log(newVal, oldVal)
      },
      deep: true
    }
  },
  created () {
    this.showFlag = true
  },
  methods: {
    showToast () {
      this.showFlag = true
    }
  }
}
</script>

<style scoped>

</style>
