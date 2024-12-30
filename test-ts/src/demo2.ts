
// 大写Object 可以赋值任意类型的值
let o: Object = 1
let o1: Object = 'hmk'
let o2: Object = true
let o3: Object = () => 111
let o4: Object = Symbol(33)
let o5: Object = {}
let o6: Object = []
console.log(o);


// 小写object 可以赋值引用类型的值
// let a1: object = 1 // 错误 
// let a2: object = '1' // 错误 
// let a3: object = true // 错误 
let a4: object = [] // 正确 
let a5: object = {} // 正确 
let a6: object = () => 123 // 正确 函数也是一个对象？

// 虽然函数是对象，但由于 a6 的类型是 object，只能访问 object 类型支持的属性和方法，不能直接调用该函数
// a6() // 直接调用会报错

let a7: Function = () => 123
let a8: () => (number | string) = () => '11'


let b: {} = {name: 'hmk'}
// b.age = 18  报错 无发进行赋值
// b.name = 11 报错 无发进行赋值


