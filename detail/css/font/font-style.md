# 字体样式规则
## font-family
指定字体名称。字体名称之间用逗号分割。浏览器会使用第一个认识的字体。如
```
font-family: "Times New Roman", Times, serif;
```

## font-size
指定字体大小。如
```
p{
	font-size: 14px;
}
p small{
	font-size: 80%;
}
```

## color
指定文字的颜色。可选值见[这里](color.md)


## line-height
指定行高。如
```
p{
	line-height: 1.1em;
}
div{
	line-height: 24px;
}
```

## font-weight
指定字的粗细。可选值为
* inherit
* normal
* bolder（更粗）
* bold（粗）
* lighter（细）
* 100,200,300,400,500,600,700,800,900（值越大越粗，没有单位）

## font-style
属性指定字体的风格。可选值
* normal(默认值)
* italic 用字体的斜体属性
* oblique 让字体倾斜
* inherit 从父元素继承字体样式

所有主流浏览器都支持 font-style 属性。    
任何的版本的 Internet Explorer （包括 IE8）都不支持属性值 "inherit"

### italic 与 oblique的区别
一种字体有粗体、斜体、下划线、删除线等诸多属性。但是并不是所有字体都做了这些，一些不常用的字体，或许就只有个正常体，如果你用 italic，就没有效果了~这时候你就要用Oblique。    
换种说法：italic 是指斜体字，而Oblique是让文字倾斜。对于没有斜体的字体应该使用Oblique属性值来实现倾斜的文字效果。对于有斜体属性的字，使用italic和oblique是一样的。

## font
font由 font-style, font-variant, font-weight, font-size, line-height and font-family组成。
如
```
font: italic bold 1.5em/2 arial, Helvetica, sans-serif;
```

## text-align
指元素内文本的水平对齐方式。可选值
* left 左对齐
* right 右对齐
* center 居中对齐
* justify 两端对齐

## text-indent
指定缩进。如，段落缩进两个字符
```
p{
	text-indent: 2em;
}
```
隐藏文字可以用
```
.hide-text{
	text-indent: -99999px;
}
```

## text-decoration
对文本进行修饰。可选值
* none
* underline 下划线
* overline 上划线
* line-through 中划线

## vertical-align
用于垂直对齐inline元素，也就是display值为inline和inline-block的元素。这个属性比较复杂，见
* [[翻译]关于Vertical-Align你需要知道的事情](http://segmentfault.com/a/1190000002668492)
* [垂直居中之vertical-align详解](http://lingyu.wang/2014/04/13/vertical-align/)

## white-space
指定元素的内容中有空格时如何处理。    
比较多的用法是，当元素内容中没用空格时，禁止部分内容换行。
```
white-space: nowrap;
```

## 其他一些字体样式规则
* [font-stretch](https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch) 对字进行进行伸缩变形
* @font-face 定义字体
* text-transform 控制文本的大小写
* text-shadow 控制文本阴影效果
* font-variant 指定是否把小写字母转化成字号变小的大写字母

字体的相关知识见[这里](README.md)