# [jQuery](http://jquery.com/)
* [官方API文档](http://api.jquery.com/)
* [jQuery API 速查](https://oscarotero.com/jquery/)
* [You Might Not Need jQuery](https://github.com/HubSpot/YouMightNotNeedjQuery) 高级浏览器中的JS API来实现jQuery的一些API

## 目录
* [jQuery 介绍](about.md)
* jQuery 核心
  - [选取元素](select-elem/)
  - [获取或设置元素信息](get-or-set-elem-info/)
* [事件](event)
* 动画
* Ajax
* [Deferred](deferred)
* [工具方法](utilities.md)
* 插件
* 最佳实践
  - [选择器的优化](performance/optimize-selectors.md)



## 常见问题
* DOM 元素与 jQuery 元素的如何互相转换
```
// DOM -> jQuery
var dom = document.getElementById('elem');
var $dom = $(dom);

// jQuery -> DOM
var $dom = $('#elem');
var dom = $dom[0];
```
* 获取选中的下拉框的文本内容
```
$( "#myselect option:selected" ).text();
```

## 资源
* [官方学习中心](http://learn.jquery.com/)
* [jQuery官方推出的教学视频-翻译](http://blog.jobbole.com/37699/)
