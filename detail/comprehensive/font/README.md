## CSS 字体
选择合适的字体，对提高网页的美观度和可读性有着举足轻重的作用。本文简要介绍了 CSS 中与字体相关的知识。

## 指定字体
CSS 的 font-family 命令，指定了网页元素所使用的字体，如
```

font-family: Georgia, "Times New Roman", 
             "Microsoft YaHei", "微软雅黑", 
             STXihei, "华文细黑", 
             serif;
```

CSS 字体相关的其他样式规则见[这里](../css/font/font-style.md)。

## 生效规则
1. 优先使用排在前面的字体。
1. 如果找不到该种字体，或者该种字体不包括所要渲染的文字，则使用下一种字体。
1. 如果所列出的字体，都无法满足需要，则操作系统自行决定使用哪种字体。

## 使用注意点
1. 绝大部分中文字体里包含英文字母（基本上都很丑），而英文字体是不包含中文字符的。因此 font-family 应该优先指定英文字体，然后再指定中文字体。否则，中文字体所包含的英文字母，会取代英文字体，而这往往很丑的。
1. 把 Mac 支持的字体放在 Windows 前面。因为有一部分Mac用户装了Windows 下的常用字体（这得归功于 Office for Mac），但极少的Windows 用户装了Mac的常用字体。
1. 为了保证兼容性，中文字体的中文名称和英文名称，应该都写入font-family。比如，"微软雅黑"的英文名称是Microsoft YaHei。
1. 如果字体名称中间有空格，则要用双引号把字体名称包起来。如 "Microsoft Yahei"。

## 衬线体和无衬线体
所谓"衬线体"（Serif），指的是笔画的末端带有衬线的字体。

一般来说，衬线体装饰性强，往往用于标题；无衬线体清晰度好，往往用于正文。

## 兼容大部分浏览器，系统的英文字体
### 衬线字体（Serif Fonts）
Georgia, Times New Roman, Times, serif

### 非衬线字体（Sans-Serif Fonts）
Arial, Verdana, Geneva, Helvetica, sans-serif

### 等宽字体（Monospace Fonts）
Courier New, Courier, monospace

## 常见的中文字体
### 宋体（SimSun）
宋体是最常见的中文字体，如果没有指定字体，操作系统往往选择它来渲染。很多人认为，这种字体并不美观。
写法
```
font-family: Arial, Helvetica, tahoma, verdana, 宋体, SimSun, 华文细黑, STXihei, sans-serif;
```
### 微软雅黑（Microsoft YaHei）
微软雅黑的美观度和清晰度都较好，可以作为网页的首选字体。它在Mac平台的对应字体是华文细黑（STXihei）。

但是，Windows 7之后的版本才安装了这个字体。如果没有，可以选择黑体（Simhei）替代。不过，黑体比较粗，不应用于字号较小的文字。
写法(加了宋体做后备)
```
font-family: Tahoma, Arial, Helvetica,
             "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑",
              宋体, SimSun, STXihei, "华文细黑", sans-serif;
```

### 仿宋（FangSong）
这种字体是衬线体，比宋体的装饰性更强。如果字号太小，会影响清晰度，所以只有在字号大于14px的情况下，才可以考虑这种字体。
写法
```
font-family: Georgia, "Times New Roman", "FangSong", "仿宋", STFangSong, "华文仿宋", serif;
```

### 楷体（KaiTi）
楷体也是衬线体，装饰性与仿宋体接近，但是宽度更大，笔画更清楚一些。这种字体也不应该在小于14px的情况下使用。
写法
```
font-family: Georgia, "Times New Roman", "KaiTi", "楷体", STKaiti, "华文楷体", serif;
```

## web 字体
如果你不满足于系统预装的一些字体，那么，你可以使用[web字体](http://www.w3schools.com/cssref/css3_pr_font-face_rule.asp)。
推荐几个主流的的web字体的网站
* [Google Fonts](wen.lu/fonts) Google Fonts被墙了，可以用[360网站卫士常用前端公共库CDN服务](http://libs.useso.com/) ，其中包含了google免费字体库
* [有字库](www.youziku.com) 中文web字库
* [justfont](http://en.justfont.com/) 字体库


## 一些网站设置的字体
[Type Is Beautiful](http://www.typeisbeautiful.com) (有关文字设计和视觉文化的网站)
```
"Classic Grotesque W01",Arial,"Hiragino Sans GB",
"STHeiti","Microsoft YaHei","WenQuanYi Micro Hei",SimSun,sans-serif
```

百度
```
arial,"Hiragino Sans GB","Microsoft Yahei","微软雅黑","宋体",宋体,
Tahoma,Arial,Helvetica,STHeiti
```

淘宝
```
tahoma,arial,"Hiragino Sans GB",宋体,sans-serif
```

QQ(http://www.qq.com/)
```
"宋体","Arial Narrow",HELVETICA
```

豆瓣
```
Helvetica,Arial,sans-serif
```

Github
```
Helvetica,arial,freesans,clean,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"
```

## 参考
* [中文字体网页开发指南](http://www.ruanyifeng.com/blog/2014/07/chinese_fonts.html)
* [Chinese Standard Web Fonts: A Guide to CSS Font Family Declarations for Web Design in Simplified Chinese](http://www.kendraschaefer.com/2012/06/chinese-standard-web-fonts-the-ultimate-guide-to-css-font-family-declarations-for-web-design-in-simplified-chinese/)
* [Web 中文字体应用指南](https://ruby-china.org/topics/14005?page=1)

## 拓展阅读
* [有哪些值得推荐的中文字体？](http://www.zhihu.com/question/20727176)
* [有哪些值得推荐的英文字体？](http://www.zhihu.com/question/23210530)
* [阮一峰的字体笔记](http://www.ruanyifeng.com/blog/2008/06/typography_notes.html)
* [Type Is Beautiful](http://www.typeisbeautiful.com)  上面有很多关于文字设计和视觉文化的文章
