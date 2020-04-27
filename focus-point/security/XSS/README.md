# XSS
XSS（Cross-site scripting）跨站脚本攻击。

XSS只要包括反射型XSS和储存型XSS。     

反射型：将恶意脚本代码加入 URL 中，当 URL 被打开时，特有的恶意代码参数被执行。它的特点是非持久化，必须用户打开带有特定参数的链接才能触发。
注：如果在request的请求和response响应中包含相同的script可执行的脚本，chrome，Firefox以及高版本IE都会进行拦截。因此，页面代码只是把请求参数的某部分输出到DOM这样的漏洞，肯定会被拦截。

储存型（持久型）:代码是存储在服务器中的，如在个人信息或发表文章等地方，加入代码，如果没有过滤或过滤不严，那么这些代码将储存到服务器中，用户访问该页面的时候触发代码执行。

[DOM Based XSS](https://www.owasp.org/index.php/DOM_Based_XSS): 恶意通过改变 DOM 来实施攻击。

## 找漏洞的方式
* 找可以输入内容的点。url地址，各种输入框。
* 观察输出输入的内容，是在那边输出的。有的会做为文本输出，有的在属性中输出，有的进入js。
* 加一些攻击代码，看网站是怎么处理的。如果不生效，根据结果判断，是做的怎样的过滤，修改攻击代码，直到能生效为止。
* 如果可能的话，能在页面上插入一个不缓存的js（probe.js），来实现远程控制网站。

## 恶意的 JS 代码或做什么
* 收集用户的敏感信息，如 cookie，用户键盘输入
* 发 HTTP 请求。将收集的敏感信息发到攻击者的服务器
* 修改 DOM 元素。可以构造一些钓鱼的表单；或修改原表单的提交地址

## 绕过技巧
### 输出在属性上
尝试闭合属性和标签，然后可以构造自己的标签。

### 其他
* 用户输入的内容直接输出在文本输入框。绕过方式：输入内容可以用`">`来闭合文本框，后面加的东西你可以随意的啦
* 用户输入的内容输出前，会用正则删除标签。绕过方式：用img标签，并且不带`>`,HTML的容错性会补全，如：`<img  onerror=console.log('xss') `
* 用户输入的内容输出前，会删除`[=(]`。绕过方式：`<svg><script>console.log&#40;'xss')</script>`。原因是svg标签里的script会被执行，并且执行前会将script里的内容HTML实体进行解码，即，`&#40`会被替换为`(`
* 用户输入的内容替换`->`后输出在HTML注释中。绕过方式：用`--!>`也可以结束HTML注释



## 其他
* 搜 location.search

## 防御
推荐用这个库 [DOMPurify](https://github.com/cure53/DOMPurify)

## 工具
* [html5sec](http://html5sec.org/) 对输入框内容的过滤需要注意的
* [OWASP Xenotix XSS Exploit Framework](http://xenotix.in/) 渗透测试必备之xss自动化测试框架

## 编码
js出现在html标签中，如果js中有html的编码（
html 编码 包括实体编码和16或10进制编码），会被还原。如
```
<!-- 实体编码 -->
<button onclick="x='&lt;img src=@ onerror=alert(2) /&gt;';document.write(x)">点我</button>
<button onclick="x='&#000060img src=@ onerror=alert(2) /&gt;';document.write(x)">点我</button>
```



<>

## 练习
* [XSSChallengeWiki](https://github.com/cure53/XSSChallengeWiki/wiki)
	* [挑战（英文版）](https://github.com/cure53/XSSChallengeWiki/wiki/prompt.ml)
	* [挑战（中文版）](http://www.bugsec.org/4526.html)

## 拓展阅读
* [Excess XSS](http://excess-xss.com/) A comprehensive tutorial on cross-site scripting
* [心伤的瘦子的XSS](http://www.wooyun.org/whitehats/%E5%BF%83%E4%BC%A4%E7%9A%84%E7%98%A6%E5%AD%90)
* [XSS 前端防火墙 —— 内联事件拦截](http://fex.baidu.com/blog/2014/06/xss-frontend-firewall-1/)
* [XSS 前端防火墙 —— 可疑模块拦截](http://fex.baidu.com/blog/2014/06/xss-frontend-firewall-2/)
* [XSS 前端防火墙 —— 无懈可击的钩子](http://fex.baidu.com/blog/2014/06/xss-frontend-firewall-3/)
* [XSS 前端防火墙 —— 天衣无缝的防护](http://fex.baidu.com/blog/2014/06/xss-frontend-firewall-4/)
* [XSS 前端防火墙 —— 整装待发](http://fex.baidu.com/blog/2014/06/xss-frontend-firewall-5/)
* [XSS与字符编码的那些事儿 ---科普文](http://drops.wooyun.org/tips/689)
* [XSS Payload知识备忘](http://freewifi2.lofter.com/post/1cbcc53d_408791b)
* [专注XSS三十年](http://www.wooyun.org/whitehats/%E4%B8%93%E6%B3%A8XSS%E4%B8%89%E5%8D%81%E5%B9%B4)
* [乌云上 反射型xss标签](http://www.wooyun.org/tags/%E5%8F%8D%E5%B0%84%E5%9E%8Bxss/page/1)
	* 在Google中搜索 "等待厂商处理 xss site:http://www.wooyun.org/"
