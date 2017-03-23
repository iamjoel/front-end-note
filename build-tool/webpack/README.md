# [webpack](http://webpack.github.io/)
Webpack 是模块加载器。    
[为什么要使用webpack](http://webpack.github.io/docs/what-is-webpack.html)
使用webpack想达到的目的
* Split the dependency tree into chunks loaded on demand
* Keep initial loading time low
* Every static asset should be able to be a module
* Ability to integrate 3rd-party libraries as modules
* Ability to customize nearly every part of the module bundler
* Suited for big projects

Webpack 对 CommonJS 的 AMD 的语法做了兼容, 方便迁移代码
不过实际上, 引用模块的规则是依据 CommonJS 来的。如
```
require('lodash') // 从模块目录查找
require('./file') // 按相对路径查找（以.或..或/开头）
```

## 命令
* `webpack` for building once for development
  * `webpack --display-error-details` 显示错误信息
* `webpack -p` for building once for production (minification) 不用`-p`那文件是非压缩的
* `webpack --watch` for continuous incremental build in development (fast!) 开发时很实用
* `webpack -d` to include source maps 包含Source map

我开发是时用 `webpack --watch -d`

## CommonJs
CommonJS是服务器模块的规范，Node.js采用了这个规范。
用`require`来加载文件
用`module.exports`对外输出的接口，其他文件加载该模块，实际上就是读取module.exports变量


更详细的见 [阮一峰写的CommonJS规范](http://javascript.ruanyifeng.com/nodejs/commonjs.html)

## 静态资源
有时候，用的第三库会去加载一些本地的静态资源。不是以webpack的方式去加载。
我们会配置 dev-server 这么写：
```
// dev-server 实际就是运行一个 express 的服务器。 下面调用的是express的api。
app.use('static', express.static('./static'))
```

然后在 static 目录下放静态资源，然后就可以通过
`/static/在static下的路径` 来访问资源。

## 学习资源
* [Webpack傻瓜式指南（一）](https://zhuanlan.zhihu.com/p/20367175)
* [Webpack傻瓜指南（二）开发和部署技巧](https://zhuanlan.zhihu.com/p/20397902)
* [Webpack 初學者教學課程](https://github.com/neighborhood999/WebpackTutorial/tree/master/zh-TW/)
* [webpack examples](https://github.com/webpack/webpack/tree/master/examples)
* [list-of-plugins](http://webpack.github.io/docs/list-of-plugins.html)
* [webpack gitbook](https://wohugb.gitbooks.io/webpack/content/)
* [webpack-howto](https://github.com/petehunt/webpack-howto)
* [官方demos](https://github.com/webpack/webpack/tree/master/examples)
