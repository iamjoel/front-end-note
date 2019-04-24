# npm
npm 的全称是 Node Package Manager，是随同NodeJS一起安装的包管理和分发工具，它很方便让JavaScript 开发者下载、安装、上传以及管理已经安装的包。

## npm 常用命令
* `npm install 包名@版本` 简写为 `npm i`。如 `npm install npm@latest -g`
  * `-g`
  * `--save` 保存到 `package.json`
  * `-dev`
  * `exact` 指定版本。
* `npm init` 初始化项目的 `package.json`
* `npm run 命令` 执行定义在 `package.json` 中定义的 scripts
* `npm root` 查看当前包的安装路径
  * `-g` 查看全局的包的安装路径
* `npm doc 包名` 产看
* `npm ls` 查看当前安装的包
  * `-g`
* `npm shrinkwrap` 生成当前依赖版本的 `npm-shrinkwrap.json`
* `npm -v` 查看 npm 版本
* `npm help`

## 资源
* [npm 官方文档](https://docs.npmjs.com/)
