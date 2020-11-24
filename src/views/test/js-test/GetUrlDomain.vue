<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'GetUrlDomain',
  data () {
    return {}
  },
  created () {
    const that = this
    that.getUrlDomain()
  },
  methods: {
    /**
     * // window.location.protocol+"//"+window.location.host; // 返回https://mp.csdn.net
     * // window.location.host; // 返回url 的主机部分，例如：mp.csdn.net
     * // window.location.hostname; //返回mp.csdn.net
     * // window.location.href; //返回整个url字符串(在浏览器中就是完整的地址栏)
     * // window.location.pathname; //返回/a/index.php或者/index.php
     * // window.location.protocol; //返回url 的协议部分，例如： http:，ftp:，maito:等等。
     * // window.location.port //url 的端口部分，如果采用默认的80端口，那么返回值并不是默认的80而是空字符
    **/
    getUrlDomain () {
      console.log('window.location', window.location)
      let protocolAndHost = window.location.protocol + '//' + window.location.host
      console.log('protocolAndHost', protocolAndHost)
    }
  }
}
</script>

<style scoped>

</style>
