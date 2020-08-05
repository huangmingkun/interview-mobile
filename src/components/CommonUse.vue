<template>
  <div class="main">
    <div class="header">
      <p class="title padding_tb50">{{vuexCount}}</p>
    </div>
    <div class="body">
      <!--局部过滤器--可以串联-->
      <!--filterA 被定义为接收三个参数的过滤器函数。
      其中 message 的值作为第一个参数(默认传一个参数)，普通字符串 'arg1' 作为第二个参数，表达式 arg2 的值作为第三个参数。-->
      <mt-field :id="idName | idFilter">{{equipmentName | addNumber(99) | idFilter}}</mt-field>
      <!--v-focus--全局注册的指令，用于input的聚焦-->
      <!--<mt-field v-focus>globalFocus</mt-field>-->
      <!--v-local-focus--局部注册的指令，用于input的聚焦-->
      <mt-field v-local-focus>localFocus</mt-field>
      <!--全局注册过滤器-->
      <p class="yellow_icon padding_tb50">{{new Date | timeFormat}}</p>
      <mt-button @click="actionConsole">console</mt-button>
      <p class="padding_tb50" v-for="(index) in 30" :key="index">hello + {{index}}</p>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import watchGoBack from '@/js/mixins/watchGoBackForQrCode'
import encryptionRSA from '@/js/mixins/encryption-rsa'
import encryptionMd5 from '@/js/mixins/encryption-md5'
// 在单独构建的版本中辅助函数为 Vuex.mapState、Vuex.mapGetters、Vuex.mutations、Vuex.mapActions
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      name: 'hmk',
      equipmentName: '神话',
      password: 123456,
      idName: 'shenhua'
    }
  },
  mixins: [watchGoBack, encryptionRSA, encryptionMd5],
  filters: {
    // {{}}过滤器
    addNumber (value, param) {
      let turnValue = value + param
      return turnValue
    },
    // v-bind 过滤器
    idFilter (idName) {
      let newIdName = idName + '88'
      return newIdName
    }
  },
  directives: {
    localFocus: {
      inserted: function (el, binding, vNode) {
        el.getElementsByTagName('input')[0].focus()
      }
    }
  },
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    // mapState、mapGetters辅助函数
    ...mapState({
      vuexLoginData: 'loginData',
      vuexCount: 'count'
    }),
    ...mapGetters({
      doneTodo: 'doneTodos',
      doneTodosCount: 'doneTodosCount',
      queryById: 'getTodoById'
    })
  },
  created () {
    let that = this
    /**
     * -------vuex
     * **/
    // --------------------------vuex---state
    // console.log('vuex--loginData', that.vuexLoginData)
    // --------------------------vuex---getters
    // console.log('vuex-getters', that.doneTodo)
    // console.log('vuex-getters-params', that.doneTodosCount)
    // 注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
    // console.log('vuex-getters-queryByParams', that.queryById(1))
    // --------------------------vuex--mutations--mapMutations
    // that.vuexIncrement({
    //   amount: 11
    // })
    // console.log('after mutations---vuexCount', that.vuexCount)
    // --------------------------vuex--mutations--mapActions
    that.vuexActionIncrement()
    // console.log('after actions---vuexCount', that.vuexCount)
    /**
     * mixins混入
     * **/
    // --------------------------混入js--watchGoBackForQrCode.js
    // console.log('mixins-methods-watchGoBackForQrCode', that.specialReload())
    // --------------------------获取data信息
    // console.log('访问根属性data', that.$data)
    // 测试数组赋值问题
    // that.getArryTest()
    /**
     * 数据加密解密
     * **/
      // 公钥
    var PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDtIIgjyT95EpqL/KJ4j+thYR8wYVcW955Pv0bTVgioVJ3G+CYIXUDHcMT+vIaJ/tED/ZvE6XWY7Iv94VQvkzyL+n4Z1hUEmqbqgvREUSDtzMG0k8sl4qNHXQ57X4E03kBIs++6sPQE4oadGO+WV6SILbyT+UTouflNvMh8Qyn/kQIDAQAB'
    // 私钥
    var PRIVATE_KEY = 'MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAO0giCPJP3kSmov8oniP62FhHzBhVxb3nk+/RtNWCKhUncb4JghdQMdwxP68hon+0QP9m8TpdZjsi/3hVC+TPIv6fhnWFQSapuqC9ERRIO3MwbSTyyXio0ddDntfgTTeQEiz77qw9ATihp0Y75ZXpIgtvJP5ROi5+U28yHxDKf+RAgMBAAECgYA1XIjGZNdfy4vzzJpTPy/c7hoyrPUIOhjqIUUy8b1pBAGtcNI+N54IQ5xRJuOv0iP/Hecb3N2V2EV4kGh9fEi3WHaYqW6ZHUeFDP8HeRieZ3IRyPq9lyk6KEzfLPxfxn4TuGUyIaDGOnC31UTj2ZelzkW7A86pjXQuhfj2JWhTAQJBAPhL9HXrxm6pjGOqUoJmyLChsOxPF5QyydKKW/Y+gUGb/7krziejret+BgrzXxVGkP01FUXTjnvNwXAyqpg731kCQQD0e91NtGmAD+9v1HSeDYr3mFIPjkWuWNw4q9j5RdAZYYV7en1BZmwEUEZog3PDCQ8uG29ClbY9YFFQIqCbVZL5AkBeiMyyeOo8B+GjsJ1peKjAV099KT/Y9N1Sg8svneyohjR+0+bRwMfe+URjtvVkrFFXlnZa94kwKc6UYTYCcAlBAkBUOQuPBlTF4jd5DfaysDWsgBPc+gU1P7V17HWNwigjZj4mwJa/3fneLo1i2c4aZVeOabMVfB/Q2wqIEbXEbWF5AkEA6SOl85LyGZln2WRFm5kOlWsrjvD5Jkvwo7VoYE0vs9GFMqhND16ACeKXi1LHDr3r3Ak/FB+hXQIdIbitRvynrA=='
    // 加密
    let encryptName = that.mixinEncryptedData(PUBLIC_KEY, 'data')
    // console.log('encryptName', encryptName)
    // 解密
    let decryptName = that.mixinDecryptData(PRIVATE_KEY, encryptName)
    console.log('decryptName', decryptName)
    // md5加密
    // console.log('md5加密--拼接无意义字符串防止破解', that.mixinEncryptedDataMd5('name'))
  },
  methods: {
    // node+express接口获取的数组赋值测试
    getArryTest () {
      let that = this
      // --------------------------全局注册api接口
      that.$ApiService.portalLogin()
        .then(res => {
          // that.testArry = [...res.data]
          that.testArry = res.data
          // 不使用深度复制时，接受的数组改变时，会直接改变res.data的数组
          that.testArry.push('wangwu')
          // console.log('getArryTest', res.data)
        })
    },
    actionConsole () {
      let that = this
      console.log(that.$lodash.random(100))
      console.log(that.$lodash.debounce(100))
      // that.$lodash.debounce(that.btnClick())
    },
    // mapMutations、mapActions辅助函数
    ...mapMutations({
      vuexIncrement: 'increment'
    }),
    ...mapActions({
      vuexActionIncrement: 'actionIncrement'
    })
  }
}
</script>

<style lang="less" scoped>
.main {
  .title {
    font-size: 1.5rem;
  }
}
</style>
