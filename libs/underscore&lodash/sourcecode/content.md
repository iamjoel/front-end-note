# 阅读 Underscore.js 源码活动内容说明
在阅读 Underscore.js 源码前，请先了解：
* Underscore.js 出现的背景，主要解决什么问题。
* 通读下 Underscore.js 的API文档。
* Underscore.js 的整体架构。推荐看[这篇文章](https://github.com/hanzichi/underscore-analysis/issues/27)。

希望大家完读源码，能解决如下问题：
* 若干个异步操作，全部请求完成后需要触发某个方法，用 Underscore 的哪个方法，如何实现的？
* 如何防止命名冲突？比如 项目里，有别的第三方库和 Underscore，也是把方法绑在 `_` 上的。如何将 Underscore 绑到其他变量上？
* 什么是链式调用，如何实现链式调用的？
* Underscore 是如何支持 OOP（面向对象编程）的调用的？如 `_([1, 2, 3]).each(cb)` 
* 什么是去抖函数(throttle)，如何实现？
* 什么是节流函数(debounce)，如何实现？
* 如何同时支持 Common.js 的模块规范，AMD的模块规范，以及直接通过 `script` 标签，都能用 Underscore?
* Underscore.js 中的哪些代码，让程序更健壮？
* Underscore.js 有写的不好的地方吗，该如何优化？

**大家打卡的内容可以是对上面的某个问题的解答，也可以是其他感悟**。

带注释的源码地址如下：
* [官方版](http://underscorejs.org/docs/underscore.html) 英文。推荐。
* [中文翻译](https://github.com/hanzichi/underscore-analysis/blob/master/underscore-1.8.3.js/underscore-1.8.3-analysis.js) 英文实在不好的，就看这个吧。

别人的读 Underscore 系列
* [underscore 的源码解读](https://github.com/hanzichi/underscore-analysis)


