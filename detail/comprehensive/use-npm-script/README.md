# 用 npm script 来构建前端项目的尝试
最近读了 [Why I Left Gulp and Grunt for npm Scripts](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.n8tjc2j5e)。觉的挺有道理。

对于我来说，

## 开发
开发的时候，主要做这几件事：

* 启动静态服务器来看做好的页面。用 Nodejs 的包 anywhere。之所以用静态服务器而不是直接在文件中打开 .html 文件的原因是：在文件中打开，页面的协议是 `file://`，如果该页面会在 JS 中加载一些资源或模拟 aJax 接口，其协议是 `http://` ，因为协议不同（跨域）而加载失败。用静态服务器不会产生这个问题。
* 监视 Sass 文件的变化。变化时，编译生成 CSS。用 Compass。
* 监视 ES6 文件的变化。变化时，编译生成 ES5 的 JS。用 Webpack。

在 package.json 的配置如下
```
"scripts": {
  "start": "node_modules/.bin/npm-run-all --parallel start:server watch:sass watch:es6",
  "watch:sass": "compass watch",
  "watch:es6": "node_modules/.bin/webpack --watch -p",
  "start:server": "node_modules/.bin/anywhere 1520 -d src"
}
```

## 发布
发布的时候，主要做这几件事：

* 删除发布文件目录。用 Nodejs 的包 rimraf。
* 将 ES6 代码编译成 ES5 代码，合并（如果有需要的话），并压缩。用 Webpack + Babel。
* 将 Sass 代码编译成 CSS 代码，并压缩。用 Compass。
* 将 源代码目录下的除了 ES6 和 Sass 代码外的其他代码都移动到发布文件目录下。用 Gulp.js。

在 package.json 的配置如下
```
"scripts": {
 "prebuild": "npm run remove-dist",
  "build": "npm run build:css && npm run build:js && npm run moveAssets",
  "build:js": "node_modules/.bin/webpack -p",
  "build:css": "compass compile",
  "moveAssets": "node_modules/.bin/gulp",
  "remove-dist": "node_modules/.bin/rimraf ./dist"
}
```

完整版 package.json

## 参考链接
* [Why I Left Gulp and Grunt for npm Scripts](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.n8tjc2j5e) [我为何放弃Gulp与Grunt，转投npm scripts[译]](http://www.infoq.com/cn/news/2016/02/gulp-grunt-npm-scripts-part2)
* [react-slingshot](https://github.com/coryhouse/react-slingshot/blob/master/package.json)
