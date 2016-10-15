# [Sass](http://sass-lang.com/)
* [介绍](intro.md)
* [写法示例](overview.md)

## 安装
Mac上的安装如下  
命令行执行
```
gem install sass
```
若报错，则执行
```
sudo gem install sass
```
然后，就好啦。当然可以用查看Sass版本的命令验证下
```
sass -v
```
其他操作系统上安装Sass见官网[安装指南](http://sass-lang.com/install)。

注意：由于国内网络原因（你懂的），导致 rubygems.org 存放在 Amazon S3 上面的资源文件间歇性连接失败。所以你会遇到 gem安装资源没反应，使用Taobao的[RubyGem镜像](https://ruby.taobao.org/)可以解决这个问题。

使用方式如下
```
$ gem sources --remove https://rubygems.org/
$ gem sources -a https://ruby.taobao.org/
$ gem sources -l
*** CURRENT SOURCES ***

https://ruby.taobao.org
# 请确保只有 ruby.taobao.org
$ gem install rails
```


## 基础语法
见[这里](cheatsheet.md)


## 需要注意的
### 语法规则
Sass语法规则有两种，一种是通过tab键控制缩进的语法规则(缩进要求非常严格)，这种语法对于熟悉Ruby的同学来说会非常的方便和喜欢。这种语法的Sass文件是以.sass后缀命名。另一种语法是SCSS，这是Sass的新的语法规则，他的外观和CSS的一模一样，文件后缀是.scss。如下所示：
```
//Sass语法
$width: 200px
.box
    width: $width

//SCSS语法
$width: 200px;
.box {
    width: $width;
}
```

Sass和SCSS的语法不能混用。

### 其他
如果文件名以`_`开头的`.scss`或`.sass`文件不会被编译成`css`文件。

## 其他语法
### 差值
在选择器和属性上使用变量，必须用差值。否则会报错。

### 输出调试信息
`@debug`, `@warn`, `@error`。    
调试信息均输出在命令行里。他们的区别只是信息的等级不同而已。

### %placeholder
你通过@extend调用可以在一个CSS选择器或者SCSS的%placeholder中通过@extend调用定义好的%placeholder。%placholder不会被编译到CSS样式文件中。    
关于是用@mixin还是%placeholder:如果你需要使用变量，最好使用@mixin，否则使用%placeholder。更详细的描述见[这里](http://www.w3cplus.com/preprocessor/sass-mixin-placeholder.html)。


### 定义函数
`@function`: 定义函数    
`@return`: 函数返回值

## Sublime插件
* [Sass](https://packagecontrol.io/packages/Sass) 语法高亮，代码补全
* [更多](https://packagecontrol.io/search/sass)


## 常见问题
### 在Windows下，遇到`scss`文件中有中文时报如下错误
```
Error:     error path/to/include-chinese.scss (Line 136: Invalid GBK character"\xE8")
```
在`scss`文件顶部加上
```
@charset "utf-8";
```

### gulp-sass 在windows上能正常运行有些麻烦（Mac上毫无压力。。。）
以后可以试下[gulp-ruby-sass](https://github.com/sindresorhus/gulp-ruby-sass)。    
不想折腾可以用Compass

## 推荐阅读
* [Sass (3.4.21) 中文文档](http://www.css88.com/doc/sass/)
* [Sass Guidelines:编写稳健、可维护和可扩展的 Sass](http://sass-guidelin.es/zh/#section-33)

## 管理文件目录
* [Sass Guidelines中文版本之四：项目文件管理](http://www.w3cplus.com/preprocessor/sass-guidelin-part-4.html)
* [管理Sass项目文件结构](http://www.w3cplus.com/preprocessor/architecture-sass-project.html)
* [流行框架的 Sass 体系结构解析](http://www.w3cplus.com/preprocessor/look-different-sass-architectures.html)

