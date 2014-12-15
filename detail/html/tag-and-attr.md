## HTML的常见标签及属性
## 目录
* [链接](#html_links)
* [标题](#header)
* [段落](#p)
* [图片](#img)
* [列表](#list)
* [标签](#label)
* [表格](#table)
* [表单](#form)
* [div](#div)
* [span](#span)
* [注释](#comment)
* [更多标签](#more)
* [拓展阅读](#reading)
* [作业](#homework)

## <a name="html_links">链接</a>
链接由 `<a>`定义。    
常用属性
* `href` 链接地址
* `title` 提示内容
* `name` 创建文档内的书签
* `target` 链接的文档在何处显示。
	* 默认在当前显示
	* `_blank` 在新窗口显示

更详细的介绍点[这里](http://w3school.com.cn/html/html_links.asp)


## <a name="header">标题</a>
1号到6号标题分别由 `<h1>`到`<h6>`定义。    

## <a name="p">段落</a>
段落是由 `<p>` 标签定义。

## <a name="img">图片</a>
图像由 `<img>` 标签定义。
常用属性
* `src` 图片地址
* `alt` 加载图片失败时，显示的文字

## <a name="list">列表</a>
有序列表由`<ol>`定义，列表的条目由`<li>`定义。如
```
<h3>最热单曲</h3>
<ol>
	<li>时间都去哪儿了</li>
	<li>泡沫</li>
	<li>卷珠帘</li>
</ol>
```

有序列表由`<ul>`定义，列表的条目由`<li>`定义。如
```
<h3>a的常见属性包括</h3>
<ul>
	<li>href</li>
	<li>title</li>
	<li>name</li>
	<li>target</li>
</ul>
```

## <a name="label">标签</a>
标签由`<label>`定义。常见属性
	* `for

## <a name="list">表格</a>
表格由`<table>`元素定义。一个普通的表格，如下：
```
<table>
	<thead>
		<tr>
			<th>姓名</th>
			<th>性别</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>路飞</td>
			<td>男</td>
		</tr>
		<tr>
			<td>索隆</td>
			<td>男</td>
		</tr>
		<tr>
			<td>香吉士</td>
			<td>男</td>
		</tr>
	</tbody>
</table>
```

## <a name="form">表单</a>
表单由`<form>`来定义。它用于把用户输入的数据提交到后台。常见属性    
* `action` 提交地址。
* `method` 提交方式。默认为GET

一个普通的表单
```
<form action="" method="POST">
	<div>
		<label for="">名称</label>
		<input name="name" type="text" placeholder="请输入名称">
	</div>
	<div>
		<label for="">介绍</label>
		<textarea name="des"></textarea>
	</div>
	<button type="reset">重置</button>
	<button type="submit">提交</button>
</form>
```

### 常见的表单输入元素有：    
*  表单元素  
* 文本框 `<input type="text">` 常见属性
	* `placeholder`
* 文本域 `<textarea></textarea>` 和文本框相比，可输入更多文字
* 单选框 `<input type="radio" name="gendar">` 。其中`name`的值一样的单选框只有一个能被选中
* 复选框 `<input type="radio" name="gendar">`
* 下拉选择框 `<select></select>`
* 提交按钮 `<button type="submit">提交</button>`
* 重置按钮 `<button type="reset">重置</button>`

注意：为了能让后台辨别不同的表单元素，表单元素输入必须加`name`属性

## <a name="div">div</a>
通用容器

## <a name="span">span</a>

## <a name="comment">注释</a>
注释由`<!-- 注释内容 -->`

## <a name="more">更多标签</a>
* strong
* pre
* code
* blockquote
* dl
	* dt
	* dd

## <a name="reading">拓展阅读</a>

## <a name="homework">作业</a>
* 学习页面 http://kejian.sinaapp.com/load.php?page=%E8%AF%BE%E4%BB%B6/04-HTML%E5%9F%BA%E7%A1%801 的HTML标签使用
* 用table元素做一个课程表
* 用户调查的页面。调查的内容包括：
	* 姓名
	* 性别 (单选按钮)
	* 所在国家 (下拉框)
	* 年龄　
	* 爱好 可多选 (复选框)
	* 自我介绍


http://kejian.sinaapp.com/load.php?page=%E8%AF%BE%E4%BB%B6/04-HTML%E5%9F%BA%E7%A1%801