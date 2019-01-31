{
  let name: string = 'Tom'
  let age: number = 3
  // age = '3 years old' 会因类型不匹配而报错。
  let isBoy :boolean = true
  let intro: string = `Hello, my name is ${name}.
  I'll be ${age + 1} years old next month.`

  let res: any = 'abc' // any 表示任意类型
  res = 3434

  // 用 void 表示没有任何返回值的函数
  function doSth() : void {
    
  }
}


