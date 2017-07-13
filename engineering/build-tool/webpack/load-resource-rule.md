# Webpack 加载模块的规则
Webpack 支持 [CommonJS 规范](http://www.commonjs.org/) 定义的加载规则。

## 加载规则
路径以 `.` 或 `..` 打头，加载相对路径的模块。`.` 表示当前目录，`..` 表示上层目录。 `require('./foo.js')` 将加载当前文件所在目录的 `foo.js` 的文件。

路径以 `/` 打头，加载绝对路径的模块。如 `require('/xx/foo.js')` 将加载文件路径是 `/xx/foo.js` 的文件。不建议用这种模式来加载模块。

路径不以上面的内容打头。则会这样查找：

1. Node.js 的原生模块。如 `fs`，`http` 等。（注：在浏览器环境中不存在这些模块。）
1. 在 Webpack 中的配置的目录或模块的别名。
1. 当前文件目录的 `node_modules`。
1. 上层目录的 `node_modules`。
1. 直至项目根目录下的 `node_modules` 目录。

注：具体的查找顺序可能不正确，网上没找到相应的文档。有知道的麻烦告知。

## 补全规则
在查找的过程中，会尝试补文件拓展名和路径。

### 补文件拓展名
如果加载的路径不带文件拓展名，会尝试补 `.js`, `.json` 等文件拓展名。在 Webpack 中可配置会尝试补的拓展名。配置方法如下：
```
resolve: {
  extensions: ['.js', '.vue', '.json']
  ...
}
```

如 `require('./config')`，会尝试加载 `config.js`, `config.vue`, `config.json`。

### 补路径
在尝试补文件拓展名后，仍然没找到对应文件，但发现路径是目录，会找该目录下的 `package.json`。如果存在，则加载 `package.json` 中的 `main` 属性对应的文件。如果不存在，则尝试找目录下的 `index.js`， `index.json` 等。

## 推荐阅读
* [CommonJS规范](http://javascript.ruanyifeng.com/nodejs/module.html#toc7) 阮一峰老师写的。