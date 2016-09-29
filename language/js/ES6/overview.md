# ES6 概览
## 匿名函数调用
ES5

```
(function(){
  //dosth
})()
```

ES6

```
{
  //dosth
}
```

## [箭头函数](http://www.infoq.com/cn/articles/es6-in-depth-arrow-functions)
### 将数组的内容 * 2
ES5

```
[1, 2, 3].map(function(each){
  return each * 2;
});
```

ES6

```
[1, 2, 3].map(each=> each * 2);
// 或
[1, 2, 3].map((each)=> each * 2);
// 或
[1, 2, 3].map((each) => {
    return each * 2;
});

```

## [默认参数](http://www.infoq.com/cn/articles/es6-in-depth-rest-parameters-and-defaults)
ES5

```
var introSomeBody = fuction(name){
  name = name || 'Jack';
}
```

ES6

```
var introSomeBody = (name = 'Jack') => {
}
```

## [不定参数](http://www.infoq.com/cn/articles/es6-in-depth-rest-parameters-and-defaults)
### 数字求和
ES5

```
var sumFn = function(){
  var nums = [].slice.call(arguments);
  var sum = nums.reduce(function(prev, curr){
    return prev + curr;
  }, 0);
  return sum;
}
```

ES6

```
var sumFn = (...nums) => {
  return nums.reduce((prev, curr)=>{
    return prev + curr;
  }, 0);
}
```

## [展开运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator)
### 数组和字符串的展开
ES5

```
var a1 = [1, 2]
var a2 = [0].concat(a1).concat(3)
doSth('abc'.split())
function doSth(x, y, z){}
```


ES6

```
var a1 = [1, 2]
var a2 = [0, ...a1, 3]
doSth(...'abc')
function doSth(x, y, z){}
```

## [解构(Destructuring)赋值](http://www.infoq.com/cn/articles/es6-in-depth-destructuring)
### 交换两个变量的值
ES5

```
var temp = a;
a = b;
b = a;
```

ES6

```
[a, b] = [b, a]
```

### 参数赋值
ES5

```
var introSomeBody = fuction(options){
  var name = options.name || 'Jack';
  var age = options.age || 18;
  console.log('I am %s, I am %d years old', name, age);
}
```

ES6

```
var introSomeBody = ({name = "Jack", age = 18}) => {
  console.log('I am %s, I am %d years old', name, age);
}
```

### [模板字符串](http://www.infoq.com/cn/articles/es6-in-depth-template-string)
#### 拼多行字符串
ES5

```
var data = {
    name: '新闻',
    news: {
        name: 'Bable升级到6啦',
        content: 'Bable在某年某月升级到6啦，哈哈哈'
    }
};
var html = (
'<div class="box">' +
  '<h2 class="box-header">${name}</h2>' +
  '<div class="box-body">' +
    '<h3>${newsName}<h3>' +
    '<div>${newsContent}</div>' +
  '</div>' +
'</div>').replace('${name}', data.name)
    .replace('${newsName}', data.news.name)
    .replace('${newsContent}', data.news.content);
```

ES6

```
var data = {
    name: '新闻',
    news: {
        name: 'Bable升级到6啦',
        content: 'Bable在某年某月升级到6啦，哈哈哈'
    }
};
var html = `
<div class="box">
  <h2 class="box-header">${data.name}</h2>
  <div class="box-body">
     <h3>${data.news.name}<h3>
     <div>${data.news.content}</div>
  </div>
</div>
`;
```

想了解更多 ES6 相关知识，请阅读
* [ECMAScript 6入门](http://es6.ruanyifeng.com/) 阮一峰老师写的。
* [深入浅出 ES6 的中文版](http://www.infoq.com/cn/es6-in-depth/) [原文](https://hacks.mozilla.org/category/es6-in-depth/)。
* [ES6 Katas](http://es6katas.org/) 通过写ES6的代码来学习ES6。修复失败的测试来学习这些知识。
