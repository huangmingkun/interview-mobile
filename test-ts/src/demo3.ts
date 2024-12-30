/**
 * interface
 * 1、重名的interface会发生合并操作
 * 2、任意key [key: string]: any
 * 3、？：可选值  readonly：只读不允许修改
 * 4、接口继承 extends  继承别的接口的字段
 * 5、定义函数类型
 */

interface Person {
    name: string,
    age: number,
    readonly id: number,
    readonly cb?: () => 123 // readonly不允许用户去修改此值
    [key: string]: any // 索引签名
}

interface Person {
    place?: string // 非必须，但存在时要满足规则
}

let person: Person = {
    name: 'hmk',
    id: 23984834,
    age: 18,
    place: '广东'
}

person.name = '11'
person = {id: 2345456, name: '1', age: 1}

interface Func {
    // (name: string): number[],
    (name?: string): Array<number>
}

let func: Func = (name?: string) => {
    return [1, 2]
}

console.log(func('1'));
