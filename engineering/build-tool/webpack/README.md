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
`static/在static下的路径` 来访问资源。

## 遇到的坑
### Source map 定位不准
是因为用  
`devtool: '#cheap-module-eval-source-map'` 导致的。但有些电脑这么设置是没有问题的。 设置这个值的原因是：`cheap-module-eval-source-map is faster for development`。

修复这个问题，只需改成
`devtool: 'source-map'`。

### 不支持加载外部js
webpack 不支持加载外部js ，但用 微信，钉钉之类的 jssdk，必须加载外部js 。可以用 [little-loader](https://github.com/walmartlabs/little-loader) 来做，如下
```
var load = require("little-loader");

load("http://example.com/foo.js", function (err) {
  // ... your code ...
});
```

### 项目发布在网站非根目录下
资源路径默认是`/` 的，导致资源找不到。

解决方案

1. 打开webpack.prod.conf.js。找到output：增加 publicPath: './', 即可。
1. config 文件夹下的index.js中修改 assetsPublicPath: './'
1. 在页面中引用静态资源，路径不要用 `/` 开头。

在 CSS 中用的图片的相对路径，需要改build文件夹下的utils.js代码。加
```
if (options.extract) {
  return ExtractTextPlugin.extract({
    publicPath: '../../', // 这行是新增的
    use: loaders,
    fallback: 'vue-style-loader'
  })
} else {
  return ['vue-style-loader'].concat(loaders)
}
```

具体见[webpack+vuecli打包生成资源相对引用路径与背景图片的正确引用](http://www.cnblogs.com/moqiutao/p/7496718.html)。

### 开发时代理请求
解决开发时解决跨域的问题。

在 `webpack.dev.conf.js` 中的配置中加

```
proxy: {
  '/api': {
    target: 'http://sth.com/',
    pathRewrite: {'^/api' : '/other/xxx'},
    changeOrigin: true
  }
}
```

调用接口 `/api/sth`  实际访问的路径是 `http://sth.com/other/xxx/sth`

## 学习资源
* [Webpack傻瓜式指南（一）](https://zhuanlan.zhihu.com/p/20367175)
* [Webpack傻瓜指南（二）开发和部署技巧](https://zhuanlan.zhihu.com/p/20397902)
* [Webpack 初學者教學課程](https://github.com/neighborhood999/WebpackTutorial/tree/master/zh-TW/)
* [webpack examples](https://github.com/webpack/webpack/tree/master/examples)
* [list-of-plugins](http://webpack.github.io/docs/list-of-plugins.html)
* [webpack gitbook](https://wohugb.gitbooks.io/webpack/content/)
* [webpack-howto](https://github.com/petehunt/webpack-howto)
* [官方demos](https://github.com/webpack/webpack/tree/master/examples)
