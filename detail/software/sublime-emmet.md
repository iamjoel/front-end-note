# Sublime的Emmet插件中缩写和快捷键
## HTML简写
`html:5` 生成
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Document</title>
</head>
<body>

</body>
</html>
```

`link:css` 生成
```
<link rel="stylesheet" href="style.css">
```

`btn` 生成
```
<button></button>
```

`select+` 生成
```
<select name="" id="">
	<option value=""></option>
</select>
```

`ul+` 生成
```
<ul>
	<li></li>
</ul>
```

`ol+` 生成
```
<ol>
	<li></li>
</ol>
```

`dl+` 生成
```
<dl>
	<dt></dt>
	<dd></dd>
</dl>
```

`table+` 生成
```
<table>
	<tr>
		<td></td>
	</tr>
</table>
```

`tr+` 生成
```
<tr>
	<td></td>
</tr>
```


`cc:ie6` 生成
```
<!--[if lte IE 6]>

<![endif]-->
```

`cc:ie` 生成
```
<!--[if IE]>

<![endif]-->
```

`cc:noie` 生成
```
<!--[if !IE]><!-->

<!--<![endif]-->
```

## CSS 简写
### 盒模型相关
* `d` 生成 `display: block;`
* `d:n` 生成 `display:none;`
* `d:f` 生成 `display:flex;`
* `d:i` 生成 `display:inline;`
* `d:ib` 生成 `display: inline-block;`
* `fl` 生成 `float: left;`
* `fl:r` 生成 `float: right;`
* `fl:n` 生成 `float: none;`
* `pos` 生成 `position:relative;`
* `pos:a` 生成 `position: absolute;`
* `pos:f` 生成 `position:fixed;`
* `m` 生成 `margin: ;`
* `m:a` 生成 `margin: auto;`
* `mt` 生成  `margin-top: ;` 类型的还有 mt,mb,mr
* `p` 生成 `padding: ;` 其他和margin类型
* `bxz` 生成 `box-sizing: border-box;`

### 字体相关
* `f` 生成 `font: ;`
* `fz` 生成 `font-size: ;`
* `ff` 生成 `font-family: ;`
* `fs` 生成 `font-style: italic;`

## 文本相关
* `va` 生成 `vertical-align: top;`
* `va:m` 生成 `vertical-align: middle;`
* `ta` 生成 `text-align: left;`
* `ta:c` 生成 `text-align: center;`
* `td:n` 生成 `text-decoration: none;`
* `wos` 生成 `word-spacing: ;`
* `c` 生成 `color: #000;`
* `c:r` 生成 `color: rgb(0, 0, 0);`
* `c:ra` 生成 `color: rgba(0, 0, 0, .5);`
* `op` 生成 `opacity: ;`
* `op+` 生成
```
opacity: ;
filter: alpha(opacity=);
```

## 背景
* `bg` 生成 `background: #000;`
* `bg+` 生成 `background: #fff url() 0 0 no-repeat;`
* `bgc` 生成 `background-color: #fff;`
* `bgi` 生成 `background-image: url();`
* `bgr` 生成 `background-repeat: ;`
* `bgp` 生成 `background-position: 0 0;`
* `bgsz` 生成 `background-size: ;`

## 边框和轮廓
* `bd` 生成 `border: ;`
* `bd+` 生成 `border: 1px solid #000;`
* `bd:n` 生成 `border: none;`
* `bdl` 生成 `border-left: ;`
* `bdl+` 生成 `border-left: 1px solid #000;`
* `bdrs` 生成 `border-radius: ;`
* `bdc:t` 生成 `border-color: transparent;`
* `ol` 生成 `outline: ;`

## 列表
* `lis` 生成 `list-style: ;`
* `lst` 生成 `list-style-type: ;`
* `list:n` 生成 `list-style-type:none;`

