<template>
  <div>
    <p class="text_center" style="font-size: 23px">算法练习</p>
  </div>
</template>

<script>
export default {
  name: 'Algorithm',
  data () {
    return {}
  },
  methods: {
    // 两个有序整数数组合并
    mergesTwoOrderdIntegers () {
      let resultArr = [2, 3, 8, 9]
      let targetArr = [5, 6, 7, 9]
      // [0, 0, 0, 0, 0, 0, 0]
      let m = 4
      let n = 3
      const actionMethod = function (resultArr, m, targetArr, n) {
        let resultArrLen = m - 1
        let targetArrLen = n - 1
        let totalLen = m + n - 1
        while (targetArrLen >= 0) {
          // resultArrLen小于0时，说明targetArr剩下的值比resultArr最小值还要小
          // 此时，只需要将targetArr剩下的值，直接插入resultArr左部即可
          if (resultArrLen < 0) {
            resultArr[totalLen--] = targetArr[targetArrLen--]
            continue
          }
          // 这里 -- 是因为写入成功后，下标再自动减一
          resultArr[totalLen--] = resultArr[resultArrLen] >= targetArr[targetArrLen] ? resultArr[resultArrLen--] : targetArr[targetArrLen--]
        }
        return resultArr
      }
      console.log('合并后的数组', actionMethod(resultArr, m, targetArr, n))
    },
    formatFlatUniqueArray () {
      /**
       * 已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
       * 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
       * **/
      let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]
      // 扁平化数组
      let flatArr = arr.flat(4)
      console.log('flatArr', flatArr)
      // new Set()--创建拥有独一无二值的对象
      console.log('new Set(flatArr)', new Set(flatArr))
      // Array.from--方法从一个类似数组或可迭代对象创建一个新的、浅拷贝的数组实例
      // let uniqueArr = Array.from(new Set(flatArr))
      // 使用...解构对象
      let uniqueArr = ([...new Set(flatArr)])
      console.log('uniqueArr', uniqueArr)
      let resultArr = uniqueArr.sort((a, b) => { return a - b }) // a - b升序；b - a降序
      console.log('resultArr', resultArr)
    },
    twoNumsAdd () {
      let target = 5
      let tempArr = [3, 6, 8, 3, 11]
      const actionMethod = function (arr, target) {
        let tempObj = {}
        let resultArr = []
        for (let i = 0; i < arr.length - 1; i++) {
          tempObj[arr[i]] = arr[i]
          if (i !== 0 && tempObj.hasOwnProperty(target - arr[i])) {
            resultArr = [arr[i], target - arr[i]]
            return resultArr
          }
        }
        return '该数组不存在符合条件的两个值'
      }
      console.log('两数之和运算结果', actionMethod(tempArr, target))
    },
    // 寻找1-n的所有质数
    findPrimeNumbers (n) {
      let resultArr = []
      for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
          if (i % j === 0) {
            console.log(i, j)
            resultArr.push(i)
            break
          }
        }
      }
      return resultArr
    }
  },
  created () {
    const that = this
    // that.mergesTwoOrderdIntegers() // 两个有序整数数组合并
    // that.formatFlatUniqueArray() // 扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
    // that.twoNumsAdd() // 从数组中找出两数之和等于输入值的两个值
    console.log('1-n的所有质数', that.findPrimeNumbers(11)) // 寻找1-n的所有质数
  }
}
</script>

<style scoped>

</style>
