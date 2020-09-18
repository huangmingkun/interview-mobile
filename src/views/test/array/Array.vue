<template>
  <div>
    <p><span>原始：</span>{{JSON.stringify(oldArr)}}</p>
    <p><span>去重：</span>{{JSON.stringify(newArr)}}</p>
  </div>
</template>

<script>
export default {
  name: 'Array',
  data () {
    return {
      oldArr: [],
      newArr: []
    }
  },
  created () {
    console.log('数组原型', Array.prototype)
    console.log('字符串原型', String.prototype)
    console.log('对象原型', Object.prototype)
    // 实现数组的去重功能
    Array.prototype.unique = function (fn) {
      var rst = []
      var tmp = {}
      console.log('this指向数组', this)
      this.forEach(function (val) {
        // 使用call来改变fn的this指向，这里传window
        var key = 'uniq' + (typeof fn === 'function' ? fn.call(window, val) : val)
        // var key = val.id
        if (!tmp.hasOwnProperty(key)) {
          rst.push(val)
          tmp[key] = null
        }
      }, this)

      return rst
    }
    // 对象数组去重
    var arr = [
      { id: 2 }, { id: 4 }, { id: 3 }, { id: 3 }, { id: 4 }, { id: 6 }
    ]
    this.oldArr = arr
    // console.log('原始数组', arr)
    let newArr = arr.unique(function (v) {
      console.log(this) // 使用bind传递了Array,则this一定是Array,而不会是window
      return v.id
    }.bind(Array))
    this.newArr = newArr
    // console.log('去重后数组', newArr)
  }
}
</script>

<style scoped>

</style>
