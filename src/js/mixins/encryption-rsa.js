import JSEncrypt from 'jsencrypt'
export default {
  methods: {
    //  加密--需要从后台获取publicKey公钥--公钥与私钥是配对的
    mixinEncryptedData (publicKey, data) {
      // console.log('publicKey, data', publicKey, data)
      // 新建JSEncrypt对象
      let encryptor = new JSEncrypt()
      // 设置公钥
      encryptor.setPublicKey('-----BEGIN PUBLIC KEY-----' + publicKey + '-----END PUBLIC KEY-----')
      // 加密数据
      return encryptor.encrypt(data)
    },
    // 解密--需要从后台获取publicKey公钥--公钥与私钥是配对的
    mixinDecryptData (privateKey, data) {
      // 新建JSEncrypt对象
      let decrypt = new JSEncrypt()
      // 设置私钥
      decrypt.setPrivateKey('-----BEGIN RSA PRIVATE KEY-----' + privateKey + '-----END RSA PRIVATE KEY-----')
      // 解密数据
      return decrypt.decrypt(data)
    }
  }
}
