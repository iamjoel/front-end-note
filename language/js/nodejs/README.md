# Node.js
![Node.js](http://upload-images.jianshu.io/upload_images/16777-1d67f95e3dacdb09.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 简要介绍
Node.js 是一个基于  [Chrome's V8 JavaScript engine](https://developers.google.com/v8/) 的 JavaScript 运行环境(Runtime) 。通过这个运行环境 ，可以让 JavaScript 像后端语言（Java, Python 之类）那样，进行文件，数据库等操作。

Node.js 产生的初衷，是 Ryan Dahl 想设计一高性能的 Web 服务器。他发现高性能 Web 服务器有几个要点：事件驱动，非阻塞I/O。以此，Ryan Dahl 设计了 Node.js。

## 安装
在 [Nodejs 官网](http://nodejs.org/download/) 下载并安装。

## 运行
* 进入命令交互模式（输入一条代码语句后立即执行并显示结果）：命令行输入 `node`
* 运行一个 js 文件：命令行中， `cd 文件所在位置`，然后输入 `node 文件名`

## JavaScript
能熟练使用 JavaScript。学习 JavaScript 可以访问阮一峰老师的 [JavaScript 标准参考教程（alpha）](http://javascript.ruanyifeng.com/)。

## 模块
每一个文件就是一个模块，而文件路径就是模块名。Node.js的[模块系统](http://nodejs.org/docs/latest/api/modules.html)，就是参照 [CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1) 规范实现的。

### 导出模块
导出当前模块的一些公有方法和属性，用 `module.exports`，如
```
module.exports = {
  foo: 'foo',
  fn: function(){}
}
```

引入该模块的程序就可以调用这些属性和方法。

### 引入模块
使用 `requrie 模块名`, 如
```
var foo1 = require('./foo');
var _ = require('underscore');

```

关于模块路径解析及文件定位规则见[这里](http://yijiebuyi.com/blog/233d515e69e9b44067ee7e6372fd9747.html)。


## 包
复杂些的模块由多个子模块组成。为了便于管理和使用，我们可以把由多个子模块组成的大模块称做包，并把所有子模块放在同一个目录里。

### 包的目录结构
完全符合 CommonJS 规范的包的目录结构**应该**包括
* package.json 包的描述文件
* lib 放JS代码
* bin 放二进制
* doc 文档
* test 测试代码

当然上面的结构是一个推荐。实际开发中的包的目录结构可能和那这目录不太一样。

### package.json
包的描述文件。其内容形如
```
{
  "name": "node-js-sample",
  "version": "0.2.0",
  "description": "A sample Node.js app using Express 4",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.13.3"
  },
  "engines": {
    "node": "4.0.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/heroku/node-js-sample"
  },
  "keywords": [
    "node",
    "heroku",
    "express"
  ],
  "author": "Mark Pundsack",
  "contributors": [
    "Zeke Sikelianos <zeke@sikelianos.com> (http://zeke.sikelianos.com)"
  ],
  "license": "MIT"
}
```
关于字段的描述见 [这里](https://docs.npmjs.com/files/package.json)。

关于版本(version)的设置，推荐遵循[语义化版本](http://semver.org/lang/zh-CN/)。

我们在包的根路径执行 `npm init`，可生成 package.json。


## npm
npm 是 Node.js 的包管理工具。安装 Node.js 后，其实也附带着安装了 npm。常用命令
* npm install [-g] [包名]：安装某第三方包。若未输入包名，则根据当前目录的 package.json 来安装依赖。
* npm uninstall [-g] 包名：卸载某第三方包
* npm update [-g] 包名：更新某第三方包
* npm search 包名：搜索某第三方包
* npm help 命令：查看某条命令的详细帮助

更多 npm 知识见[这里](https://docs.npmjs.com/)。

如果用 npm 安装第三方包的速度很慢，可以用国内淘宝的镜像 [cnpm](http://npm.taobao.org/)。

## API
Node.js 提供来丰富的api。几个主要的
* [文件操作](https://nqdeng.github.io/7-days-nodejs/#3)
* [网络操作](https://nqdeng.github.io/7-days-nodejs/#4)
* [进程管理](https://nqdeng.github.io/7-days-nodejs/#5)

所有 api 的文档见[这里](https://nodejs.org/api/)。


## 异步编程
介绍见[这里](https://nqdeng.github.io/7-days-nodejs/#6)。关于异步控制的方案见[这里](http://www.zhihu.com/question/25413141)。

## 用 Node.js 来做网站
虽然不依赖任何框架，用 Node.js 也能做出一个网站，但自己一定会重复造很多"轮子"。
Node.js 上的框架有很多，最流行的框架应该是 [Express.js](http://expressjs.com/en/index.html)。这是一个易学，易用的轻量级的框架。其他的一些框架的比较，见[这里](https://segmentfault.com/a/1190000002421718)。

## 更多 Node.js 资源
* [Awesome Node.js](https://github.com/sindresorhus/awesome-nodejs)

## 其他
* [常用模块](modules.md)
* [调试](debugger.md)

## 参考
* [七天学会NodeJS](https://nqdeng.github.io/7-days-nodejs/) 虽然名字比较标题党，但内容确实不错
* [《深入浅出Node.js》](https://book.douban.com/subject/25768396/)

