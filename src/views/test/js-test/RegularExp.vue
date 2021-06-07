<template>
  <div>
    <p class="text_center font_size20">正则</p>
  </div>
</template>

<script>
export default {
  name: 'RegularExp',
  created () {
    const that = this
    that.testUrl()
    // that.getUrlParam()
    // that.exChangeName()
  },
  methods: {
    // 检测url是否合法（必须以http://、https://、file://、ftp://）
    testUrl () {
      let targetStr = 'https://www.cnblogs.com/chengzi-he/p/10556638.html?*a=123'
      const reg = /(http|https|ftp|file):\/\/([\w.]+\/?)\S*/
      // const reg = /(http)|(https)|(ftp)|(file):\/\/*/
      console.log('66666666666', reg.test(targetStr))
    },
    // 回去url中的会议号
    getUrlParam () {
      let regStr = ' http://192.168.8.16:8081/j/1515142489'
      let reg = /(\d{9,11})/g // 截取网络会议号 规则 9 到 11位
      console.log(regStr.match(reg))
    },
    // 交换字符串的位置
    exChangeName () {
      let regChild = 'hmk wwk'
      let reg = /(\w+)\s(\w+)/
      let resultStr = regChild.replace(reg, '$2, $1')
      console.log('正则匹配子字符串', resultStr)
      console.log(typeof resultStr)
    }
  }
}
</script>

<style scoped>

</style>
