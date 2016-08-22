# [JavaScript Standard Style](http://standardjs.com/rules.html#javascript-standard-style)
## 规则
* 代码缩进用 2 个空格
* 字符串用单引号
* 没有不使用的变量
* 关键字后面要加空格。关键字如 `if`，`while` 等等。
* 函数声明的圆括号前后要加空格。
* 使用 `===` 和 `!==`
* 赋值运算(=) 前后要加空格。
* 逗号后面要加空格。
* else 表达式要和`}`，`{`在一行。 如
```
if (condition) {
  // ...
} else {
  // ...
}
```
* 多行的`if`语句，要用 `{}`
* 如果回调函数中有 err 参数，需要处理 err
* 全局变量或函数，要加 windows 前缀。如 `window.alert`。
* 不允许多行空白行
* 对于三元表达式(`? : `)，可以写在 1 行。如果是多行，`?` 和 `:` 在行首。如
```
var location = env.development ? 'localhost' : 'www.api.com'

var location = env.development
  ? 'localhost'
  : 'www.api.com'
```
* 用 var 定义变量，一个 var 定义一个变量
* 在 `if` 和 `while` 的条件语句中，不要用赋值语句
* 删除不必要的 `;`。浏览器在很多情况下会自动补 `;`。具体见[这里](http://inimino.org/~inimino/blog/javascript_semicolons)。语句结尾不需要`;`。
* 不要用 `(`, `[` , ```, `+`， `-`, `*`, '/'等操作符做为一行代码的开头。如
```
;(function () {
  window.alert('ok')
}())
;[1, 2, 3].forEach(bar)
;`hello`.indexOf('o')
```


