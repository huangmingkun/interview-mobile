<template>
  <div>
    <p class="text_center font_size20">正则</p>
  </div>
</template>

<script>
export default {
  name: 'RegularExp',
  created () {
    // let regChild = 'hmk wwk'
    // let reg = /(\w+)\s(\w+)/
    // let resultStr = regChild.replace(reg, '$2, $1')
    // console.log('正则匹配子字符串', resultStr)
    // console.log(typeof resultStr)

    let regStr = ' http://192.168.8.16:8081/j/1515142489'
    let reg = /(\d{9,11})/g // 截取网络会议号 规则 9 到 11位
    console.log(regStr.match(reg))
  }
}
</script>

<style scoped>

</style>
