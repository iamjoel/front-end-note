# 下滑无限加载的简单实现
## 各种高度的含义
* clientHeight 元素可视区域高度
* scrollTop 元素垂直方向滚动了的距离
* scrollHeight 元素的总高度

如图的所示
![size-describe](size-describe.gif)

## 实现
下滑无限加载的要实现是：滚动到元素下方小于指定距离的时候，加载更多内容。元素下方还有的距离的值为 `scrollHeight - clientHeight - scrollTop`。

算法为：监听元素的滚动事件，如果滚动到元素下方小于指定距离的时候，加载更多内容。

[实现](demo.html)

## 参考
* [html中offsetTop、clientTop、scrollTop、offsetTop各属性介绍](http://blog.csdn.net/fswan/article/details/17238933)


## 推荐阅读
* [6 jQuery Infinite Scrolling Demos](http://www.sitepoint.com/jquery-infinite-scrolling-demos/) 无限加载 grid 的列表，文章，图片带分页等。
