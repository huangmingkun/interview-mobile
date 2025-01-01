
let err: Error = new Error('错误')
let date: Date = new Date()

// HTML(元素名称)Element
let dom: HTMLDivElement | null = document.querySelector('div')
let dom1: HTMLInputElement | null = document.querySelector('input')

let doms:NodeList = document.querySelectorAll('div')
let doms1:NodeListOf<HTMLDivElement> = document.querySelectorAll('div')

let local: Storage = localStorage
let cookie: string = document.cookie
let lo:Location = location

let promise:Promise<string | number> = new Promise(
  (r, j) => r(1)
)
  promise
    .then(res => res.toString)
