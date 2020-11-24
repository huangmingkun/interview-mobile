<template>
  <div class="computed-container margin_top20 margin_left20">
    <label><input class="border_blue_1px padding_input" type="text" placeholder="请输入姓" v-model="firstName"></label>
    <p class="padding_tb50"></p>
    <label><input class="border_blue_1px padding_input" type="text" placeholder="请输入名" v-model="secondName"></label>
    <p class="padding_tb50"></p>
    <label><input class="border_blue_1px padding_input" type="text" placeholder="请输入姓名" v-model="fullName"></label>
  </div>
</template>

<script>
export default {
  name: 'ComputedTest',
  data () {
    return {
      firstName: '',
      secondName: ''
    }
  },
  computed: {
    fullName: {
      get () {
        console.log('调用了computed的getter方法')
        return this.firstName + '·' + this.secondName
      },
      set (value) {
        console.log('调用了computed的setter方法', value)
        let names = value.split('·')
        console.log(names)
        this.firstName = names[0]
        this.secondName = names[1]
      }
    }
  }
}
</script>

<style scoped>

</style>
