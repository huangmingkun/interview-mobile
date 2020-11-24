<template>
  <div>
    <p style="margin: 30px;font-size: 20px">数组去重</p>
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
    // 对象数组去重
    var oldArr = [
      { id: 2 }, { id: 4 }, { id: 3 }, { id: 3 }, { id: 4 }, { id: 6 }
    ]
    this.oldArr = oldArr
    // console.log('原始数组', arr)
    let newArr = this.unique(oldArr)
    this.newArr = newArr
    // console.log('去重后数组', newArr)
  },
  methods: {
    unique (oldArr) {
      let uniqueArr = []
      let tempObj = {}
      oldArr.forEach(function (val) {
        let key = val.id
        if (!tempObj.hasOwnProperty(key)) {
          uniqueArr.push(val)
          tempObj[key] = null
        }
      })
      return uniqueArr
    }
  }
}
</script>

<style scoped>

</style>
