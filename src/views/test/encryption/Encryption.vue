<template>
  <div>
    <h1>加密解密</h1>
  </div>
</template>

<script>
import encryptionRsa from '../../../js/mixins/encryption-rsa'
import encryptionMd5 from '../../../js/mixins/encryption-md5'
export default {
  name: 'Encryption',
  mixins: [ encryptionRsa, encryptionMd5 ],
  mounted () {
    console.log('指向组件的实例', this)
    console.log('指向当前组件的DOM元素', this.$el)
    const that = this
    // rsa加密解密
    that.rsaEncryption()
    // md5加密解密
    that.md5Encryption()
  },
  methods: {
    rsaEncryption () {
      const that = this
      // 公钥
      let PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8HMr2CBpoZPm3t9tCVlrKtTmI4jNJc7/HhxjIEiDjC8czP4PV+44LjXvLYcSV0fwi6nE4LH2c5PBPEnPfqp0g8TZeX+bYGvd70cXee9d8wHgBqi4k0J0X33c0ZnW7JruftPyvJo9OelYSofBXQTcwI+3uIl/YvrgQRv6A5mW01QIDAQAB'
      // 私钥
      let PRIVATE_KEY = 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBALwcyvYIGmhk+be320JWWsq1OYjiM0lzv8eHGMgSIOMLxzM/g9X7jguNe8thxJXR/CLqcTgsfZzk8E8Sc9+qnSDxNl5f5tga93vRxd5713zAeAGqLiTQnRffdzRmdbsmu5+0/K8mj056VhKh8FdBNzAj7e4iX9i+uBBG/oDmZbTVAgMBAAECgYEAmgNU5NTDkj9B+Pnt6UU8doSjw3+3j+bV2K2yS3QUOvAUus/Ax7x6ktjWxzCXvDY9IfUil2RNv9vtKEAqYLCWjc+lf8PV/yH1b7NEgyeAPBXtAJRoOnmYL2bdPW92kP9KgxJruF6Dz/C5AmMOncsvq8ABD+9Darn4p8dwj2ZC4O0CQQDf/AHmZsQokEItfCy4mHS9UbxbfIhEUv1ApPh/+Sr7NkJkHWYCtBQo+8jKO6zurAZQgWBPD1XX2UE4R+VIiZazAkEA1wAqtMvGhccyRZr+6kpkpDIa8+9jOE+nGUzqTDvgCID6as8AzOONFVVK6m/UUqkhcJ8Qu1pF36BGojy5BX2KVwJBAJSFpbji0hXXupowqfLp3RcgmNbNWAp+QUJZYhJx5cdYbmO2fssyH+AhPT6knYJR/YnqkDM8hv6vKCkqu2YDHjMCQAOA8TE5EOclM+CGghj3VWSHnIDVKdzFD4gOBNNxNlltIKeU8AJmwunSFgJ0CBXAw9a+ANvMwM7AIeaK7sj0HskCQAvxfDCq7gaNx+pfu0FHG8Gix08A/A6foggBl1fVu+L9sr9ZuOQ3HbXnl28F9ewuB9xdjnLUDjp7W7U0pB+vKoQ='
      let encryptedResault = that.mixinEncryptedData(PUBLIC_KEY, 'hmk123456')
      console.log('加密后的数据', encryptedResault)
      let decryptResault = that.mixinDecryptData(PRIVATE_KEY, encryptedResault)
      console.log('解密后的数据', decryptResault)
      // // 加密
      // let encryptName = that.mixinEncryptedData(PUBLIC_KEY, 'data')
      // console.log('encryptName', encryptName)
      // // 解密
      // let decryptName = that.mixinDecryptData(PRIVATE_KEY, encryptName)
      // console.log('decryptName', decryptName)
      // // md5加密
      // console.log('md5加密--拼接无意义字符串防止破解', that.mixinEncryptedDataMd5('name'))
    },
    md5Encryption () {
      const that = this
      let md5Resault = that.mixinEncryptedDataMd5('hmk123')
      console.log('md5Resault', md5Resault)
    }
  }
}
</script>

<style scoped>

</style>
