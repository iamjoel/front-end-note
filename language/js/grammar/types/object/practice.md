# 练习
判断是否是空对象  
方法1:
```
function isEmpty() {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) return false;
  }

  return true;
}
```

方法2:
```
Object.keys(obj).length === 0

```

jQuery 和 underscore 也有方法来判断是否是空对象。
