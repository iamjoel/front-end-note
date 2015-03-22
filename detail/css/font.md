# 字体样式
## `font-style` 
属性定义字体的风格。可选值
* normal(默认值)
* italic 用字体的斜体属性
* oblique 让字体倾斜
* inherit 从父元素继承字体样式 

所有主流浏览器都支持 font-style 属性。
任何的版本的 Internet Explorer （包括 IE8）都不支持属性值 "inherit"

### italic 与 oblique的区别
一种字体有粗体、斜体、下划线、删除线等诸多属性。但是并不是所有字体都做了这些，一些不常用的字体，或许就只有个正常体，如果你用 italic，就没有效果了~这时候你就要用Oblique。
换种说法：italic 是指斜体字，而Oblique是让文字倾斜。对于没有斜体的字体应该使用Oblique属性值来实现倾斜的文字效果。对于有斜体属性的字，使用italic和oblique是一样的。

* `font`
* `font-family`
* `font-size`
* `font-weight` 字重
* `font-variant` (https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant)
* `font-stretch`
* `font-size-adjust`
* `@font-face`
* `text-transform`

字体的一些基础知识见[这里](../font/README.md)