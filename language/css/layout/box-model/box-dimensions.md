# 盒模型
页面上显示的每个元素（包括内联元素）都可以看作一个盒子，即盒模型( box model )。请看Chrome DevTools 里的截图：    
![盒模型](box-model.png)

盒模型由 4 部分组成。从内到外分别是
```
content -> padding -> border -> margin
```

## 盒模型占的空间计算规则
不同的盒模型占的空间计算规则是不一样的。

盒模型的默认类型是 content-box。占的宽度为 水平方向的 border，padding 值 加 width，占的高度为 垂直方向的 border，padding 值 加 height。

盒模型的另一个类型是 border-box。占的宽度为 width，占的高度为 height。


## 设置核模型
用 box-sizing 来设置盒模型。 如
```
box-sizing: border-box;
```

## 参考
* [CSS 最核心的几个概念](http://www.jianshu.com/p/3a18fcd9fcda?search_token=079525c515d193f008c9963224ab3a325b80f147b50ce129113c3a88f75b8bfa)
