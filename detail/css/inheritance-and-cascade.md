# 样式的继承和层叠
## 继承

### 会继承的样式


## 层叠
某条样式的可以被多个

是否被采用，取决于：该样式是否是同类样式中，权重得分最大的。

### 选择器权重
各类选择器的权重得分
* 带 !important 的规则得分是最高的
* 行内样式（style="..."）1000分
* ID选择器 100分
* 类选择器，伪类选择器，属性选择器 10分
* 标签选择器，伪元素选择器 1分
* 通配选择器 0分
* 继承和浏览器默认的的样式的得分是最低的

更多可查看 http://css-tricks.com/specifics-on-css-specificity/

## 作业
给几个选择器，算结果

## 参考
https://docs.webplatform.org/wiki/tutorials/inheritance_and_cascade