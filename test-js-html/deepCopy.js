
function deepCopy(obj, copied = new WeakMap()) {

  if (!obj || typeof obj !== 'object') {
    return obj
  }

  if (copied.has(obj)) {
    return copied[obj]
  }

  const temp = Array.isArray(obj) ? [] : {};
  copied.set(obj, temp)

  for(const key in obj) {
    if(obj.hasOwnProperty(key)) {
      temp[key] = deepCopy(obj[key], copied)
    }
  }

  return temp
}


const testArr = {
  name: 'hmk',
  arr: {
    price: 20,
    age: 18,
    place: 'guangdong'
  },
  func: () => {}
}

// const copyResult = deepCopy(testArr)
// console.log('copyResult', copyResult)
// console.log('copyResult', copyResult === testArr)

console.log('JSON.parse stringify', JSON.parse(JSON.stringify(testArr)))

// const a = { val: 1 };
// const b = { val: 2, ref: a };
// a.ref = b;
// console.log('a', a)
// console.log('b', b)
// const copiedObject = deepCopy(a);
// console.log(copiedObject.ref === copiedObject);
