# 正则表达式好难学!8个易懂的例子，轻松入门JavaScript正则
正则表达式是一个用来描述字符模式的对象。它被用来在文本中执行模式匹配(pattern-matching)以及”查找-替换”(search-and-replace)的任务。

前端开发中，我们会在这些地方看到正则：
* 验证手机号是否合法。
* 页面输出接口给的HTML时，为了防止XSS，用正则将存在安全隐患的字符串替换或删除。
* 前端工程中，对指定类型文件的处理。用正则去匹配文件名。比如，压缩所有js文件，将sass转化成css。

正则表达式给人的感觉：很难读懂，也难写。比如谁知道这个正则: `/<\/?[a-zA-Z]+(\s+[a-zA-Z]+=".*")*>/g`是干嘛的么~

## 为什么要学习正则？
文本中，做一些复杂点的查找替换操作，用正则比用字符串的api容易的多，代码量也少的多。比如，验证手机号是否合法。我们假定，合法的手机号指：以1开头的11位数字。

用字符串的api，这么写：
```js
function validPhone(phone) {
  let isValid = false
  phone += ''
  if (phone.length === 11 && phone[0] === '1' && !isNaN(phone)) {
    isValid = true
  }
  return isValid
}
```

用正则，这么写：
```js
function validPhone(phone) {
  return /^1\d{10}$/.test(phone)
}
```

## 例子
学习正则表达式的最好方法是从例子开始，理解例子之后再自己对例子进行修改。下面，我们就开始吧~

### 例子1: 精确匹配
查找文本中是否有单词"cat"。代码实现如下:
```
/cat/.test('I have a cat.') // 返回true
/cat/.test('I have a dog.') // 返回 false
```

上面的代码中，`/cat/` 创建了一个匹配 cat 的正则。有两种方式创建正则对象：
1. `/匹配模式/`。 如 `/cat/`。
2. `new RegExp(匹配模式字符串)`。 如 `new RegExp('cat')`。

这两种方式的不同点在于，方式2支持传入变量。

`.test` 是正则对象上的方法，用来检索字符串中指定的值。返回 true 或 false。还有一个常见的正则方法 exec，用来检索字符串中指定的值。




### 例子2: 匹配数字，字符串，空格等元字符


### 例子3: 匹配重复字符

### 例子4: 匹配开始和结束

### 例子5: 匹配多种情况

### 例子6: 标志的使用

### 例子7: 匹配数量：贪婪和懒惰

### 例子8: 文本替换
将文本中单词"cat"替换成"dog"。代码实现如下:
```js
'I have a cat.'.replace(/cat/, 'dog') // 运行结果 I have a dog.
```

将文本中所有的单词"cat"替换成"dog"。代码实现如下:
```js
'cat,cat,cat'.replace(/cat/g, 'dog') // 运行结果 dog,dog,dog
```

将第2个出现的"cat"替换成"dog"。代码实现如下:
```js
let appearNum = 0
let res = 'cat,cat,cat'.replace(/cat/g, (matched) => {
  appearNum++
  if(appearNum === 2) {
    return 'dog'
  } else {
    return matched
  }
})
console.log(res) // 运行结果 cat,dog,cat
```

## 工具





