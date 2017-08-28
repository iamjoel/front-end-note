# RxJS 入门
![](http://upload-images.jianshu.io/upload_images/7219342-9c5ef414704ecf0c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## RxJS 是什么
Reactive Programming(响应式编程) 是使用异步数据流进行编程的技术，简称 RP。随着时间的推移，产生的一系列事件（鼠标点击、键盘输入等）或数据组成的集合，称为流。RP 就是对流进行编程。RP 本质上一种观察者模式。

RxJS 是 RP 的一种实现。

Rxjs 有强大的数据流组合与控制能力和优雅的编码体验，但很难入门。我们来看几个 Demo 体验下。

1 按钮只能被点击一次。  
RxJS 的实现如下
HTML
```
<button id="sign-in-btn">签到</button>
```

JavaScript
```
var signInBtn = document.querySelector('#sign-in-btn')
Rx.Observable.fromEvent(signInBtn, 'click')
  .take(1)// 1次事件后停止事件流
  .subscribe(()=> {
    signInBtn.textContent = '已签到'
  })

```


2 模拟三击事件。  
RxJS 的实现如下
HTML
```
<button id="triple-click-btn">三击</button>
```

JavaScript
```
var tripleClickBtn = document.querySelector('#triple-click-btn')
Rx.Observable.fromEvent(tripleClickBtn, 'click')
  .bufferTime(500) // 收集500ms内的点击事件
  .filter(list => list.length === 3)
  .subscribe(()=> {
    console.log('三击')
  })
```

3 停止输入后，如果输入框内容超过2个字符，触发搜索。
RxJS 的实现如下
HTML
```
<input type="text" id="input">

```

JavaScript
```
Rx.Observable.fromEvent(input, 'keyup')
  .debounceTime(500)// 停止输入 500ms 后触发
  .map(event => event.target.value) // 输入框中的值
  .filter(value => value.length > 2) // 内容超过2个字符
  .switchMap(调后台搜索接口，返回Promise对象)
  .subscribe(data=> {
    // 渲染数据
  })
```

当然，RxJS 也能对非异步的数据进行编程。如，找出数组中偶数的个数
RxJS 的实现如下:
```
Rx.Observable.from([1,2,3,4,5])
  .filter(num => num % 2 === 0)
  .count()
  .subscribe(val => {
    console.log(`偶数的个数有${val}个`)
  })
```

## 概念介绍
### 可观察对象(Observable)
> 可观察对象是多个值的惰性推送集合。

RxJS 的所有操作都是基于可观察对象的。因此，用 RxJs 首先要创建或将对象转化成可观察对象。如
```
Rx.Observable.fromEvent('button', 'click')
```

上面的代码将按钮的点击事件转化成可观察对象。每次按钮被点击，可观察对象都会推送该点击事件。

我们也可以创建一个可观察对象
```
var observable = Rx.Observable.create(function (observer) {
  try {
    observer.next(1)
    observer.next(2)
  } catch(error) {
    observer.error(error)
  }
  setTimeout(() => {
    observer.next(3)
    observer.complete()
  }, 1000)
})
```

上面的代码中，调用 `observer.next` 来推送值，可以同步或异步的推值。

可观察对象可发送三种类型的通知
1. "Next" 通知。写法： `observer.next(数据)`。
1. "Error" 通知， 发送一个 JavaScript 错误 或 异常。写法： `observer.error(错误对象)`
1. "Complete" 通知： 不再发送任何值。写法：`observer.complete()`

可观察对象可以发送任意数量的 "Next" 类型的通知，但只能发送一次 "Error" 或 "Complete" 类型的通知。如果发送了 "Error" 或 "Complete" 通知的话，之后不会再发送任何通知了。

### 观察者(Observer)
> 观察者是可观察对象发送的值的消费者。

观察者只是一组回调函数的集合，每个回调函数对应一种可观察对象发送的通知类型。
```
var observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
}

observable.subscribe(observer)
```

如果观察者只在乎可观察对象发送的 Next 通知，可以简写为：
```
observable.subscribe(x => console.log('Observer got a next value: ' + x))
```

### 订阅(Subscription)
> 订阅表示可清理资源的对象。

当观察者不需要再消费可观察对象推送的值时，可调用订阅对象上的`unsubscribe` 函数来取消订阅和释放资源。如
```
var subscription = observable.subscribe(x => console.log(x));

subscription.unsubscribe() // 取消订阅
```

## 主体(Subject)
> 主体是一种特殊的可观察对象。

主题与普通的可观察对象的区别点在与
* 允许值被多播到多个观察者。普通的可观察者对象是单播的(仅给一个的观察者发送通知)。
* 可以推送值：拥有next()/error()/complete()方法。

单播的可观察对象也可以转化成多播的对象。如
```
var source=Rx.Observable.from([1,2,3]);
var subject=new Rx.Subject();
var multicasted=source.multicast(subject);
```

RxJS 中还有些特殊的主体，如 `BehaviorSubject`，`ReplaySubject`，`AsyncSubject`。感兴趣的可以了解下。

### 操作符
> 操作符是可观察对象上的方法。

可观察对象上执行操作符，并不会改变可观察对象，而是生产一个新的可观察对象。操作符本质上是一个将某个可观察对象作为输入然后输出另一个可观察对象的纯函数。

RxJS 有一大堆操作符，如此强大的原因正是源自于它的操作符。感兴趣的可以过一遍RxJS操作符文档。

用 [Marble diagrams](http://reactivex.io/rxjs/manual/overview.html#marble-diagrams)可以方便的懂操作符的意思，如下图
![](http://upload-images.jianshu.io/upload_images/7219342-fc20cd86f6310a87.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

详情见[这里](http://reactivex.io/rxjs/manual/overview.html#marble-diagrams)。


### 调度器(Scheduler)
> 调度器控制着何时启动可观察对象和何时发送通知。

详情见[这里](http://reactivex.io/rxjs/manual/overview.html#scheduler)。

## 优势
容易写出简洁的函数式编程的代码。函数式编程的是一大优点是无副作用：不会修改函数外部的值，让你的代码更健壮，不容易出错。

## 使用场景
* 处理多个数据序列（有一定顺序）。
* 多个复杂的异步或者事件组合在一起。

## 在 Vue.js 中使用RxJS
以模拟三击事件，举例，Vue.js 中这么写：
HTML
```
<div id="app">
  <button @click="clickIt">三击</button>
</div>
```

JavaScript
```
new Vue({
  el: '#app',
  data: {
    clickSubject: null
  },
  methods: {
    clickIt($event) {
      this.clickSubject.next()
    }
  },
  mounted() {
    this.clickSubject = new Rx.Subject()
    this.clickSubject
      .bufferTime(500)
      .filter(list => list.length === 3)
      .subscribe(()=> {
        console.log('三击')
      })
  }
})
```

也可以尝试用 [vue-rx](https://github.com/vuejs/vue-rx)。

## 文档
* [RxJS 官网](http://reactivex.io/rxjs/)
* [RxJS 官网中文版](http://cn.rx.js.org/)

## 推荐阅读
* [构建流式应用：RxJS 详解](https://www.qcloud.com/community/article/191068?fromSource=gwzcw.107650.107650.107650)
* [流动的数据——使用 RxJS 构造复杂单页应用的数据逻辑](https://github.com/xufei/blog/issues/38)
* [RxJS 实战篇（一）拖拽](http://jerryzou.com/posts/rxjs-practice-01/)
* [RxJS 5 Operators By Example](https://www.learnrxjs.io/operators/)
