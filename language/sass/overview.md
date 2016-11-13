# Sass 写法示例
CSS 本身是非常有趣的，但随着样式表变大，变复杂，变得越来越难维护。这时候预处理就有用了。Sass能让你使用一些CSS中没有的特性，比如：变量，嵌套（nesting），混入（mixins），继承等其他能让写CSS变的继续有趣的特性。更多描述见[官网](http://sass-lang.com/)。

想尝试下 Sass ，可以尝试下在线编译，点[这里](http://www.sassmeister.com/)。

## charset
代码第一行必须加如下的指定编码的代码，否则文件中由中文时会报错。

```
@charset 'utf-8';// 不加这行，文件中有中文时会报错

```

## 注释
`//` 表示单行注释，不会输出在 CSS 中。  
`/* */`表示多行注释，会输出在 CSS 中。
```
// 我是单行注释
/*
  @author: Joel
  @describe Sass syntax overview
*/
```

## 变量
变量必须以 `$` 做为开头。
```
body {
  $primary-color: #333; // 定义变量。作用域为括号。
  color: $primary-color; // 使用变量
  $base-line: 2px;
  $base-line: 1px !default;
  @debug 'base line is ' $base-line;// 2px。 !default 定义的变量不会覆盖前面定义的同名变量。
  $gloable-red-color: #f00 !global; // 全局变量
}
// @debug 'primary color:' + $primary-color;//Undefined variable: "$primary-color"
@debug 'gloable color' + $gloable-red-color;
```

## 数据类型
Sass 支持字符串，数字，颜色，数组，Map 这几种数据类型。
```
// 字符串
$str: 'str1' + 'str2';
@debug $str;
// 数字
$num: 4 + 5;
@debug $num;
$width: 10px;
@debug $width/2;// 5px
// 数组。数组的元素可以由空格或逗号分割
$list: 10px 20px 10px;
@debug '数组第2个元素:' + nth($list, 2);
$list2: 10,30,50;
@debug '数组的分隔符是:' + list-separator($list2);
// 颜色
$orange: #f60; // 颜色
@debug '橙色的红色部分的值为' + red($orange);
// Map
$map: ('name': 'joel', 'gender': 'male');
@debug map-get($map, 'name') + '\'s gender is ' + map-get($map, 'gender');

```

## 引入 Sass 或 Scss 文件
```
@import 'reset';// 等效于 @import 'reset.scss';如果找不到 reset.scss 也会找_reset.scss
```

## 逻辑操作符
```
$true: true;
$false: false;

not $true;// false
$true and $false; // false
$true or $false; // true
```

## 条件语句
```
$isCool: true;
@if $isCool {
  .isCool{
    color: #fff;
  }
}
$isCool: false;
@if $isCool {
} @else {
   .notCool{
    color: #000;
  }
}
```

## 循环
```
$map: ('a': #f00, 'b': #0f0, 'c': #00f);
@each $key, $value in $map {
  .section-#{$key} {
    background-color: $value;
  }
}
```

## 函数
```
@function add($a, $b){
  @return $a + $b;
}
@debug add(1, 2);// 3
```

## 嵌套
### 嵌套规则
```
.box {
  .title {// 相当于 .box .title
    font-size: 18px;
    padding-left: 10px;
  }
  .content {
    padding: 10px;
    .pager {
      text-align: center;
    }
  }
  // &表示外层的元素
  &:hover { // 相当于 .box:hover
    outline: 1px solid #ddd;
  }
}
```

### 嵌套属性
```
.font {
  font: {
    weight: bold;// 相当于 font-bold
    size: 14px;
  }
}
```

## 混入(Mixins)
```
// 定义
@mixin clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}

.wrap {
  @include clearfix;// 使用
}

// 带参数
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}

.block1{
  @include size(100px);
}

.block2{
  @include size(100px, 200px);
}
```

## 扩展
```
.message {
  border: 1px solid #ccc;
  padding: 10px;
}

%border-box {
  box-sizing: border-box;
}

.success {
  @extend %border-box;
  @extend .message;
  border-color: #0f0;
}

.error {
  @extend %border-box;
  @extend .message;
  border-color: #00f;
}
```

## 插值
如果想要在选择器或属性上用变量,需要用插值。
```
$sel: '.a';
$attr: width;
#{$sel}{
  color: #f00;
  #{$attr}: 100px;
}
```
