<template>
  <div class="clipboard">
    <mt-button class="cpty-btn" @click="copyContent">复制</mt-button>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
  name: 'Clipboard',
  methods: {
    copyContent () {
      let that = this
      let clipboard = null
      console.log('当前浏览器是否支持复制', Clipboard.isSupported())
      if (Clipboard.isSupported()) {
        clipboard = new Clipboard('.cpty-btn', {
          text: function () {
            return 'hmk'
          }
        })
      } else {
        that.$toast('当前浏览器不支持复制')
      }
      clipboard.on('success', function (e) {
        that.$toast({
          message: '复制成功',
          position: 'middle',
          className: 'my-toast'
        })
        console.info('Action:', e.action)
        console.info('Text:', e.text)
        console.info('Trigger:', e.trigger)
        e.clearSelection()
        clipboard.destroy()
      })
      clipboard.on('error', function (e) {
        console.error('Action:', e.action)
        console.error('Trigger:', e.trigger)
        clipboard.destroy()
      })
      console.log(clipboard)
    }
  }
}
</script>

<style scoped>

</style>
