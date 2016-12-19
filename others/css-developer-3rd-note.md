# 第三届 CSS 开发者大会笔记
这次大会于2016年12月17日在广州的天虹酒店举办。演讲嘉宾有 大漠，勾三股四等一些业界大牛们。特邀嘉宾有 Andrey Sitnik（PostCSS 的作者）和 Hax（贺师俊）。

## 3.14 Things I Didn’t Know About CSS
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

不推荐这么写。因为这么写后，别的地方就覆盖不了。小技巧是可以写
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


## CSS Grid Layout
### 演讲者信息
大漠。CSS专家、阿里巴巴前端技术专家。说着一口“胡建”普通话XD。

### 主要内容


## 闪电分享
### 演讲者信息
勾三股四。阿里前端开发专家。

### 主要内容

## Sass & CSS Design Pattern
### 演讲者信息
廖洧杰。台湾六角学院的校长，台湾国立高雄大学资讯管理学系前端兼任讲師、业界讲师。

### 主要内容


## 微信网页重构实践 && SVG工程化与动画实践
### 演讲者信息
罗正烨、方潇仪，倪栩生。他们都是微信前端工程师。

### 主要内容


## 从矩阵走入 WebGL 世界
### 演讲者信息
陈剑鑫。阿里移动事业群 - UC RED设计中心 高级前端工程师。

### 主要内容

## CSS animation && CSS: The secret drawing tool
### 演讲者信息
Wenting Zhang。CSS ICON && underline.js作者、工作于 Adobe Typekit。同时会设计和前端的妹子。

### 主要内容
live coding 了做一个胡子。


## 其他
* [参加2016年12月17日广州第三届 CSS Conf 大会是个什么样的体验？](https://www.zhihu.com/question/53068799/answer/136491905)

