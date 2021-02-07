<template>
  <div class="clipboard-container">
    <!--clipboard-->
    <mt-button class="cpty-btn" @click="copyContent">JS复制</mt-button>
    <p class="padding20">1.vue-clipboard--指令复制</p>
    <mt-button
      v-clipboard:copy="message"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError">
      指令复制
    </mt-button>
    <p class="padding20">2.vue-clipboard--按钮复制</p>
    <div class="container">
      <input type="text" v-model="message">
      <mt-button @click="copyTest">按钮复制</mt-button>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
  name: 'Clipboard',
  data () {
    return {
      message: 'hmk123'
    }
  },
  methods: {
    // clipboard插件
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
    },
    // vueClipboard插件（指令触发复制）
    onCopy (e) {
      // console.log(e)
      console.log('复制成功')
    },
    onError () {
      console.log('复制失败')
    },
    // vueClipboard插件（按钮触发复制）
    copyTest: function () {
      // this.$copyText是VueClipboard插件全局注册的方法
      this.$copyText(this.message).then(function (e) {
        alert('复制内容成功')
        console.log(e)
      }, function (e) {
        alert('复制失败')
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>
  .padding20 {
    padding: 20px 0;
    color: #98cab5;
  }
  .clipboard-container {
    padding-left: 20px
  }
</style>
