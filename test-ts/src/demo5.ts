/**
 * ts：函数式声明
 * 1、参数声明类型使用 : + 对应类型， 函数返回值使用 : + 对应类型
 * 2、设置默认值 add(a:number = 10, b:number = 20)
 * 3、可选参数 add(a:number = 10, b?:number)  注意：设置可惜参数，则不能使用默认赋值
 * 4、函数的参数是一个对象怎么定义类型？使用interface
 * 5、函数this类型  ts特有的，js没有
 * 6、函数作为参数
 * 7、函数重载
 * */

// 普通函数声明类型
function add(a:number = 10, b:number = 20): number {
  return a + b
}

console.log(add());

// 箭头函数声明类型
let add1 = (a:number, b:number): number => a + b
add1(5, 6)


// 4、通过接口声明类型
interface Obj {
  name: string,
  place: string
}
function add2(obj: Obj): void {

}
add2({name: 'hmk', place: '广东'})

// 5、 函数this类型   ts特有的this增强，js没有
interface Ob {
  nums: number[],
  add: (this: Ob, n: number) => void
}
let object: Ob = {
  nums: [1, 2, 3],
  add(this: Ob, n: number) {
    this.nums.push(n)
  }
}

object.add(6)
console.log(object.nums)

/**
 *  6、函数作为参数
 */
// interface C {
//   (a: number, b: number): number
// }
type C = (a: number, b: number) => number
function operate(x: number, y: number, callback: C): number {
  return callback(x, y);
}

operate(10, 5, (a, b) => a - b); // 5


// 7、函数重载
let user = [2, 4, 5, 6]
function findNum(): number[]
function findNum(addArr: number[]): number[]
function findNum(id: number): number[]

function findNum(ids?: number | number[]): number[] {
  if(typeof ids === 'number') {
    return user.filter(item => item === ids)
  } else if(Array.isArray(ids)) {
    user.push(...ids)
    return user
  } else {
    return user
  }
}

console.log('函数重载', findNum([3, 9]));

