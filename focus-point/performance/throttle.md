# 函数节流：耗时函数被短时间频繁调用时，防浏览器卡死的方法
耗时函数如果在短时间内被频繁调用，如果不做合适的处理，会导致浏览器卡死（无响应），严重影响用户体验。

那我们应该如何处理呢？对于不同的类型的耗时函数有不同的处理方式。我将耗时函数分为两类，一类是，函数被频繁触发时，只需要执行最近的那次；另一类是，函数被频繁触发时，每次都需要被执行。

## 函数节流: 只执行时间区间内的最近的一次
对于第一类。一般是类似这样的场景：我们要做根据用户文字的输入，实时显示查询结果的功能。当用户频繁的修改输入内容，那边就会导致未执行的查询函数的堆积。我们只需要查询最近用户输入的，堆积的函数不需要被执行。

解决方案是，用函数节流：每次要执行查询方法时，将之前没执行的那个查询方法取消执行。取消执行的方式是用 `setTimeout` 和 `clearTimeout` 来做。具体实现如下

```js
$(document).ready(function() {
    function throttle(fn, time) {
        time = time || 200;
        var runId = null;
        return function() {
            var args = arguments;
            clearTimeout(runId); // 把之前没执行的给去掉
            runId = setTimeout(function() {
                fn.apply(fn, args);
            }, time);
        }
    }

    var search = function (val) {
      // 调用搜索接口的逻辑
    };

    search = throttle(search, 500);

    $('#input').keyup(function () {
    	search($(this).val());
    });
});
```

如果使用 Underscore.js 或 lodash.js。可以使用其 [throttle](http://underscorejs.org/#throttle) 方法。

其他使用场景还有：滚动条滚动的处理函数。

## 两次执行间加时间间隔：每次都要被执行
对于第二类，函数每次都要被执行。可能的场景是：要做活动的签到图片墙功能。在一个时间点，可能有一大堆人来签到，而显示每次签到时，会有一个动画，而显示的设备的性能比较差时，如果同时做很多个动画，会导致显示的卡顿。我们可以执行签到动画之间加一些时间间隔。

做法是，将要执行的动画放入一个队列，隔一段时间，执行一个。具体实现如下
```js
$(document).ready(function() {
    function queueCall(fn, time) {
        time = time || 200;
    	var argsArr = []; // 执行方法的参数队列
        setInterval(function  () {
        	if(argsArr.length === 0){
        		return;
        	}
        	var args = argsArr.shift();
        	fn.apply(fn, args);
        }, time);
        return function () {
        	argsArr.push(arguments);
        };
    };

    var signIn = function  (name) {
    	console.log('sign in. name: ' + name);
    };

    signIn = queueCall(signIn, 1000);

    ['joel', 'jack', 'tom', 'jerry', 'jim'].forEach(function (name) {
    	signIn(name);
    });
});
```


对于处理很耗时方法本身，可以使用 [Web Workers](http://www.jianshu.com/p/55448bc08961) 。


