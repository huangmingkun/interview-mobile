let num: number = 1 // Nan、123、Infinity、二、八、十、十六进制、
let str: string = 'hmk'
let bool: boolean = true
let sympol: symbol = Symbol('123')
let obj: object = [11, 22]
let n:null = null
let u:undefined = undefined
let v:void = null // 严格模式下，不可以赋值为null
let v1: void = undefined

function func1():void {
    // void 没有返回值，或者返回值为undefined
    return undefined
}

function func2():Array<string | number> {
    return [1]
}

console.log(obj);
