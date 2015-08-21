# XSS
XSS（Cross-site scripting）跨站脚本攻击。



## XSS一些总结
* 用户输入的内容直接输出在文本输入框。绕过方式：输入内容可以用`">`来闭合文本框，后面加的东西你可以随意的啦
* 用户输入的内容输出前，会用正则删除标签。绕过方式：用img标签，并且不带`>`,HTML的容错性会补全，如：`<img  onerror=console.log('xss') `
* 用户输入的内容输出前，会删除`[=(]`。绕过方式：`<svg><script>console.log&#40;'xss')</script>`。原因是svg标签里的script会被执行，并且执行前会将script里的内容HTML实体进行解码，即，`&#40`会被替换为`(`
* 用户输入的内容替换`->`后输出在HTML注释中。绕过方式：用`--!>`也可以结束HTML注释

## 其他
如果在request的请求和response响应中包含相同的script可执行的脚本，chrome，Firefox以及高版本IE都会进行拦截

## 工具
* [html5sec](http://html5sec.org/) 对输入框内容的过滤
* [OWASP Xenotix XSS Exploit Framework](http://xenotix.in/) 渗透测试必备之xss自动化测试框架

## 练习
* [XSSChallengeWiki](https://github.com/cure53/XSSChallengeWiki/wiki)
	* [挑战（英文版）](https://github.com/cure53/XSSChallengeWiki/wiki/prompt.ml)
	* [挑战（中文版）](http://www.bugsec.org/4526.html)

## 拓展阅读
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