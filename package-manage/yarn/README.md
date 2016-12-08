# Yarn
[Yarn](https://yarnpkg.com/) 是 Facebook 开发的包管理器。

在使用 Yarn 时，开发者们还像以前一样从 npm 仓库那里获取资源，但安装速度更快，不同的机器的安装结果完全一致，甚至还可以在安全的离线环境中使用。

## npm 的一些缺点
npm 客户端在把依赖安装到 node_modules 目录时存在不确定性。这种 “不确定性” 是指，由于安装依赖的顺序不同，你得到的 node_modules 目录的内部结构可能跟别人不一样。这种差异可能会导致 “我电脑上是好的” 之类的 bug，而这类 bug 往往是极难定位的。

## 与 npm 比较的优势
* 速度比 npm 快
* 通过引入 lockfile（锁定文件），解决 node_modules 的不确定性问题
* 兼容 npm 和 Bower 工作流，支持混用多种仓库类型

## 安装
见[这里](https://yarnpkg.com/en/docs/install)。

## 用法
见[这里](https://yarnpkg.com/en/docs/usage)。

## 参考链接
* [[译] Yarn 官方介绍: 一款新的 JavaScript 包管理器](https://mp.weixin.qq.com/s?__biz=MzIyMjE0ODQ0OQ==&mid=2651552736&idx=1&sn=c8eca80f887ab10c81a351bcbbb12382)