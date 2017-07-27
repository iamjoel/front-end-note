# html代码风格
## <a name='TOC'>目录</a>
1. [缩进](#indent)
1. [Doctype](#doctype)
1. [编码](#charset)
1. [网页优先采用Chrome渲染](#chrome)
1. [样式表文件](#css)
1. [脚本文件](#js)
1. [布尔值属性](#bool-attr)
1. [属性](#attr)
1. [url](#url)
1. [其他](#other)
1. [参考](#reference)

## <a name='indent'>缩进</a>
缩进用四个空格

## <a name='doctype'>Doctype</a>
使用`html5`的
```
<!DOCTYPE html>
```

## <a name='charset'>编码</a>
`<head>`的第一行放页面的编码
```
<meta charset="utf-8">
```
[返回顶部](#TOC)

## <a name='chrome'>网页优先采用Chrome渲染</a>
```
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
```
其中http-equiv=”X-UA-Compatible”这个是IE8的专用标记，是用来指定Internet Explorer 8 浏览器模拟某个特定版本IE浏览器的渲染方式，以此来解决IE浏览器的兼容问题。    
这代码的意思是    

1. 如果支持Google Chrome Frame(GCF)。则使用GCF渲染
1. 如果系统安装ie8或以上版本，则使用最高版本ie渲染

让国内的双核浏览器用`webkit`的内核来渲染
```
<meta name="renderer" content="webkit">
```
目前只有[360浏览器](http://se.360.cn/v6/help/meta.html)支持此 <meta> 标签。希望更多国内浏览器尽快采取行动、尽快进入高速时代！

Google Chrome Frame是IE上一个让IE能调用Chrome来渲染页面的插件。    
[返回顶部](#TOC)

## <a name='css'>样式表文件</a>
* 非特殊情况下样式文件须放至`<head>`。
* 引入样式表文件时, 须略去默认类型声明，如
```
<link rel="stylesheet" href="path/to/link">
```
[返回顶部](#TOC)

## <a name='js'>脚本文件</a>
* 非特殊情况下脚本文件须放至页面底部
* 引入脚本文件时, 须略去默认类型声明，如
```
<script scr="path/to/script"></script>
```
[返回顶部](#TOC)

## <a name='attr'>属性</a>
属性使用双引号    
[返回顶部](#TOC)

## <a name='bool-attr'>布尔值属性</a>
有些布尔值属性的值不需要被设置，如 `disabled`,`checked`。因此，不要设置它。即使要设置也要符合[规范](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes)。如

```
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
  <option value="1" selected>1</option>
</select>
```
[返回顶部](#TOC)

## <a name='url'>url</a>
* 省略协议。使用`<script src="//xxx"></script>`而不是`<script src="http://xxx"></script>`
* 在域名末尾加`/` 原因见 http://www.douban.com/note/214496506/    
[返回顶部](#TOC)

## <a name='other'>其他</a>
* 重要图片必须加上alt属性; 给重要的元素和截断的元素加上title
* 自闭合（如img，br）元素不需要在尾部添加斜线
* html的元素，属性，值，css选择器，选择器的属性和值使用小写字母
* 在页面模块的开始和结束加注释。如：
```
<!-- 幻灯 start -->
<div class="slide">...</div>
<!-- 幻灯 end -->

<!-- loding弹出层 start -->
<div class="loding">...</div>
<!-- loding弹出层 end -->

```
[返回顶部](#TOC)

## <a name='reference'>参考</a>
* [github templates guide](https://github.com/styleguide/templates)
* [google htmlcssguide](http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml)
* http://www.zhihu.com/question/19963993
* [网页头部的声明应该是用 lang="zh" 还是 lang="zh-cn"？](http://www.zhihu.com/question/20797118/answer/16809331)    
[返回顶部](#TOC)
