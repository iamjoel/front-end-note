# 错误处理机制
## try...catch
用 `try...catch` 来捕获处理错误。写法
```
try{
  // 一些语句
} catch(e){
  // 处理在 try 中的代码抛出的错误
}
```

如
```
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    console.log(e.name + ": " + e.message);
  } else if (e instanceof RangeError) {
    console.log(e.name + ": " + e.message);
  }
  // ...
}
```

需要注意的是，
* try 中抛出错误后面的代码不会被执行。
* 在 try 中的异步语句中产生的错误，并不会被 catch 捕获。

## 主动抛出错误
用 `throw new Error(错误信息);`

## finally
`try...catch` 结构允许在最后添加一个 `finally` 代码块，表示不管是否出现错误，都必需在最后运行的语句。

如
```
try {
  throw new Error('出错了……');
  console.log('此行不会执行');
} finally {
  console.log('完成清理工作');
}
```

## JavaScript 的原生错误类型
Error对象是最一般的错误类型，在它的基础上，JavaScript还定义了其他6种错误。如下
* SyntaxError 解析代码时发生的语法错误。
* ReferenceError 引用一个不存在的变量时发生的错误。
* RangeError 当一个值超出有效范围时发生的错误。主要有几种情况，一是数组长度为负数，二是Number对象的方法参数超出范围，以及函数堆栈超过最大值。
* TypeError 变量或参数不是预期类型时发生的错误。比如，对字符串、布尔值、数值等原始类型的值使用new命令，就会抛出这种错误，因为new命令的参数应该是一个构造函数。
* URIError 是URI相关函数的参数不正确时抛出的错误，主要涉及encodeURI()、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()和unescape()这六个函数。
* EvalError eval函数没有被正确执行时，会抛出EvalError错误。该错误类型已经不再在ES5中出现了，只是为了保证与以前代码兼容，才继续保留。

## 自定义错误
自定义错误只要继承 Error 对象。如
```
function UserError(message) {
   this.message = message || "默认信息";
   this.name = "UserError";
}

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;
```

