我们知道，在 GitHub 项目的 gh-pages 分支下的内容，可以通过 `https://GitHub用户名.github.io/项目` 访问到。GitHub 也支持设置项目的 mater 分支或 mater 分支下的doc目录做为 `https://GitHub用户名.github.io/项目` 可访问的内容。具体见 [这里](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)。

有的项目，会用这种方式来展示项目的静态页面(官网)：在 master 分支放项目的所有内容，gh-paghs 分支放静态页面。这样经常要在这两个分支间不断切换。对这不太了解的见 [用github来展示你的前端页面吧](http://www.jianshu.com/p/d1ae8f6bdcb8)。

有没有更好的方式呢？

npm 上有个叫 gh-pages 的包，可以帮我们简化这个过程。举个例子，我们需要将 master 分支下 `dist` 文件夹的代码做为官网。我们只需在项目根路径下建个 `build.js` 的文件，内容如下：
```
var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, './dist'), function(err) {
  err ? console.error(err) : console.log('publish success');
});
```

package.json 的核心部分如下
```
"scripts": {
    "publish": "node build"
},
"devDependencies": {
    "gh-pages": "0.11.0"
  }
```

安装好依赖包后，只需在命令行中，cd 到项目根路径，执行
```
npm run publish
```

静态页面就更新喽~ 以后每次静态页面更新后，只需执行 `npm run publish` 即可~