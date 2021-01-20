import JSEncrypt from 'jsencrypt'
import { Base64 } from 'js-base64'
import { RSA_KEYS } from '@/js/config/global-config'
// 新建JSEncrypt对象
let encryptor = new JSEncrypt()
// 设置公钥或者私钥
function setKeyMethod (customKey, type) {
  let finalKey = ''
  switch (type) {
    // 公钥设置key
    case 'public':
      //  加密--需要publicKey公钥--公钥与私钥是配对的
      finalKey = customKey || RSA_KEYS.publicKey
      // 设置公钥
      encryptor.setPublicKey('-----BEGIN PUBLIC KEY-----' + finalKey + '-----END PUBLIC KEY-----')
      break
    // 私钥设置key
    case 'private':
      // 解密--需要获取privateKey私钥--公钥与私钥是配对的
      finalKey = customKey || RSA_KEYS.privateKey
      // 设置私钥
      encryptor.setPrivateKey('-----BEGIN PUBLIC KEY-----' + finalKey + '-----END PUBLIC KEY-----')
      break
  }
}
// 验证加密/解密数据是否符合规则
function isValidateDataFlag (data, type) {
  switch (type) {
    case 'public':
      if (!data) {
        console.log('加密数据不能为空！！！')
        return false
      }
      if (data.length > 500) {
        console.log('需要加密的数据过长！！！')
        return false
      }
      break
    case 'private':
      if (!data) {
        console.log('解密数据不能为空！！！')
        return false
      }
      break
  }
  return true
}
// 判断是否需要进行分段加密
function subsectionEncryption (datas, encryptedArray, maxLength) {
  let encryptedItemData = ''
  // 需要加密数据的长度
  let dataLength = datas.length
  // rsa 加密字符长度限制为1-117或者1-128（根据公钥私钥决定）
  // 超过长度时，需要对源数据进行分段加密后再拼接
  let maxEncryptyionLength = maxLength || 117
  // 源数据长度超过rsa规定值时，将数据分段加密
  if (dataLength > maxEncryptyionLength) {
    // 分段加密
    // 源数据长度超过rsa加密长度限制，因此需要进行分段加密
    for (let i = 0; i < dataLength; i = i + maxEncryptyionLength) {
      if (dataLength > i + maxEncryptyionLength) {
        encryptedItemData = encryptor.encrypt(datas.slice(i, i + maxEncryptyionLength))
      } else {
        encryptedItemData = encryptor.encrypt(datas.slice(i))
      }
      encryptedArray.push(encryptedItemData)
    }
  } else {
    // 源数据长度不超过rsa加密长度限制，正常进行加密
    encryptedItemData = encryptor.encrypt(datas)
    encryptedArray.push(encryptedItemData)
  }
}
// 加密--获取publicKey公钥--公钥与私钥是配对的
export function rsaEncryptedData (data, publicKey, maxLength) {
  try {
    // 加密源数据为非字符串和非数字时，需要转为字符串
    if (data && typeof data !== 'string' && typeof data !== 'number') {
      data = JSON.stringify(data)
    }
    // 验证数据不能为空；且数据长度不能太长
    if (!isValidateDataFlag(data, 'public')) return null
    // 设置公钥
    setKeyMethod(publicKey, 'public')
    // 中文直接加密时，会出现加密错误的问题，用Base64转换后加密即可适配中文加密
    let datas = Base64.encode(data)
    // 加密后，数据存放到数组里面
    let encryptedArray = []
    // 判断是否需要分段加密
    subsectionEncryption(datas, encryptedArray, maxLength)
    // console.log('加密后数据的数组', encryptedArray)
    return encryptedArray
  } catch (err) {
    console.log(err)
  }
}
// 解密--获取私钥钥--公钥与私钥是配对的
export function rsaDecryptData (data, privateKey) {
  try {
    // 验证数据不能为空
    if (!isValidateDataFlag(data, 'private')) return null
    // 设置私钥
    setKeyMethod(privateKey, 'private')
    let totalStr = ''
    // 拼接分段解密的数据
    for (let i in data) {
      totalStr += encryptor.decrypt(data[i])
    }
    // 解密数据
    return Base64.decode(totalStr)
  } catch (err) {
    console.log(err)
  }
}
