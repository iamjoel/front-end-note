# 浮动
## 什么是浮动
浮动(Float)可用于实现文字环绕效果
![浮动](../../../asset/float/float.png)

语法
```
float: left|right|none;
```

## 用浮动来做布局


## 浮动的影响

![浮动的影响](../../asset/float/effect.png)

## 如何去除浮动的影响
在浮动元素的父节点加`clearfix`的类名。`clearfix`的定义如下：

```
.clearfix:before, .clearfix:after {
    content: " ";
    display: table;
}
.clearfix:after {
    clear: both;
}
.clearfix {
    *zoom: 1;
}
```


## 参考
* http://zh.learnlayout.com/float-layout.html
* https://css-tricks.com/all-about-floats/