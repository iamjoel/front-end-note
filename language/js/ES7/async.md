# async/await 写法示例
async/await 让写异步代码感觉像写同步代码。async/await 并不是 ES6 的一部分，但可以通过使用 Babel 来使用它。

async/await 一般和 Prmoise 一起使用。下面的代码是一个生成 Promise 对象的工具方法。

```
function doTask({id, success=true,time=100}){
  return new Promise(function (resolve, reject) {
    setTimeout(function(){// 模拟异步
      var msg
      if(success) {
        msg = `thing ${id} is done`
        console.log(msg)
        resolve(msg);
      } else {
        msg = `thing ${id} failed`
        console.error(msg)
        reject(msg)
      }
    }, time)
  })
}
```



## 多个串行操作
以 3 个为例。代码如下
```
async function doSerialTing() {
  await doTask({id:1})
  console.log('sth')
  await doTask({id:2, time: 1000})
  await doTask({id:3})
}

doSerialTing()
```
输出
```
thing 1 is done
sth
thing 2 is done
thing 3 is done
```

` await doTask(...)` 的返回值为 Promise 中 resolve 值。 

自己试下点[这里](http://www.es6fiddle.net/ivm1l3n3/)。

## 多个并行操作
以 3 个为例。代码如下
```
async function doParallelTing() {
  var [res1, res2, res3] = await Promise.all([
      doTask( {id:1}),
      doTask( {id:2, time: 1000 }), 
      doTask( {id:3})
  ])
  console.log(res1,res2,res3)
}

doParallelTing()
```

输出
```
thing 1 is done
thing 3 is done
thing 2 is done
thing 1 is done thing 2 is done thing 3 is done
```

自己试下点[这里](http://www.es6fiddle.net/ivm1otm5/)。

## 错误处理
```
async function doTasks() {
  try {
     await doTask({id:1, success:false})
     await doTask({id:2})
  }catch(e) {
    console.log(`error: ${e}`)
  }
}

doTasks()
```
或这么写
```
async function doTasks() {
  await doTask({id:1, success:false})
  await doTask({id:2})
}

doTasks().catch((e)=>{
   console.log(`error: ${e}`)
})
```
输出
```
thing 1 failed
error: thing 1 failed
```
自己试下点[这里](http://www.es6fiddle.net/ivm1v1pi/)。


## 参考
* [Async 函数 —— 让 promise 更友好](http://www.zcfy.cc/article/async-functions-making-promises-friendly-1566.html)