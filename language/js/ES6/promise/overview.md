# Promise 写法示例
## 基本用法
```
function doThing(){
  return new Promise(function (resolve, reject) {
    setTimout(function(){// 模拟异步
      resolve();// 成功用 resovlve；失败用 reject。可以传数据。
    }, 100)
  }
}

doThing().then(成功回调，失败回调)
// 或
doThing().then(成功回调).catch(失败回调)
```

## 多个串行操作
以 3 个为例。代码如下
```
doThing1().then(function () {
  return doThing2()
}).then(function () {
  return doThing3()
})
```

上面代码中，doThing1，doThing2，doThing3 都要返回 Promise 对象。

## 多个并行操作
以 3 个为例。代码如下
```
romise.all([doThing1(), doThing2(), doThing3()]).then(function () {
  // doSth
}
```

上面代码中，doThing1，doThing2，doThing3 都要返回 Promise 对象。