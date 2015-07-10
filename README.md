# web前端学习笔记 [下载](https://github.com/iamjoel/front-end-note/archive/master.zip)
## 关于本项目
存放HTML，CSS，JS等WEB前端基础知识。    

学习前端的每天计划，点[这里](http://www.jianshu.com/p/fa7611d73a9a)。

## 知识点
* [了解前端](detail/about.md)
* [给新手的建议](detail/suggest.md)
* [软件推荐](others/software.md)
* [前端知识结构](knowledge-structure.md)
* HTML
    * [介绍](detail/html/intro.md)
    * **[常见标签及属性](detail/html/tag-and-attr.md)** [练习](detail/html/tag-and-attr.md#homework)
    * [标签语义化](detail/html/semantic.md)
    * [HTML5](detail/html/html5/)
        * [标签,属性](detail/html/html5/elements-and-attrs)
            * [新增的标签](detail/html/html5/elements-and-attrs/new-elements.md)
            * [废弃的标签](detail/html/html5/elements-and-attrs/removed-elements.md)
            * [新增的属性](detail/html/html5/elements-and-attrs/new-attrs.md)
            * [废弃的属性](detail/html/html5/elements-and-attrs/removed-attrs.md)
            * [Picture元素](detail/html/html5/picture) 用Picture元素做响应式图片
        * [Web存储](detail/html/html5/web-storage)
        * [Web workers](detail/html/html5/web-workers)
        * [File API](detail/html/html5/file-api) 可以做图片预览之类的
        * [地理位置](detail/html/html5/geoloaction) 待完善
        * [画布](detail/html/html5/canvas) 待完善
        * [视频](detail/html/html5/video) 待完善
        * [音频](detail/html/html5/audio) 待完善
        * [拖放](detail/html/html5/drag-and-drop) 待完善
        * [微数据](detail/html/html5/microdata) 待完善
        * [应用缓存](detail/html/html5/offline-web-applications) 待完善
        * [服务器发送事件](detail/html/html5/server-send-events) 待完善
* CSS
	* [介绍](detail/css/intro.md)
    * [样式写在哪](detail/css/place.md)
	* **[选择器](detail/css/selector.md)** [练习](detail/css/selector.md#homework)
    * [样式的继承和层叠](detail/css/inheritance-and-cascade.md) 决定哪条样式生效 缺练习的具体描述
	* [样式规则](http://www.htmldog.com/reference/cssproperties/) **[CSS参考手册](http://css.doyoe.com/)**
        * [文本（text）与文字（font）样式规则](detail/css/font/font-style.md)
        * [背景样式规则](detail/css/background.md)
        * [表格样式规则](detail/css/table)
        * [列表样式规则](detail/css/list.md)
        * [CSS的未来：一些试验性CSS属性](http://www.qianduan.net/the-future-of-css-experimental-css-properties/) 只是外链，缺整理的描述
    * [样式规则的值的类型及单位](detail/css/value-and-unit.md) 缺具体的描述
    * [样式简写](detail/css/css-shorthand.md) 缺具体的描述
    * [盒模型](detail/css/box-model.md)
    * [浮动](detail/css/float/README.md)
    * [元素定位](detail/css/position)
    * 对齐
        * [元素居中](detail/css/align-center/)
        * [两端对齐](detail/css/align-justify/)
    * [BFC](detail/css/BFC)
    * [布局](detail/css/layout)
        * [Flexbox](detail/css/layout/flexbox) 缺具体的描述
    * [CSS Sprites](http://www.imooc.com/learn/93) 雪碧图/图片精灵 只是外链，缺整理的描述
    * [浏览器默认样式](detail/css/ua-style.md)
    * [浏览器兼容性](detail/css/compatibility)
        * [浏览器常见bug](detail/css/compatibility/css-bugs.md)
        * [浏览器hacks](detail/css/compatibility/css-hack.md)
    * [调试CSS](https://docs.webplatform.org/wiki/tutorials/debugging_css) 只是外链，缺整理的描述
    * CSS3
        * [box shadow](detail/css/box-shadow)
        * [渐变](detail/css/gradient)
        * [变换(transform)](detail/css/transform) 缺部分具体的描述
        * [过渡(transition)](detail/css/transition) 缺具体的描述
        * [动画](detail/css/animate)
        * [滤镜(CSS Filter)](detail/css/animate)
    * [响应式样布局](detail/responsive)
* JS
    * [脚本写在哪](detail/js/place.md)
    * [this](http://www.cnblogs.com/Wayou/p/all-this.html) 只是外链，缺整理的描述
    * [事件DOMContentLoaded和load的区别](detail/js/dom-content-loaded-vs-load.md)
    * [表单验证](detail/js/valid-input)
    * [ajax](detail/js/ajax.md) 缺部分具体的描述（不用jquery的写法；xhr2）
    * [generator函数](detail/js/generator)
* [动画效果](detail/effect)
* [web workers](detail/web-works)
* [异步上传文件](others/aysn-file-upload)

附
* [**新手常见问题及解答**](detail/FAQ.md)
* [代码片段](snippets) 缺具体的描述
* [Web前端常见名词解释](detail/noun-explain.md)
* [前端导航页](https://htmlpreview.github.io/?https://github.com/iamjoel/front-end-note/blob/master/bookmark/index.html)

### 只需了解
* [W3C](http://www.chinaw3c.org/about.html) 和 [WHATWG](https://whatwg.org/) 均为定web标准的组织 [他们的故事](detail/W3C&WHATWG.md)
* 浏览器引擎
* HTML
    * [DOCTYPE和浏览器渲染模式](detail/html/quirks-mode-and-standards-mode.md)
    * [常用的meta标签](detail/html/meta.md)
    * [HTML特殊符号（也有的叫字符实体）](detail/html/entities.md)
    * [元素的嵌套规则](detail/html/element-nesting.md)
    * [网页无障碍](others/accessible.md)
    * [UserAgent的历史变迁](http://article.yeeyan.org/view/heart5/19211) 每个浏览器都宣称自己是其他浏览器的乱象的由来
    * [语种名称代码(html lang的值)](http://www.ruanyifeng.com/blog/2008/02/codes_for_language_names.html)
* CSS
    * [元素上使用id还是class](detail/css/id-or-class.md)
    * [加载CSS的优化：Critical CSS](detail/css/critical-css.md)
* 网站性能优化
    * [减少网站响应时间概要](others/web-speed-up.md)
* [安全](detail/security)
    * [XSS](detail/security/XSS)
* 其他
    * [Photoshop介绍](others/photoshop)
    * [命令行及常用指令介绍](others/command-line.md)
	* [Chrome 控制台console的用法](http://segmentfault.com/blog/shibar/1190000002511877)
    * [排版](detail/type)
        * [垂直的韵律](detail/type/vertical-rhythm.md)
        * [中文排版的最佳实践](http://zhuanlan.zhihu.com/FrontendMagazine/19891152)
    * [[ 浏览器原理 ] Repaint 、Reflow 的基本认识和优化](http://segmentfault.com/a/1190000002629708)
    * [HTTP协议](others/http.md)
    * [favicon](https://github.com/audreyr/favicon-cheat-sheet)

### Demo
* [购物车](demo/shopping-cart)
* [签到图片墙](demo/sign-in-anim)
* [耗时函数被短时间频繁调用时，防浏览器卡死](demo/throttle)
* [响应式导航条](demo/response-nav-bar)


## 前端相关
* [Sublime](others/sublime.md) 最性感的编辑器。
    * [Sublime的Emmet插件中缩写和快捷键](others/sublime-emmet.md)
* [Markdown](others/markdown.md) 一种易读易写的标记语言。适合用来写文档。
* [GIT](others/git.md) 很好用的版本控制工具。 [练习](others/git.md#homework)

## 项目结构
* `detail` 知识点的详细内容
* `ppt` 知识点讲解ppt
* `homework` 作业示例

## 推荐学习资源
* [饥人谷](http://jirengu.com/) BAT的一些家伙搞的web培训网站
* [慕课网 HTML+CSS基础课程](http://www.imooc.com/learn/9)
* [HTML基本知识](http://www.jianshu.com/notebooks/536331/latest) 一个叫[实验楼](http://www.shiyanlou.com/)的培训机构做的
* [极客学院 HTML5相关知识](http://www.jikexueyuan.com/path/html5/)
* [htmldog](http://htmldog.com/) HTML，CSS，JS教程。英文的
* [JavaScript深入浅出(视频)](http://www.imooc.com/learn/277)
* [JavaScript 标准参考教程（alpha）-阮一峰](http://javascript.ruanyifeng.com/)
* [JavaScript简易教程 v0.3.0- 颜海镜](http://yanhaijing.com/basejs/) 我所知道最完整最简洁的JavaScript基础教程
* [30 Days to Learn jQuery](http://code.tutsplus.com/courses/30-days-to-learn-jquery)
* [dive into html5](http://diveintohtml5.info/table-of-contents.html)
* [不只是CSS的CSS学习笔记](http://segmentfault.com/bookmark/1230000002426520)
* [CSS 各种规则的参考](http://tympanus.net/codrops/css_reference/)
* [学习布局](http://zh.learnlayout.com/)
* [一些标准的命名规范](http://www.html-js.com/article/JS-rookie-in-the-rookie-began-to-learn-some-standard-naming-conventions-to-fly)

## 书
* [Web前端工程师修炼之道(原书第4版)](http://book.douban.com/subject/26258171/) 2014年09月出版
* CSS
    * [《图解CSS3：核心技术与案例实战》](http://www.w3cplus.com/book-comment.html)
* JS
    * JavaScript高级程序设计
    * [《eloquentjavascript》](http://eloquentjavascript.net)
* [可参考书单](http://www.douban.com/doulist/2772859/)

## 其他
* [在线工具](bookmark/tool.md)
* [前端工具](https://github.com/codylindley/frontend-tools)
* [前端现代工具手册](https://github.com/tooling/book-of-modern-frontend-tooling)
* [面试题](https://github.com/h5bp/Front-end-Developer-Interview-Questions/tree/master/Translations/Chinese)
* [sitthetest(英)](https://sitthetest.com/tests) HTML,CSS,JS的测试
* [我的收藏夹](bookmark/)
* [A Baseline for Front-End [JS] Developers: 2015](http://rmurphey.com/blog/2015/03/23/a-baseline-for-front-end-developers-2015/)
* [A Baseline for Front-End Developers(2012)](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)
