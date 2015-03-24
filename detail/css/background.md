# 背景样式规则
## backgroud-color
指定背景色。可选值见[这里](color.md)

## background-image
指定背景图片。可选值
* inherit 继承
* none (默认)
* url(...)

如
```
background-image: url(someimage.jpg);
```
其中`someimage.jpg`为图片地址

## background-repeat
指定背景图的重复。可选值
* inherit
* repeat (默认) 在水平和垂直方向都重复
* repeat-x 在水平方向重复
* repeat-y 在垂直方向重复
* no-repeat 不重复

## background-position
指定如何定位背景图像。可选值
* top left
* top center
* top right
* center left
* center center
* center right
* bottom left
* bottom center
* bottom right
* x% y%
* xpos ypos

具体的解释见[这里](http://www.w3school.com.cn/cssref/pr_background-position.asp)

## background-attachment
如何设置固定的背景图像。可选值
* scroll 默认值。背景图像会随着页面其余部分的滚动而移动
* fixed 当页面的其余部分滚动时，背景图像不会移动
* inherit

## background
设置所有背景属性。如
```
background: #00FF00 url(bgimage.gif) no-repeat fixed center top;
```


