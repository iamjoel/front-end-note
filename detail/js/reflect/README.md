# Reflect
Reflect对象，ES6新的内置对象。

在各种编程语言中，基本都有反射机制，可让用户的代码高度灵活化，主要功能就是让程序不用预先知道需要怎么去做，在做的过程中去根据过程去执行过程，虽然目前JavaScript不直接支持反射，但基本各路都已经使用了各种判断逻辑去支持反射了。

Demo
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
