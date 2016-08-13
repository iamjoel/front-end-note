# Proxy
Proxy(代理) 是 ES6 中新增的一个特性。Proxy 让我们能够以简洁易懂的方式控制外部对对象的访问。其功能非常类似于设计模式中的代理模式，该模式常用于三个方面：
* 拦截和监视外部对对象的访问
* 降低函数或类的复杂度
* 在复杂操作前对操作进行校验或对所需资源进行管理

写法
```
var p = new Proxy(target, handler);
```

其中，target 为被代理对象。handler 是声明了各类代理操作的对象，最终返回一个代理对象。外界每次通过代理对象访问 target 对象的属性时，就会经过 handler 对象。handler 能代理的几个常用的方法如下：
  * get：读取
  * set：设置
  * has
  * construct

## 简单 Demo
```
var handler = {
    get: function(target, name){
        return name in target?
            target[name] :
            37;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37
```

## 具体的用途
* 实现虚拟属性
* 实现私有属性
* 抽离校验模块
* 访问日志： 对于那些调用频繁、运行缓慢或占用执行环境资源较多的属性或接口，开发者会希望记录它们的使用情况或性能表现，这个时候就可以使用 Proxy 充当中间件的角色，轻而易举实现日志功能
* 警告。比如一些属性或方法在在未来的版本会废弃，访问时可以做警告。
* 过滤操作。某些操作会非常占用资源，比如传输大文件，这个时候如果文件已经在分块发送了，就不需要在对新的请求作出相应（非绝对），这个时候就可以使用 Proxy 对当请求进行特征检测，并根据特征过滤出哪些是不需要响应的，哪些是需要响应的。

## 更多
* [Mdn Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
* [实例解析 ES6 Proxy 使用场景](http://pinggod.com/2016/%E5%AE%9E%E4%BE%8B%E8%A7%A3%E6%9E%90-ES6-Proxy-%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF/)


