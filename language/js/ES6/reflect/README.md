# Reflect
Reflect对象，ES6新增的内置对象。

在各种编程语言中，基本都有反射机制，可让用户的代码高度灵活化，主要功能就是让程序不用预先知道需要怎么去做，在执行的过程中去根据条件去执行。虽然 ES6 之前， JavaScript 不直接支持反射，但可以通过各种判断逻辑去支持反射了。如：
```
var fn  = Reflect.has(obj, 'methodName')?Reflect.get(obj, 'methodName'):Reflect.get(self, 'defaultMethod');
fn.call();
```

不用反射也可以实现
```
var fn = obj.hasOwnProperty('methodName') ? obj['methodName']:obj['defaultMethod'];
fn.call();
```

## 拓展阅读
* [ES6 Reflection in Depth](https://ponyfoo.com/articles/es6-reflection-in-depth)
