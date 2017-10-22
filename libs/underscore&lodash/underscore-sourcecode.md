# underscore.js 源码解读
[源码地址](http://underscorejs.org/docs/underscore.html)


## 基础
### 获取全局对象
兼容浏览器和 Node.js 环境。
```
(function() {
  var root = this;
  
}.call(this));
```

### 防止命名冲突
```
var previousUnderscore = root._;
_.noConflict = function() {
  root._ = previousUnderscore;
  return this;
};
```

### 兼容 Common.js 的模块规范
```
if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = _;
  }
  exports._ = _;
} else {
  root._ = _;
}
```

### 兼容 AMD的模块规范

```
if (typeof define === 'function' && define.amd) {
  define('underscore', [], function() {
    return _;
  });
}
```

### 面向对象的写法的支持
`_(obj).xxx`。将 _ 的方法复制到 obj 上。xxx 是 `_` 的属性或方法。方法中 `this` 指向 `obj`。
```
var _ = function(obj) {
  if (obj instanceof _) return obj;
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;
};

// 将 _ 的方法绑到 _ 的原型上。
_.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
  var method = ArrayProto[name];
  _.prototype[name] = function() {
    var obj = this._wrapped;
    method.apply(obj, arguments);
    if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
    return result(this, obj);
  };
});
```

测试代码
```
var a = _('content')
a._wrapped // 'content'
a instanceof true

var b = _(a)
b._wrapped // 'content'
b instanceof true
```

### 不会报错的取对象上的属性或方法
```
 var property = function(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  };
};
var getLength = property('length'); 
```

测试代码
```
getLength(null) // undefined
getLength(undefined) // undefined
null.length // 报错
undefined.length // 报错
```


## 拓展阅读
* [underscore 的源码解读](https://github.com/hanzichi/underscore-analysis) 





