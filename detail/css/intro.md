# CSS介绍
CSS 指层叠样式表 (Cascading Style Sheets)。    

## 样式
样式定义了HTML元素的外观。如：
```
.intro{
    float: left;
    width: 100px;
    color: #ff0;
}
```
其中：     

* `.intro` 为选择器。用其选择一系列的元素
* `float,width,color`为样式规则
* `left,100px,#f00`为样式规则的值

## 层叠
对同一个元素来，可以用多种选择器来选择它。如对于一个如下的元素：
```
<div class="box" id="play-music-box"></div>
```
以下的选择器均可以选择它    

* `div`
* `.box`
* `#play-music-box`

每个选择器的都可以定任意的规则。因此，有这样的可能，不同选择器都定义了一样的规则，但样式规则的值是不同的。这时，元素会怎么显示这规则？报错？啥都不显示？还是？

答案是：元素显示权重高的选择器中定义的那条规则。

