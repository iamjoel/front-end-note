# JavaScript 之 this
在 JavaScript 中，this 的值是动态的，一个函数中在不同的情况下被调用，this 的值可能是不同的。

## 全局的 this
在浏览器中，全局的 this 就是 window。
```
this === window; // true
```

## this 在函数中的值
JavaScript 中函数的被调用主要有几种方式：
* 作为对象的方法
* 作为函数
* 作为构造函数
* 使用 apply 或 call

不同的调用方式，this 的值是不同的。除此之外，`bind` 也会改变 this 的值。

下面就具体解释下 this 在函数中的值。

### 作为对象的方法
作为对象的方法时，this 为对象。

```
var obj = {
  name: 'obj',
  describe: function(){
    return 'I am a ' + this.name;
  }
};
obj.describe(); // 'I am a obj'
```

### 作为函数
作为函数时，this 为 window（在浏览器中）。

```
function foo(){
  return this === window;
}
foo(); // true

var obj = {
  name: 'obj',
  describe: function(){
    return 'I am a ' + this.name;
  }
};
window.name = 'window';
var bar = obj.describe;
bar(); // 'I am a window'

```

### 使用 apply 或 call
使用 apply 或 call，this 为 apply 或 call 传入的第一个参数。

```
function foo(){
  return this.name;
}
var obj = {name: 'obj'};
foo.apply(obj); // 'obj'
foo.call(obj); // 'obj'
```

### 作为构造函数
作为构造函数, this 会指向构造函数的原型对象。

```
function MyClass(){
  console.log(this.name);
}

MyClass.prototype = {
  name: 'My class'
};

var obj = new MyClass(); // 控制台输出 'My class'

```

### 使用 bind
使用 bind，this 为 bind 的第一个参数。

```
function foo(){
  return this.name;
}

var bar = foo.bind({name: 'bar'});
bar(); // 'bar'
```


## 参考
* [JavaScript 之 this 详解](http://www.jeffjade.com/2015/08/03/2015-08-03-javascript-this/)
* [ES6 箭头函数中的 this？你可能想多了（翻译）](http://www.cnblogs.com/vajoy/p/4902935.html)


