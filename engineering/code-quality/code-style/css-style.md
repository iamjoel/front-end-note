# css代码风格
## <a name='TOC'>目录</a>
1. [缩进](#spacing)
1. [格式](#formatting)
1. [例子](#example)
1. [声明顺序](#order)
1. [常见页面元素命名](#fileNameDefine)
1. [参考](#reference)

## <a name='spacing'>缩进</a>
* 代码缩进使用4个空格
* `:`后有一个空格
* `{`前有一个空格
* 规则块间有一空行
* `}`要另起一行
* 多个选择器公用一段样式时，每个选择器都要占一行    
[返回顶部](#TOC)

## <a name='formatting'>格式</a>
* 颜色用十六进制，如`#000`。除非要用透明值时，使用`rgba()`
* 值是0时，不能加单位。如用`margin:0;`而不是`margin:0px;`    
[返回顶部](#TOC)

## <a name='example'>例子</a>
```
/* Example of good basic formatting practices */
.styleguide-format {
∙∙∙∙color: #000; /* 缩进使用4个空格 */
    background-color: rgba(0, 0, 0, .5);
    border: 1px solid #0f0;
}

/* Example of individual selectors getting their own lines (for error reporting) */
.multiple,
.classes,
.get-new-lines {
    display: block;
}

/* Avoid unnecessary shorthand declarations */
.not-so-good {
    margin: 0 0 20px;
}
.good {
    margin-bottom: 20px;
}

```
[返回顶部](#TOC)

## <a name='example'>声明顺序</a>
相关的属性声明应该以下面的顺序分组处理：

1. Positioning
1. Box model 盒模型
1. Typographic 排版
1. Visual 外观
1. Misc 其他

例子如下：
```
.declaration-order {
    /* Positioning */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;

    /* Box-model */
    display: block;
    float: right;
    width: 100px;
    height: 100px;

    /* Typography */
    font: normal 13px "Helvetica Neue", sans-serif;
    line-height: 1.5;
    color: #333;
    text-align: center;

    /* Visual */
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-radius: 3px;

    /* Misc */
    opacity: 1;
}


```
[返回顶部](#TOC)



## <a name='fileNameDefine'>常见页面元素命名</a>
(1) 页面结构

    容器: container
    页头：header
    内容：content/container
    页面主体：main
    页尾：footer
    导航：nav
    侧栏：sidebar
    栏目：column
    页面外围控制整体布局宽度：wrapper

(2) 导航

    导航：nav
    主导航：mainbav
    子导航：subnav
    顶导航：topnav
    边导航：sidebar
    左导航：leftsidebar
    右导航：rightsidebar
    菜单：menu
    子菜单：submenu
    标题: title
    摘要: summary

(3) 功能

    标志：logo
    广告：banner
    登陆：login
    登录条：loginbar
    注册：regsiter
    搜索：search
    功能区：shop
    标题：title
    加入：joinus
    状态：status
    按钮：btn
    滚动：scroll
    标签页：tab
    文章列表：list
    提示信息：msg
    当前的: current
    小技巧：tips
    图标: icon
    注释：note
    指南：guild
    服务：service
    热点：hot
    新闻：news
    下载：download
    投票：vote
    合作伙伴：partner
    友情链接：link
    版权：copyright
[返回顶部](#TOC)

## <a name='reference'>参考</a>
* [github css style guide](https://github.com/styleguide/css)
* [kss(Knyle Style Sheets)](https://github.com/kneath/kss)
[返回顶部](#TOC)
* [alloyteam code-guide](http://alloyteam.github.io/code-guide/)
