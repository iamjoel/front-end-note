# SVG
## 什么是SVG
* SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
* SVG 用来定义用于网络的基于矢量的图形
* SVG 使用 XML 格式定义图形
* SVG 图像在放大或改变尺寸的情况下其图形质量不会有所损失
* SVG 是万维网联盟的标准
* SVG 与诸如 DOM 和 XSL 之类的 W3C 标准是一个整体

## 浏览器兼容性
Firefox， chrome， IE9+， 以及大部分手机浏览器。
更加见[Can I use](http://caniuse.com/#feat=svg)

## 注意点
* SVG的元素和属性必须按标准格式书写，因为XML是区分大小写的（这一点和html不同）
* SVG里的属性值必须用引号引起来，就算是数值也必须这样做。


## 内容
* [常见属性](overview/attr.md)
* [形状](overview/shape.md)
* [路径](overview/path.md)
* 文本
* 图案和渐变
* 裁剪和mask
* 滤镜
* 座标系转化（transform）
* 动画

## 形状的通用属性
* fill 填充
* stroke 边的颜色
* stroke-width 边的宽度
* stroke-opacity: 边的透明度
* opacity: 内容的透明度

## 库
* [Snap.svg](http://snapsvg.io/) SVG 界的 jQuery。

## 学习资源
* 《SVG 精粹》
* [MDN SVG 教程](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial)
* [svg in w3schools](http://www.w3cschool.cc/svg/svg-intro.html)
* [svg in webplatform](http://docs.webplatform.org/wiki/svg/tutorials)
* [svg动画](http://css-tricks.com/guide-svg-animations-smil/)
* [Styling & Animating SVGs with CSS](http://slides.com/sarasoueidan/styling-animating-svgs-with-css--2#/1)