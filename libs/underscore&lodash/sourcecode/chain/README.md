# Underscore.js 源码解读之链式语法
## 链式语法写法
我们调用多个 Underscore 的方法。可能会这么写：
```
var arr = [1, 2, 3,4,5,6,7,8]
var res = _.filter(arr, i => i > 1)
res = _.map(res, i => i*2)
res = _.shuffle(res)
```

用 Underscore 的链式语法来简化，如下
```
var arr = [1, 2, 3,4,5,6,7,8]
var res = _.chain(arr)
 .filter(i => i > 1)
 .map(i => i * 2)
 .shuffle()
 .value()
```

## 源码实现
链式语法本质是，每次调用方法，都返回 Underscore 实例（this）。

我们先来看 `chain` 的源码：
```
_.chain = function(obj) {
  var instance = _(obj) // 生成实例。
  instance._chain = true // 用此变量来标识：方法是返回原始值还是 Underscore 实例
  return instance;
}
```

在生成实例的过程中，会将值存起来。源码如下：
```
var _ = function(obj) {
  if (obj instanceof _) return obj;
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj; // 将当前值存起来。
}
```

在 Underscore 用 mixin，将所有的静态方法绑并到实例方法。源码如下：
```
_.mixin = function(obj) {
  _.each(_.functions(obj), function(name) {
    var func = _[name] = obj[name];
    _.prototype[name] = function() {
      var args = [this._wrapped];
      push.apply(args, arguments);
      return result(this, func.apply(_, args));
    };
  });
};

// 将所有的静态方法绑并到实例方法
_.mixin(_)
```

上面有一句关键代码
```
return result(this, func.apply(_, args))
```

`result` 方法做的事就是在链式调用中，将实例传递下去。源码如下：
```
var result = function(instance, obj) {
  return instance._chain ? _(obj).chain() : obj;
}
```

获得最后结果的值，调用 `value` 方法。源码如下：
```
_.prototype.value = function() {
  return this._wrapped;
};
```
