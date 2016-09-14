# 箭头函数
箭头函数：用箭头(=>)来定义函数。

通过使用箭头函数，可以在不影响代码可读性的情况下，少写代码。如:
```
(x, y) => {
	console.log(x, y);
	return x + y;
}

() => Math.random();
```

等效于
```
function(x, y){
	console.log(x, y);
	return x + y;
}

function(){
	return Math.random();
}
```

## 用法
* () => ... // 函数值内容只要一行，可省略 {}
* () => { ... } // 零个参数用 () 表示；
* x => { ... } // 一个参数可以省略 ()；
* (x, y) => { ... } // 多参数不能省略 ()

## 注意点
* 函数体中, arguments不可用
* 箭头函数中的this外侧函数的this


## 参考
* [深入浅出ES6（七）：箭头函数 Arrow Functions](http://www.infoq.com/cn/articles/es6-in-depth-arrow-functions)
* [【翻译】解读ECMAScript 6箭头函数](http://www.75team.com/archives/504)