# 其他
* `!` 生成 `!important`
* `anim` 生成 `animation: ;`
* `anim-` 生成 `animation:name duration timing-function delay iteration-count direction fill-mode;`
* `trf` 生成 `transform: ;`
* `trf:r` 生成 `transform: rotate(angle);`
* `trf:rx` 生成 `transform: rotateX(angle);`
* `trf:sc` 生成 `transform: scale(x, y);`
* `trf:t` 生成 `transform: translate(x, y);`
* `trf:t3` 生成 `transform: translate3d(tx, ty, tz);`
* `trs` 生成 `transition: prop time;`
* `us` 生成 `user-select: none;`

`@m` 生成
```
@media screen {
}
```

`@kf` 生成
```
@keyframes identifier {
	from {  }
	to {  }
}
```

以上缩写展开时，都会一起生成带浏览器前缀（vendor-prefixed）的

## 命令
* [展开缩写](http://docs.emmet.io/actions/expand-abbreviation/) `Tab`
* [每按一下，扩大选择范围：选择当前元素及其父级元素](http://docs.emmet.io/actions/match-pair/)  `⌃D` / `Ctrl+,`
* [每按一下，缩小选择范围：选择当前元素的第一个字元素](http://docs.emmet.io/actions/match-pair/)  `⌃J` / `Shift+Ctrl+0`
* [光标移动移动至匹配的标签，多次按时在标签内容的结尾和标签的头部位置切换](http://docs.emmet.io/actions/go-to-pair/) – `⇧⌃T` / `Ctrl+Alt+J`
* [用简写来包裹选中内容](http://docs.emmet.io/actions/wrap-with-abbreviation/) — `⌃W` / `Shift+Ctrl+G`
* [光标到下一个编辑点。编辑点指的是，没有内容元素内部](http://docs.emmet.io/actions/go-to-edit-point/) — `Ctrl+Alt+→` 或 `Ctrl+Alt+←`
* [选择元素。多次按会在元素，元素属性，元素属性值之间切换](http://docs.emmet.io/actions/select-item/) – `⇧⌘.` 或 `⇧⌘,` / `Shift+Ctrl+.` 或 `Shift+Ctrl+,`
* [删除标签，但不包括其innerHTML的内容](http://docs.emmet.io/actions/remove-tag/) – `⌘'` / `Shift+Ctrl+;`
* [数学表达式求值。如：3+2 求值 5](http://docs.emmet.io/actions/evaluate-math/) — `⇧⌘Y` / `Shift+Ctrl+Y`
* [重构CSS3带浏览器前缀（vendor-prefixed）的值](http://docs.emmet.io/actions/reflect-css-value/) – `⇧⌘R` / `Shift+Ctrl+R`
* 修改标签的名称 – `⇧⌘K` / `Shift+Ctrl+'`

## [增减数值类别](http://docs.emmet.io/actions/inc-dec-number/)
* 增加1: `Ctrl+↑` 这个与Mac的按键冲突，需要修改快捷键
* 减少1: `Ctrl+↓`
* 增加0.1: `Alt+↑`
* 减少0.1: `Alt+↓`
* 增加10: `⌥⌘↑` / `Shift+Alt+↑`
* 减少10: `⌥⌘↓` / `Shift+Alt+↓`
*  ⌃W / Shift+Ctrl+G

注：`/`左边是Mac的快捷键，右边是Windows的快捷键

## 浏览器前缀补全
`-浏览器前缀-属性名`
其中浏览器前缀包括
* w: webkit
* m: moz
* s: ms
* o: o

例如： 输入 `-wm-somepop` + `Tab`生成

```
-webkit-somepop: ;
-moz-somepop: ;
somepop: ;
```
## 渐变（Gradients）
`lg(属性)`
如 `bg:lg(to right, #f60,#f00);` + `Tab`生成
```
background:-webkit-linear-gradient(left, #f60, #f00);
background:-o-linear-gradient(left, #f60, #f00);
background:linear-gradient(to right, #f60, #f00);
```

## 附：Mac上图标与按键的对应
* `⌘`	Command 键
* `⌃`	Control 键
* `⌥`	Option 键
* `⇧`	Shift 键
* `⇪`	Caps Lock
* fn	功能键

想了解更多见 http://docs.emmet.io/    
所有的快捷键 http://docs.emmet.io/cheat-sheet/