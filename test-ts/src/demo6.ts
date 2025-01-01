
/**
 * 1、联合类型 |
 * */
let phone: number | string = 132455458546
phone = '0766-7325468'

/**
 * 交叉类型 &
 * */
export interface Person {
  name: string
}
export interface Student {
  class: number
}
function func1(params: Person & Student):void {
  console.log('params', params)
}

func1({name: 'hmk', class: 18});

/**
 * 断言 as
 * */
(window as any).aa = 123
