# CSS 代码组织，写法的最佳实践
## 代码组织
* [BEM](http://getbem.com/) [介绍](BEM.md)
* [SMACSS](https://smacss.com/)
* OOCSS
* [rscss](https://github.com/rstacruz/rscss)
* [apppie](http://www.apppie.org/)
* [semantic ui](http://semantic-ui.com/)
* [Primer](http://primercss.io/scaffolding/) Github 的 CSS
* [SOLID CSS](http://blog.millermedeiros.com/solid-css/)
* [Constraint CSS](http://gridstylesheets.org/guides/ccss/)

## CSS最佳实践
### 避免使用@import
CSS通过使用`@import url(CSS url)`来加载其他CSS文件。但使用@import的话，浏览器会在下载解析包含的@import的CSS后，才会在再加载@import的CSS文件。
解决方法是使用<link>标记来替代@import。因为<link>是并行加载的。

### 避免CSS表达式
css表达式只能在IE中使用。css表达式可以使用了JavaScript表达式。如：
``` css
background-color: expression((new Date()).getHours()%2?"#FFFFFF": "#000000" );
```
但是，在页面显示，缩放时，页面滚动、乃至移动鼠标时都会要重新计算css表达式的值，以致产生性能的影响。

### css选择器的优化
* http://www.w3cplus.com/css/css-selector-performance
* [Efficiently Rendering CSS（高效的写选择器）](https://css-tricks.com/efficiently-rendering-css/)

### 移除无匹配的样式
移除无匹配的样式，有两个好处：
1. 缩减样式文件的体积，加快资源下载速度
2. 对于浏览器而言，所有的样式规则的都会被解析后索引起来，即使是当前页面无匹配的规则。移除无匹配的规则，减少索引项，加快浏览器查找速度

[gulp-uncss](https://github.com/ben-eb/gulp-uncss) 可以删除没有用到的CSS

### 尽可能减少重复代码
用变量的形式：

用 currentColor。如，outline的颜色和字体颜色相同，可以这么写
```
color: red;
outline-color: currentColor;
```

用相对值： em, %。如
```
font-size: 125%;
line-height: 1.5;
padding: .3em .8em;
border-radius: .2em;
box-shadow: 0 .05em .25em rgba(0,0,0,.5);
text-shadow: 0 -.05em .05em rgba(0,0,0,.5);
```

用继承，如
```
a { color: inherit; }// 不这么设置，a 有自己的颜色
```

用 CSS 变量。

## 关于响应式网页设计
媒体查询的断点不应该由具体的设备来
决定，而应该根据设计自身来决定。这不仅是因为我们的网站需要面向的设
备太多了（尤其是考虑到未来的设备时），还因为一个网站在桌面端可能会
以任意尺寸的窗口来显示。如果你有信心自己的设计在任何可能出现的视口
尺寸下都能良好工作，谁关心这些设备的分辨率具体是多少呢？

可以尝试 vw、vh、vmin 和 vmax 折现与视口相关的单位。

## 参考
* http://web-design-weekly.com/2014/07/17/dealing-with-a-large-css-codebase
* [高性能CSS](http://www.alloyteam.com/2012/10/high-performance-CSS/)
* [CSS选择器的优化](http://www.w3cplus.com/css/css-selector-performance)
