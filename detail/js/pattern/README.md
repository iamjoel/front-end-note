# 设计模式
## 缓存
缓存一些计算的中间过程，如
```
// 不推荐
$('#btn').addClass('active');
$('#btn').show();

// 推荐
var $btn = $('#btn');
$btn.addClass('active');
$btn.show();

var arr = ['a', 'b', 'c'];
// 不推荐
for(var i = 0; i < arr.length; i++){
  //
}

// 推荐
for(var i = 0, arrLen = arr.length; i < arrLen; i++){
  //
}
```


## 拓展阅读
* [JavaScript Patterns Collection](http://shichuan.github.io/javascript-patterns/#jquery-patterns)
