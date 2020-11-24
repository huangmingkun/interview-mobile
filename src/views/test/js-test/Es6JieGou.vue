<template>
  <div>
    <h1>Es6解构数组和对象</h1>
  </div>
</template>

<script>
export default {
  name: 'Es6JieGou',
  created () {
    const fruits = ['apple', 'banana', 'origin']
    const otherFruits = ['watermelon', 'patch']
    let totalFruits = []
    totalFruits = [...fruits, ...otherFruits]
    console.log('数组解构', totalFruits)
    let fruitMsg = {name: 'mango', place: 'sichuan'}
    let otherFruitMsg = {month: 'july'}
    let totalFruitMsg = {...fruitMsg, ...otherFruitMsg}
    console.log('对象解构', totalFruitMsg)
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
