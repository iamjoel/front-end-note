## 面试题之答案
问题选自[这里](https://github.com/h5bp/Front-end-Developer-Interview-Questions/tree/master/Translations/Chinese#html)
## doctype（文档类型）的作用是什么？
告诉浏览器用何种渲染模式来渲染页面。

在浏览器中有三种渲染模式: 怪癖模式（quirks mode），准标准模式（almost standards mode）和标准模式（standards mode）。

## 浏览器标准模式和怪异模式之间的区别是什么？
在怪癖模式下，浏览器会模拟Navigator 4和IE5的方式来渲染页面。
在标准模式下，浏览器会用HTML和CSS规范定义的方式来渲染页面。

怪癖模式带来的影响主要是CSS布局。主要包括：
*  CSS 盒模型。在某些浏览器(如IE)的怪癖模式下，盒模型（box model）变成[IE5.5的盒模型](http://css.kentucka.com/?box_model)（IE5.5的盒模型的宽和高包括padding和border,即 border-box）。而标准模式的盒模型的宽高是不包括padding和border的
* 某些行内 (inline) 元素的垂直对齐的处理。很多早期的浏览器对齐图片至包含它们的盒子的下边框，虽然 CSS 的规范要求它们被对齐至盒内文本的基线。标准模式下，基于 Gecko 的浏览器将会对齐至基线，而在 怪癖模式下它们会对齐至底部。
* 表格样式是否继承。

## 使用 XHTML 的局限有哪些？
XHTML要求严格。元素必须被正确地嵌套，元素必须被关闭，空标签也必须被关闭，标签名和属性对大小写敏感，属性名称必须小写，属性值必须加引号等。一旦遇到错误，立刻停止解析，并显示错误信息。

## 如果页面使用 'application/xhtml+xml' 会有什么问题吗？
IE6，7，8不支持，IE6，7，8支持text/html。

## 如果网页内容需要支持多语言，你会怎么做？
编码使用UTF-8，空间域名需要支持多浏览地址，准备多套模板。(对多语言这方面不熟悉)

## 在设计和开发多语言网站时，有哪些问题你必须要考虑？
见 [7 Tips and Techniques For Multi-lingual Website Accessibility](http://www.nomensa.com/blog/2010/7-tips-and-techniques-for-multi-lingual-website-accessibility)

## data-属性的作用是什么？
在元素上存放数据。

## 如果把 HTML5 看作做一个开放平台，那它的构建模块有哪些？
* 标签及属性
* 地理位置
* 画布
* 视频
* 音频
* 拖放
* 微数据
* 应用缓存
* Web存储
* web workers
* 服务器发送事件

## 请描述一下 cookies，sessionStorage 和 localStorage 的区别？
cookies 和 Storage 的区别：
* cookies会在服务器端和客户端间传递的；sessionStorage 和 localStorage存放在客户端的，不会发送至服务器端
* cookies的兼容主流浏览器,包括IE6+;IE6，IE7不支持sessionStorage 和 localStorage
* sessionStorage 和 localStorage中能存的数据比cookie大

sessionStorage 和 localStorage的区别：
sessionStorage存的数据在每次关闭浏览器后被删除，localStorage不会。

## 请描述一下 GET 和 POST 的区别?
* GET是获取资源,POST是新建资源
* GET 请求可被缓存,POST不能
* GET 请求保留在浏览器历史记录中,POST不能
* GET 请求有长度限制,POST没有

## 推荐其他人的答案
* [witcher42](http://witcher42.github.io/2014/06/04/front-end-developer-interview-questions/)
* [voidove](https://github.com/voidove/jug-jug/labels/interview)
