# HTML 介绍
## 目录
* [HTML是神马](#what)
* [基本结构](#struct)
* [标签(也叫元素)](#tag)
* [拓展阅读](#reading)

## <a name="what">HTML是神马</a>
HTML（超文本标记语言，英文：HyperText Markup Language）是一种标记语言。是为了能在浏览器中显示信息设计的。

HTML文件的拓展名为`html`。

## <a name="struct">基本结构</a>
网页是的一系列的标签组成的。    
例如
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>标题</title>
</head>
<body>
	<h1>My First Heading</h1>
	<p>My first paragraph.</p>
</body>
</html>
```
其中
* DOCTYPE定义了文档类型。`<!DOCTYPE html>`表明这是一个HTML5文档
* `<html>`和`</html>`之间的内容描述了网页
* `<head>`和`</head>`之间的内容描述了网页的一些额外信息。不会被显示
* `<title>`之间的内容描述了网页的标题。会在网页标签上显示
* `<meta charset="utf-8">`让浏览器用utf-8的编码格式来对文档内容进行编码
* `<body>`和`</body>`之间的内容描述网页的可见部分
* `<h1>`和`</h1>`之间的内容描述标题
* `<p>`和`</p>`之间的内容描述了段落

## <a name="what">标签(也叫元素)</a>
标签分为能包含标签内容和不能包含标签内容这两类。    

**能包含内容的标签**由开始标签，结束标签，标签属性，标签的内容组成的。例如：
```
<a href="http:www.baidu.com" title="Baidu一下">百度</a>
```
其中:    
* `<a href="http:www.baidu.com" title="Baidu一下">`为起始标签
* `</a>`为结束标签
* `href`和`title`为标签属性，`http:www.baidu.com`和`Baidu一下`为属性对应的值。属性的值要由英文的双引号包起来。
* `百度`为标签的内容。

**不能包含内容的标签**被称为空元素。空元素是在开始标签中关闭的。    
如 `<br/>`, `<input type="text" />`

## <a name="reading">拓展阅读</a>
* [什么是超文本？](http://w3school.com.cn/tags/tag_term_hypertext.asp)
* [DOCTYPE和浏览器渲染模式](quirks-mode-and-standards-mode.md)