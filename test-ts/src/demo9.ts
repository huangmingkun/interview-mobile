

export interface Obj {
  name: string,
  age?: number
}

let obj: Obj = {
  name: 'hmk',
  age: 18
}

function getValueByKey<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

console.log(getValueByKey(obj, 'name'));
