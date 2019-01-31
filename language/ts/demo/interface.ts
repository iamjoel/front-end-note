interface Person {
  name: string
  age: number
  des?: string
  [propName: string]: any
}

var tom: Person = {
  name: 'Tom',
  age: 20
}

var jack: Person = {
  name: 'Jack',
  age: 18,
  des: 'My name is Jack',
  other: 'xxx'
}