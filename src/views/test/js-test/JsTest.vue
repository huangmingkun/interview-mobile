<template>
  <div>
    <button @click="historyBackMethod">111</button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  methods: {
    // 两数之和
    doubleForTwoSum () {
      /**
       * @param {number[]} nums
       * @param {number} target
       * @return {number[]}
       */
      let nums = [3, 4, 5, 8]
      let target = 8
      let twoSum = function (nums, target) {
        var indexArr = []
        for (let i = 0; i < nums.length; i++) {
          for (let j = i + 1; j < nums.length; j++) {
            console.log('I下标', i)
            if (nums[i] + nums[j] === target) {
              indexArr = [i, j]
            }
          }
        }
        return indexArr
      }

      console.log('结果', twoSum(nums, target))
    },
    hashMapTwoSum () {
      let nums = [3, 4, 5, 8]
      let target = 8
      let tempObj = {}
      tempObj[target - nums[0]] = 0
      // console.log('tempObj', tempObj)
      for (let i = 1; i < nums.length; ++i) {
        let another = (target - nums[i])
        // console.log('判断条件', tempObj)
        // console.log('判断条件', another.toString())
        // console.log('判断', tempObj.hasOwnProperty(another))
        if (tempObj.hasOwnProperty(nums[i])) {
          console.log('找到了')
          console.log(tempObj[nums[i]], i)
          return [tempObj[nums[i]], i]
        } else {
          tempObj[another] = i
        }
      }
    },
    // 整数反转
    intReverse () {
      /**
       * @param {number} x
       * @return {number}
       */
      let x = '-1232160'
      var reverse = function (x) {
        let number = x.replace(/[\D]/g, '')
        number = number.split('').reverse()
        if (parseInt(number[0]) === 0) {
          number.shift()
          number = number.join('')
        } else {
          number = number.join('')
        }
        console.log('数字部分', number)
        let notNumber = x.replace(/[\d]/g, '')
        console.log('非数字部分', notNumber)
        return notNumber + number
      }
      reverse(x)
    },
    historyBackMethod () {
      const that = this
      that.$router.back(-1) || window.history.go(-1) || window.history.back()
    },
  },
  created () {
    const that = this
    console.log(55555555555, 2 ^ 31)
    // 两数之和
    // that.doubleForTwoSum()
    // console.log(that.hashMapTwoSum())
    // 整数反转
    that.intReverse()
  }
}
</script>

<style scoped>

</style>
