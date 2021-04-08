<template>
  <div>
    <h1>Es6解构数组和对象</h1>
  </div>
</template>

<script>
export default {
  name: 'Es6JieGou',
  created () {
    this.paramsDeconstruction()
    // this.ArrayDeconstruction()
    // this.objectDeconstruction()
    // this.getObjectKeyAndValue()
  },
  methods: {
    // 函数参数获取时，使用es6赋值
    paramsDeconstruction () {
      let options = { flag: true, params: {name: 'hmk'} }
      let { params = {}, flag } = options
      console.log('params', params)
      console.log('flag', flag)
    },
    // 数组解构
    ArrayDeconstruction () {
      const fruits = ['apple', 'banana', 'origin']
      const otherFruits = ['watermelon', 'patch']
      let totalFruits = []
      totalFruits = [...fruits, ...otherFruits]
      console.log('数组解构', totalFruits)
    },
    // 对象解构
    objectDeconstruction () {
      let fruitMsg = {name: 'mango', place: 'sichuan'}
      let otherFruitMsg = {month: 'july', place: 'hainan'}
      let otherFruitMsg1 = {day: '6'}
      // 如果各个对象有相同属性，则第后续对象替换第一个对象的属性值
      let totalFruitMsg = {...fruitMsg, ...otherFruitMsg, ...otherFruitMsg1}
      console.log('对象解构', totalFruitMsg)
    },
    // 获取对象的键值对
    getObjectKeyAndValue () {
      let testObj = {
        name: 'hmk',
        age: 18
      }
      // Object.entries返回对象可枚举属性的键值对数组，如上述对象，则返回：[['name', 'hmk'], ['age', 18]]
      // 使用const [x, y]解构子数组，x等于子数组的第一个元素，y等于子数组的第二个元素
      for (const [key, val] of Object.entries(testObj)) {
        console.log('获取对象的键值对', key, val)
      }
    }
  }
}
</script>

<style scoped>

</style>
