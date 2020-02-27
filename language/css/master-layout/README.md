# xx个场景，带你掌握CSS布局
CSS 布局本质就是控制元素的位置和大小。比如这样的布局：元素宽960px，水平居中。水平居中是位置。宽960px是大小。又如这样的布局：两个元素在一行，左侧元素固定宽200px，右侧元素撑满剩余空间。两个元素在一行是位置。固定宽200px，撑满剩余空间是大小。

下面，我们具体来看，控制。

## 大小
大小指元素的占的空间。空间包含水平空间和垂直空间。大部分情况下，
* 所占水平空间 = width值 + 左右padding值 + 左右border宽度值
* 所占垂直空间 = height值 + 上下padding值 + 上下border宽度值

这其实满反直觉的。直觉认为：
* 所占水平空间 = width值
* 所占垂直空间 = height值

要让上面的等式成立，只需给元素设置样式 `box-sizing: border-box`。因此，我们也常常能在项目的通用样式中发现这样的代码:
```css
* {
  box-sizing: border-box;
}
```

`box-sizing` 设置的是元素的盒模型(Box Model)。页面上的每个元素都被描绘成矩形盒子，用这个盒子通过一个模型来描述其占用空间，这个模型称为盒模型。盒模型由 4 部分组成，从内到外分别是 内容(content)，内边距(padding)，边框(border)和外边框(margin)。

![盒模型](box-model.png)

当 `box-sizing` 设置为 `border-box` 时，所占水平空间 = width值，内容宽度 = width值 - 左右padding值 - 左右边框宽度值。 例如: 
```css
box-sizing: border-box;
width: 100px;
padding-left: 10px;
```

所占水平空间是 100px，内容宽度值是 90px(width: 100px - padding-left: 10px)。把 padding-left 改成 20px。所占水平空间仍然是 100px，内容宽度值是 80px(width: 100px - padding-left: 20px)。

`box-sizing` 的默认值是 `content-box`, 水平空间 = width值 + 左右padding值 + 左右border宽度值。

### 场景01 元素的宽高是固定值
给元素设置固定的宽高，只需设置。如: 
```css
width: 100px;
height: 100px;
```

**注意**：给行内元素设置宽高值不会生效。常见的行内元素有`a`,`strong`,`span`。给元素设置样式：`display: inline`，会将该元素变为行内元素。因此，当发现给元素设置宽高无效时，检查这元素是否是行内元素。

### 场景02 宽度撑满父元素的剩余部分
Flex 布局中的 `flex-grow` 。

### 场景03 父元素太小，宽度收缩小于
Flex 布局中的 `flex-shirk` 。


### 场景04 响应式宽高
背景：

有两种方式：媒体查询和js配合rem实现。

都需要设置viewport。代码如下：
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### 媒体查询

### js配合rem实现

用 rem。
可以根据屏幕的宽度，用 js 动态设置 html 根元素的 font-size，设置元素的宽高值的单位用 rem。

```js
;
(function(win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        if (width > 540) { // 最大宽度
            width = 540;
        }
        var rem = width / 6.4; 
        docEl.style.fontSize = rem + 'px';
    }

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    refreshRem();

})(window);
```

### 场景05 宽高值是个表达式
cal

## 位置
### 场景06 文字的水平对齐
水平对齐包括：左，中，右，两端对齐。可以用 `text-align` 来实现。

### 场景07 文字的垂直居中
单行文本和多行文本的垂直居中的处理方式不一样。
单行文本。

多行文本。 用

### 场景08 多个块级元素的在一行或多行中显示
这里的块级元素指能宽，高的元素，并不是只是指 `display: block` 没有关系。


### 场景09 多个元素的水平居中

flex

如果是一个固定宽度元素的水平居中，可以用 
```css
width: 960px; /* 必须设置 */
margin-left: auto;
margin-right: auto;
```

### 场景10 多个元素的水平两端对齐

### 场景11 多个元素的垂直居中

### 场景12 始终位于父元素右上角

### 场景13 始终位于页面的右下角
PC 的返回顶部。 `positon: fixed`。

### 场景14 绝对定位元素的水平居中

### 场景15 绝对定位元素的垂直居中

### 场景16 文字环绕图片
浮动 `float`。

### 场景17 避免垂直 Margin 重叠


## 总结一下
掌握CSS布局，要掌握以下几点重点：
* boxing-sizing的值为 border-box 和 content-box 对应的空间计算规则是怎样的。
* 给行内元素设置宽高值不会生效。
* 实现单行文字的垂直居中，只需设置设置高度等于行高。
* 多个元素占一行(或列)或多行(或列)，居中对齐，居右对齐，弹性的宽度或高度。可以用Flex布局来实现。
* 元素相对父元素定位或相对页面定位。可以用Position来实现。
* 实现宽高和设备宽度有关。可以用 js 配合 rem 实现。

## 参考&推荐阅读
* [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
* [学习CSS布局](http://zh.learnlayout.com/)
