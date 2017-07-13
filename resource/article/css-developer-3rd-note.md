# 第三届 CSS 开发者大会笔记
这次大会于 2016 年 12 月 17 日在广州的天虹酒店举办。演讲嘉宾有大漠，勾三股四等一些业界大牛们。特邀嘉宾有 Andrey Sitnik（PostCSS 的作者）和 Hax（贺师俊）。

主持人是[裕波](http://weibo.com/itchina100)。他的主持风格很有特色~

在会议的开头，特地播放了 CSS之父 Håkon Wium Lie录制的一段视频，其简单提及了CSS的发展历史和现状，并对CSS的未来有更多期许。

[官网](https://css.w3ctech.com/)。

## 第一场：[4.20 Things I Didn’t Know About CSS](https://img.w3ctech.com/slide/4.20%20things%20I%20didn%E2%80%99t%20know%20about%20CSS.pdf)
### 演讲者信息
Mathias Bynens。一个喜欢 HTML, CSS, JavaScript, Unicode, 性能 和安全的家伙。来自比利时。[Github](https://github.com/mathiasbynens)。

### 主要内容
#### CSS 使用小技巧
如，我们有下面的代码
```html
<div class="foo">
  <div class="bar"></div>
</div>
```

```css
.foo .bar{
  background: red;
}
.bar{
  background: green;
}
```

生效的是第一条样式。如果要让第二条生效，可以这么写
```
.bar{
  background: green !important;
}
```

不推荐这么写。因为这么写后，别的地方就覆盖不了。可以这样写
```
.bar.bar{
  background: green;
}
```

#### CSS 的选择器中特殊字符的处理
如数字开头的类名
```
<div class="404-page"></div>
```

选择器直接写 `.404-page` 是不生效的，要这么写 `.\34 04-page`。

原理见 [CSS character escape sequences](https://mathiasbynens.be/notes/css-escapes)。

更多见 [Web developer tools](https://mothereff.in/) 的 Validators, generators and converters。

#### CSS 很强大
具体见
* [You might not need js](http://youmightnotneedjs.com/) ：用 CSS 实现要 幻灯，表单验证等效果。
* [HTML Kong](https://www.xn--8ws00zhy3a.com/blog/2016/07/html-kong) 用 HTML 和 CSS 做的大金刚游戏。

#### CSS 中的 XSS
如果样式表中有些部分是来自用户的输入。如果程序不做验证，那就可以 XSS。下面展示一个让IE10- 中招的 payload。
HTML中加

```
<!-- 用 IE7 来渲染页面。因为该payload 只对 IE7-有用，加了这个可以让 IE10- 的有用。 -->
<meta http-equiv="X-UA-Compatible" content="IE=7" />
```

CSS 中
```
.foo {
  color: expression(用户带着恶意的js);
}
```

避免可以这种 XSS， 可以对用户的输入用 [CSS.escape](https://github.com/mathiasbynens/CSS.escape) 处理下。

有一些让页面样式变得很搓的 payload，见 [evil.css](https://github.com/tlrobinson/evil.css)。

***

##  第二场：[CSS Grid Layout](https://img.w3ctech.com/slide/CSS-Grid-Layout.pptx)
### 演讲者信息
大漠。CSS专家、阿里巴巴前端技术专家。“不会JS的CSS专家”（玩笑~）,说着一口“胡建”普通话XD。

### 主要内容
用 Grid 来进行布局的介绍。

#### Grid Layout历程
* 2010年微软提出，并且在IE10实现
* 2015.3.2，chrome支持
* 2016.9.29成为w3c候选标准
* 2017.3将会被各大主流浏览器支持

目前(2017.3前)使用 Grid 来进行布局，浏览器要启用实验特性的 flag。在实际项目中使用 Grid 来布局还需要一段时间（可能是 2 到 3年）。

#### Grid 术语
网格容器,网格项目,网格线,网格轨道（Grid Tracks）,网格单元,网格区域,网格间距。

#### Grid 和 Flex 比较
Grid 定义两个维度， 更适合大模块的排布布局。Flex 定义一个维度， 更适合内部内容布局。 在做一些布局时，可以同时使用 Grid 和 Flex。如 做类似瀑布流的卡片。卡片的布局用 Grid，卡片内部的布局 Flex。

#### 相关资源
* 大漠演示的一些DEMO
  * [Define a Grid](http://codepen.io/airen/pen/ENQZLx)
  * [Grid 实现网格系统](http://codepen.io/airen/pen/WoMRVL)
* [CSS Grid Layout Example](https://github.com/airen/grid-layout)
* [Grid 教程](http://www.w3cplus.com/blog/tags/355.html)

***

##  第三场：[闪电分享](https://img.w3ctech.com/slide/CSS%20in%20Native%20-%20CSSConf%20Guangzhou%202016.pdf)
### 演讲者信息
勾三股四。阿里前端开发专家。

### 主要内容
介绍了 [weex](https://github.com/alibaba/weex) 的工作原理，在 CSS 方面的支持和weex的优势。

需要注意的是 weex不支持 CSS 的继承(CSS 是否需要继承，存在争议)。

weex 目前已经捐给了 apache 基金会。其希望受基金会管理，使其开发流程更规范。尤雨溪做为顾问加入了 weex 的开发。

个人还是挺看好 weex 的。

***

## 第四场： [Sass & CSS Design Pattern](https://img.w3ctech.com/slide/SASS-china.pdf)
### 演讲者信息
廖洧杰。台湾六角学院的校长，台湾国立高雄大学资讯管理学系前端兼任讲師、业界讲师。

### 主要内容
样式的工程化，怎么利用工具，mixin库，base，reset以及模块化编写样式。不同角色和团队，眼里的职能和能力范围，团队协作需要注意的东西等。

他建议我们要丰富自己的代码片段库和工具。

***

## 第五场：[微信网页重构实践](https://img.w3ctech.com/slide/tlakaboutwebmessage.pptx) &&[SVG工程化](http://weixin.github.io/resources/slide/cssconf2016/doubleluo/index.html#/)  && [SVG动画实践](http://weixin.github.io/resources/slide/cssconf2016/nikki/html/slides.html)
罗正烨、方潇仪，倪栩生。他们都是微信前端工程师。

其中，倪栩生热爱漂移，他自嘲，最近去漂移了几百公里，现在能看到他站在这里就是个奇迹XD。从 PPT 可以看出，他是[神飞](https://www.qianduan.net/author/mienflying/)的好基友。

### 主要内容
#### 为什么现在可以用 SVG
* 主流浏览器都支持 SVG
* PhotoShop 支持导出为 SVG。要用 PhotoShop 导出为 SVG 的话，需要做图的时的一些技巧。并且，SVG 比 原图会亮（锐利）一点（原图会有一些半透明的过渡像素，SVG 的像素都是精确的）。当然，用矢量的设计工具，如 Sketch 和 AI 导出 SVG 效果比较好。

对于不支持浏览器，则使用 png。

#### SVG 的优势和劣势
优势：
* 色彩靓：1600万色
* 质量高： 任意缩放
* 尺寸小： 只有 png 的 1/5
* 可以动： 很会动。SVG 可以做一些 DOM 做不了的动画。

如果图片精灵用 rem 做单位，在有些情况下会出现少 1px 的情况（rem 转化为 px 时，小数的问题）。SVG 不会出现这种情况。

劣势：
渲染比 png 慢。但对于大部分情况，慢的时间可以忽略不计。路径动画，路径在 20 条以下的不会用性能问题。

#### SVG 的简单用法
常用标签的介绍。形状标签，图案填充，滤镜等。

#### 一些 SVG 动画的实现细节
包括描线动画、变形动画、路径运动、图案填充、滤镜(SVG 的滤镜比 CSS 的滤镜强大太多)。

需要注意的是，要做动画的SVG，必须内联。因为 JS 只能修改内联的 SVG。

#### 推荐的一些工具
* [svgo](https://github.com/svg/svgo) 减小 SVG 文件的体积。
* [Snap.svg](http://snapsvg.io/) 被称为 SVG界 的 jQuery。
* [SVG Morpheus](https://github.com/alexk111/SVG-Morpheus) 做变形动画的库。
* [Greensock 的 morphSVG](http://greensock.com/morphSVG) 更强大的做变形动画的库。收费。
* [tmt-workflow](https://github.com/weixin/tmt-workflow) 工作流工具。
* [WeFlow](https://github.com/weixin/WeFlow) 工作流工具。

#### 微信网页重构实践
信息和网页的关系，网页是信息上下文的情景重现等。

***

## 第六场：[从矩阵走入 WebGL 世界](https://jasonchen1982.github.io/web-ppt/cf2-sharing/#/)
### 演讲者信息
陈剑鑫。阿里移动事业群 - UC RED设计中心 高级前端工程师。

### 主要内容
所有的变换都可以用矩阵表示。展示了一大堆酷炫，屌炸天的 demo。

***

## 第七场：[CSS的隐藏绘画功能和交互动画技巧](https://img.w3ctech.com/slide/cssicon-wentin.pdf)
### 演讲者信息
Wenting Zhang。CSS ICON && underline.js作者、工作于 Adobe Typekit。同时会设计和前端的女神。

### 主要内容
用 Live Coding 的方式给我们现场展示了如何用一个 div 与 CSS 实现一个胡子可爱的胡子。然后通过 JS 修改 CSS 变量的值，来让胡子做一些动画。这也就是 CSS 变量相比 Sass 变量的一个优势：Sass 变量的值不能通过JS来修改。


她推荐可以通过画图标来提高 CSS 水平。她在拖延症犯的时候，就画个图标。目前已经画了 512 个图标，见 [CSS ICON](http://cssicon.space/)。


![ Live Coding 的胡子](http://upload-images.jianshu.io/upload_images/16777-3f39092ce2bae70b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

我很喜欢她设计的适合 CSS 的字体: [CSS-Mono](https://github.com/wentin/CSS-Mono)。上图中的 CSS 字体就是 CSS-Mono。

## 其他
* [知乎：参加2016年12月17日广州第三届 CSS Conf 大会是个什么样的体验？](
![css大会.jpg](http://upload-images.jianshu.io/upload_images/16777-67b42b2dd21c955d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
)

最后，放张合影。

![css大会合影](http://upload-images.jianshu.io/upload_images/16777-5b6c12a9ca0271f1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)