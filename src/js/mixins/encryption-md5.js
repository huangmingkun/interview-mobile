import globalConfig_ from '@/js/config/global-config'
import md5 from 'js-md5' // md5加密
// md5加密--设置固定拼接“无意义”字符串，防止破解
let noMeanStr = md5(globalConfig_.encryptionRules)
export default {
  methods: {
    //  加密--拼接无意义字符串防止破解
    mixinEncryptedDataMd5 (data) {
      let joinDataStr = md5(noMeanStr + data)
      let md5Name = md5(joinDataStr)
      return md5Name
    }
    // md5不存在解密--需要后台用同样规则来加密数据，然后进行比对
  }
}
