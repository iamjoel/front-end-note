# Proxy
Proxy(代理) 是 ES6 中新增的一个特性。Proxy 让我们能够以简洁易懂的方式控制外部对对象的访问。其功能非常类似于设计模式中的代理模式。

使用 Proxy 的好处是：对象只需关注于核心逻辑，一些非核心的逻辑（如：读取或设置对象的某些属性前记录日志；设置对象的某些属性值前，需要验证；某些属性的访问控制等）可以让 Proxy 来做。从而达到关注点分离，降级对象复杂度的目的。

## 使用方法
```
var p = new Proxy(target, handler);
```

其中，target 为被代理对象。handler 是一个对象，其声明了代理 target 的一些操作。p 是代理后的对象。

当外界每次对 p 进行操作时，就会执行 handler 对象上的一些方法。handler 能代理的一些常用的方法如下：
  * get：读取
  * set：修改
  * has：判断对象是否有该属性
  * construct：构造函数
  * ...

看如下的 demo
```
var target = {
   name: 'obj'
 };
 var logHandler = {
   get: function(target, key) {
     console.log(`${key} 被读取`);
     return target[key];
   },
   set: function(target, key, value) {
     console.log(`${key} 被设置为 ${value}`);
     target[key] = value;
   }
 }
 var targetWithLog = new Proxy(target, logHandler);
 targetWithLog.name; // 控制台输出：name 被读取
 targetWithLog.name = 'others'; // 控制台输出：name 被设置为 others
console.log(target.name); // 控制台输出: others
```
在上面的 demo 中， 
* targetWithLog 读取属性的值时，实际上执行的是 logHandler.get ：在控制台输出信息，并且读取被代理对象 target 的属性。
* 在 targetWithLog 设置属性值时，实际上执行的是 logHandler.set ：在控制台输出信息，并且设置被代理对象 target 的属性的值。

更多 Demo 见[这里](demo.html)。

## 参考
* [MDN Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
* [实例解析 ES6 Proxy 使用场景](http://pinggod.com/2016/%E5%AE%9E%E4%BE%8B%E8%A7%A3%E6%9E%90-ES6-Proxy-%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF/)


