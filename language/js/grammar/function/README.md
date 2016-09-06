# 函数
函数就是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。

## 函数定义/声明
```
function 函数名(参数1, 参数2, ...){
  
}
```

如
```
function add(a, b){
  return a + b;
}

## 函数表达式
将函数赋给一个变量，叫做函数表达式。如
```
var addFn = function(a, b){
  return a + b;
}
```

## 调用函数
```
函数名(参数1, 参数2, ...);
```

## 函数的返回值
`return 表达式;` 为函数的返回值。如果写 return。 函数的返回值为 undefined。注意在函数中 `return 表达式;`，后面的语句不会被执行。

## arguments对象
arguments对象包含了函数运行时的所有参数，arguments[0]就是第一个参数，arguments[1]就是第二个参数，以此类推。这个对象只有在函数体内部，才可以使用。如：
```
var f = function(one) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

f(1, 2, 3)
// 1
// 2
// 3
```
