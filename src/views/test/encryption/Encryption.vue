<template>
  <div style="text-align: center">
    <p style="text-align: center;font-weight: bold;font-size: 30px;padding: 15px">
      加密解密
    </p>
    <input style="margin-left: 100px;display: block;margin-bottom: 30px" v-model="inputVal">
    <mt-button @click="encryptionTest">加密测试</mt-button>
    <p
      style="padding: 15px;word-break: break-all"
      v-html="inputVal">
    </p>
    <p
      style="padding: 15px;word-break: break-all"
      v-html="encryptedResault">
    </p>
  </div>
</template>

<script>
import { rsaEncryptedData, rsaDecryptData } from '../../../js/mixins/encryption-rsa'
import { md5EncryptedData } from '../../../js/mixins/encryption-md5'
export default {
  name: 'Encryption',
  data () {
    return {
      inputVal: '',
      encryptedResault: ''
    }
  },
  mounted () {
    const that = this
    console.log(3 + 4 + '1')
    // rsa加密解密
    that.rsaEncryption()
    // md5加密解密
    // that.md5Encryption()
  },
  methods: {
    encryptionTest () {
      console.log('---------')
      const that = this
      // rsa加密解密
      that.rsaEncryption()
    },
    rsaEncryption () {
      const that = this
      // 源数据限制长度为117，超过117长度的数据需要分段加密
      let tempData = null
      tempData = this.inputVal
      // tempData = null
      // tempData = 'hmk1234567hmk1234567hmk1234567hmk1234567hmk1234567hmk1234567hmk1234567hmk1234567hmk1234567hmk1234567hmk1234567hmk1234黄'
      // tempData = ['log', 'history', 'history', 'history', 'history', 'history', 'history', 'history', 'history', 'history', 'history', 'history', 'history', 'history', 'history', 'history', 'history', 'history', 'history', 'history']
      // console.log('加密前的数据', tempData)
      that.encryptedResault = rsaEncryptedData(tempData)
      console.log('加密后的数据', that.encryptedResault)
      let decryptResault = rsaDecryptData(that.encryptedResault)
      console.log('解密后的数据', decryptResault)
    },
    md5Encryption () {
      // // md5加密
      // console.log('md5加密--拼接无意义字符串防止破解')
      let md5Resault = md5EncryptedData('hmk123')
      console.log('md5Resault', md5Resault)
    }
  }
}
</script>

<style scoped>

</style>
