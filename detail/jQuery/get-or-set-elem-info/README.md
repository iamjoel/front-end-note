# 获取和设置元素信息
## 属性
* .attr('属性名' [,值] )
* .prop('属性名' [,值] )
* removeAttr('属性名') 删除属性

attr 和 prop 的区别是： attr 在 DOM 中, 如 `$('a').attr('title')`, DOM: `<a title="aaa"></a>`)，prop 不一定在 DOM 中, `$('a').attr('tagName')`,但 a 没有 tagName 这个属性。

用 prop 的属性用
* checked
* outerHTML
* tagName

## 获取样式
* .css

## 获取尺寸
* .height
* .width

## 位置
* position
* offset

## 是否满足某个条件
.is。如是否可见
```
$(selector).is(':visible');
```

## 获取元素的innerHTML
```
$(selector).html();
```

## 获取元素的标签名
```
$(selector).prop("tagName").toLowerCase();
```
$(selector).prop("tagName")返回的为全大写的

## 获取元素的outerHTML
```
$(selector).prop('outerHTML');
```

## 获取元素的文本内容
```
$(selector).text();
```

## 获取元素的数据
.data

## 元素的显示隐藏
* .show
* .hide
* .toggle 切换显示，隐藏的状态
* 以动画的方式，显示隐藏
  * fadeIn, fadeOut, fadeToggle
  * slideUp, slideDown, slideToggle

