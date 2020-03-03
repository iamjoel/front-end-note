# 成为高级前端，必知必会的知识和技能
前端的知识多如牛毛。如果没有目的的学，

蛋清和蛋黄的比喻。蛋黄。

实现功能，质量(为了以后的效率)，效率，安全

本文的目标读者是，至少会写简单页面的前端。文章涵盖内容不包括写简单页面需要的知识和技能。

# 知识点
## 熟悉W3C标准
在找工作的时候，大家经常看到招聘信息有一条：“熟悉W3C标准”。什么是W3C标准？
> W3C标准是W3C(万维网联盟,World Wide Web Consortium) 制定的一系列Web技术标准。标准包括：语义Web, SVG, CSS, WOFF, 及XML和各类APIs。

W3C标准的目标是为各类应用的开发打造一个开放的Web平台。

W3C相关链接:
* [W3C-中国 官网](http://www.chinaw3c.org/standards.html)
* [W3C 所有的标准和草案](https://www.w3.org/TR/?status=rec)
* [W3C重点报告（2018年10月版）](https://www.w3.org/2018/10/w3c-highlights/cn.Overview.html)
* [W3C HTML标准验证工具](https://validator.w3.org/unicorn/) 用来检查页面是否满足W3C标准。

还有个制定Web规范的组织叫[WHATWG](https://whatwg.org/)(Web Hypertext Application Technology Working Group)。

W3C曾意图放弃HTML，发展XML。WHATWG从2004年起，就开始力推HTML标准。直到2007年W3C才接受WHATWG的HTML5标准。虽然此后两个组织名义上是在一起工作，其实暗地里有很大的分歧。

WHATWG相关链接：
* [HTML Living Standard](https://html.spec.whatwg.org/multipage/)
* [WHATWG HTML标准验证工具](https://whatwg.org/validator/)

需要熟悉W3C标准的原因：
* 有利于写出高质量的代码。规范中，有很多技术使用的最佳实践，值得参考学习。
* 有利于拓展自己的Web知识的广度，提高解决问题的能力。

## HTML
### 能写符合W3C标准的HTML
W3C标准关于HTML的内容很长，这边列几个我觉得重要的：
* HTML文档必须有文档类型定义(DTD)。规范推荐使用:`<!DOCTYPE html>`。
* 所有标签中的字母必须是小写字母。
* 标签属性值用双引号包起来。
* 标签必须闭合。自闭合标签，以 / 闭合标签，如 `<input type="text" />`。
* 自定义属性名，以 `data-` 开头。
* img 标签的 alt 属性必填。图片加载失败时，会显示 alt 属性的值。

可以用[HTML标准验证工具](https://validator.w3.org/unicorn/)检查，HTML 是否符合W3C标准。

### 能熟练使用语义化(Semantic)标签
标签语义化(Semantic)指根据内容的语义，去选择与之匹配的标签。

使用语义化标签的原因：
1. 有利于开发者维护代码。语义化标签能提升代码的可读性，让开发者更快找到目标代码。
2. 有利于SEO。爬虫通过语义化标签，能抓取更多页面的信息。

常用的语义化标签有：header, footer, aside, section, article, hgroup, h1\~h6, nav, strong, small。推荐通读下[HTML Living Standard](https://html.spec.whatwg.org/multipage/)。

尽量不用 div 和 span 这2个没有实际意义的标签。

### 了解转义字符
在 HTML 中，有一些预留的字符。要显示这些预留字符，必须用转义字符来。如，直接输入保留字符`<`，浏览器并不会显示`<`，因为浏览器会误认为`<`是标签的开始。

常见的预留字符及写法：
* <: &lt;
* >: &gt;
* 空格: &nbsp;
* 

### 了解文档类型定义(DTD)和渲染模式
浏览器根据文档类型定义来决定该用何种渲染模式来渲染页面。文档类型定义写在HTML的第一行，如:
```
<!DOCTYPE html>
```

渲染模式指渲染页面的方式。出现渲染模式的目的的为了兼容一些老旧（不符合w3c标准）的的页面。浏览器中有三种渲染模式: 怪癖模式（quirks mode），接近标准模式（almost standards mode）和标准模式（standards mode）。不同渲染模式介绍见[怪异模式和标准模式(MDN)](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)。

## CSS
flex，POS，响应式布局，rem，媒体查询

## jQuery

## 熟练使用一个框架
模板的循环
绑定事件

## 构建工具
npm，webpack

# 技能
## 决策的能力
什么重要，什么不重要。选什么框架，什么技术栈，对新知识敏感，

## 独立解决问题的能力


## 学习能力