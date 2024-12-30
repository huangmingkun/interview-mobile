
/**
 * 字符串中出现次数最多的字母
 * input:word
 * output: string
**/

function sum (word) {
  const wordArr = word.split('')
  const len = wordArr.length
  let map = new Map()

  for(let i = 0; i < len; i++) {
    let val = map.get(word[i])
    let temp = val ? ++val : 1
    map.set(word[i], temp)
  }

  return [...map]
  .sort((a,b) => b[1] - a[1])
    .shift()[0]

}

console.log(sum('dddjjkkkkk'))

