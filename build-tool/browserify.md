# browserify
## 安装
1. 安装 `nodejs`
1. 安装browserify `npm install -g browserify`

## hello world
### 1.初始化项目
1. 新建一个文件夹
1. 打开命令行(终端),cd到刚新建的文件夹
1. 输入 `npm init`

### 2.创建源文件
创建一个名为 `main.js`的文件，内容如下
```
var unique = require('uniq');
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
console.log(unique(data));
```

### 3.安装依赖
在命令行输入`npm install --save uniq`

### 4.生成文件
在命令行输入`browserify m ain.js -o bundle.js`

### 5.引用生成文件
1. 新建一个html文件
1. 在文件中引用`bundle.js`即可


## 自动化构建
可参考 https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md

## 资源
* [官网](http://browserify.org/)
* [browserify handbook](https://github.com/substack/browserify-handbook)
