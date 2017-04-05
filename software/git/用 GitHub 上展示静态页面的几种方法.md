# 用 GitHub 展示静态页面的几种方法
如何展示自己做的静态页面？需要自己有个服务器，还要买个域名？其实用 GitHub 就能搞定。

## 方法1: 用 RawGit
在 [RawGit](https://rawgit.com/) 输入要展示的静态页面在 GitHub 上的 URL，RawGit 会生成能访问的静态页面的 URL。如，要展示 `https://github.com/iamjoel/baidu-ife-task/blob/master/src/2017/xiaowei/task1/demo.html`， rawGit 生成的地址是 `https://rawgit.com/iamjoel/baidu-ife-task/master/src/2017/xiaowei/task1/demo.html`。

![RawGit](http://upload-images.jianshu.io/upload_images/16777-1b5ffe8302660b2f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

用这种方法虽然很简单，但偶尔会出现展示的静态页面有问题。

## 方法2: 
GitHub 支持项目（Repositiory）官网。项目官网中的内容可以通过 `https://GitHub用户名.github.io/项目名/目录结构` 的规则来访问。项目官网的内容默认是访问项目`gh-pages 分支`下的内容。项目官网支持设置为 `mater 分支` 或 `mater 分支下的doc目录`下的内容。

如下图，我将项目 `https://github.com/iamjoel/baidu-ife-task/` 的 `mater 分支` 设置项目官网。展示 `https://github.com/iamjoel/baidu-ife-task/blob/master/src/2017/xiaowei/task1/demo.html` 对应的展示地址是 `https://iamjoel.github.io/baidu-ife-task/src/2017/xiaowei/task1/demo.html`。

![](http://upload-images.jianshu.io/upload_images/16777-1d52b7afeacaa458.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

更多介绍见 [这里](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)。

最后，推荐个你可能会用到的 npm 的包 [gh-pages](https://www.npmjs.com/package/gh-pages)。