
/**
 * 声明数组类型
 * 1、number[]、string[]、Person[] --- interface + []
 * 2、Array<number>、Array<string>、Array<Obj> --- interface + Array
 * 3、多类型时， any[]   eg: [123, 'hmk', true]
 * 4、二维数组： eg：number[][] or Array<Array<number>>
 * 5、元组形式：eg：[number, string, boolean]
* */

// let arr:number[] = [2]

interface Per {
  name: string,
  age?: number
}
let arr:Array<Per> = [
  {
    name: 'hmk'
  },
  {
    name: '张三',
    age: 18
  }
]

console.log(arr)

// arguments变量声明： IArguments 与 A接口声明是等价的
interface A {
  callee: Function,
  length: number,
  [key: number]: any
}

// function f (...args: [number, string, boolean]): void {
function f (...args: any[]) {
  console.log(args)
  let a: IArguments = arguments
  // let a: A = arguments
  console.log('a=====', a)
}
f(1, '1', true)
