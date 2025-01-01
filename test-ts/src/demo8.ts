type Param = 'aa' | 'bb' | 'cc' | 'dd'

function getVal(param: Param) {
  switch (param) {
    case "aa":
      break
    case "bb":
      break
    case "cc":
      break
    default:
      // 兜底逻辑。捕捉错误 --- param增加了'dd'时，则会报错，提示用户需要在case模块增加对应的判断
      const error: never = param
  }
}
