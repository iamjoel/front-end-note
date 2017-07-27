# html代码风格简洁版 [详细版](html-style.md)
* 缩进用四个空格
* 头部必须包含[注1](#describe)的内容
* 样式表文件
	* 非特殊情况下样式文件须放至`<head>`
	* 引入样式表文件时, 须略去默认类型声明
* 脚本文件
	* 非特殊情况下脚本文件须放至页面底部
	* 引入脚本文件时, 须略去默认类型声明
* 属性使用双引号
* 有些布尔值属性的值不需要被设置，如 `disabled`,`checked`。
* URL
	* 省略协议。使用`<script src="//xxx"></script>`而不是`<script src="http://xxx"></script>`
	* 在域名末尾加`/` 原因见 http://www.douban.com/note/214496506/
* 重要图片必须加上alt属性; 给重要的元素和截断的元素加上title
* 自闭合（如img，br）元素不需要在尾部添加斜线
* html的元素，属性，值，css选择器，选择器的属性和值使用小写字母
* 在页面模块的开始和结束加注释

## <a name="describe">注1</a>
```
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="renderer" content="webkit">
</head>
```

