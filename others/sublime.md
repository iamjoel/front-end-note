## sublime
## 目录
* [安装package manager](#install)
* [插件推荐](#plugin)
* [snippets](#snippets)
* [常用快捷键](#shortcut)


## <a name="install">安装package manager</a>
### 1. Ctrl+\` 打开控制台
### 2. 如果是sublime3，粘入
```
import urllib.request,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404' + 'e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```
如果是sublime2，粘入
```
import urllib2,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404' + 'e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')
```
### 3. 打开命令面板，键入`install`,若出现`Package Control: Install Package`。则说明安装成功

详细 见[这里](https://sublime.wbond.net/installation)

## <a name="plugin">插件推荐</a>
### [BracketHighlighter](https://github.com/facelessuser/BracketHighlighter)
高亮匹配的各种括号
![BracketHighlighter](https://camo.githubusercontent.com/771f9df16f29a134369cbcb0913f55932d156983/687474703a2f2f646c2e64726f70626f782e636f6d2f752f3334323639382f427261636b6574486967686c6967687465722f4578616d706c65312e706e67)

### [SideBarEnhancements](https://github.com/titoBouzout/SideBarEnhancements/tree/st3)
增强右击边栏菜单的功能
![SideBarEnhancements](https://camo.githubusercontent.com/9c427039fb2e97570edf760c4abeaf43d208f702/687474703a2f2f646c2e64726f70626f782e636f6d2f752f34333539363434392f7469746f2f7375626c696d652f536964654261722f73637265656e73686f742e706e67)

### [html-css-js prettify](https://github.com/victorporof/Sublime-HTMLPrettify)
格式化html,css,js代码。快捷键`ctrl+shift+h`进行格式化。

### [Emmet](https://sublime.wbond.net/packages/Emmet)
提供html的自动补全功能。如输入 `ul.main>li{第$个}*3`，然后按Tab键。会生成如下的内容
```
<ul class="main">
	<li>第1个</li>
	<li>第2个</li>
	<li>第3个</li>
</ul>
```
如果按Tab键没有反应，那么设置文档的语法为html。方式为
1. `ctrl+shift+p`
1. 输入 'set syntax: HTML'

更多用法见 http://docs.emmet.io/

### [prefixr](http://wbond.net/sublime_packages/prefixr)
自动插入css3的前缀。

### HTML5
HTML5语法高亮

### [CSSComb](http://csscomb.com/)
将css样式按照一定的顺序进行排列。可自定义规则。

### [Markdown Preview](https://sublime.wbond.net/packages/Markdown%20Preview)
可以在浏览器中预览markdown，或将markdown转化成html

### [Trailing​Spaces](https://sublime.wbond.net/packages/TrailingSpaces)
让多余的空格无所遁形。

### [DashDoc](https://github.com/farcaller/DashDoc#readme)
将dash集成到sublime中。选单词按｀ctrl＋H｀会在dash中进行搜索。

### [GitGutter](https://github.com/jisaacks/GitGutter) 在文件的行号旁边显示文件的修改状态

### AutoFileName
文件路径与名称的补全

### 更多
http://ipestov.com/the-best-plugins-for-sublime-text/

### sulime 插件排行
https://sublime.wbond.net/browse/popular

## <a name="snippets">snippets</a>
* [我的sulime snippent]https://github.com/iamjoel/sublime-snippets/
* [Super-Snippets](https://github.com/jakebresnehan/Sublime-Super-Snippets) 某前端工程师的snippets

### [Bootstrap 3 Snippets](https://github.com/JasonMortonNZ/bs3-sublime-plugin)
快速生成bootstrap3的一些组件的Snippets

## <a name="shortcut">快捷键</a>
* `Ctrl+Shift+P` 打开命令面板
* Ctrl+\` 打开控制台命令面板(\`在``中转义不鸟)

### 查找定位
* `Ctrl+P` 打开查找文件面板。如果面板中的内容以`@`,`#`,`:`开头，则在当前文件中找
	* 以`@` 开头：如果文件html,则找id。如果文件是js，找函数及其他的东东。相当于`Ctrl+R`
	* 以`#`开头：在函数名变量名中找
	* 以`:`开头：跳转到某行。相当于`Ctrl+G`
* `Ctrl+F` 查找
* `Ctrl+M` 光标跳至对应的括号：大中小括号均可

### 编辑
* `Ctrl+D`: 选中单词。多次`Ctrl+D`可选择多个，然后可以进行批量的编辑
* `Ctrl+H`: 替换
* `Ctrl+Shift+A`: 在html文件中，选中标签的内容
* `Ctrl+ENTER`: 在当前行的下一行创建
* `Ctrl+SHIFT+ENTER`: 在当前行的上一行创建
* `Ctrl+鼠标单击`:多点同时编辑
* `Ctrl+K+U`: 将选择的内容转化成大写
* `Ctrl+K+L`: 将选择的内容转化成小写
* `Ctrl+方向键：上/下`:将当前行上/下移
* 未选择内容 `Ctrl+C`: 复制当前行
* 未选择内容 `Ctrl+x`: 剪切当前行
* `Ctrl+/`: 注释当前行
* `Ctrl+Shift+/`: 当前位置插入注释
* `Alt+.`：闭合html标签
* `Alt+Shift+W`：用html标签来包裹选中的内容

### 文件操作
* `Ctrl+N`: 新建文件

### 便签页操作(浏览器的的大部分标签操作快捷键类似）
* `Ctrl+W`: 关闭当前便签页
* `Ctrl+Tab`: 下一个标签页
* `Ctrl+Shift+T`: 打开上次关闭的标签页

### 书签操作(文件关闭后，文件上的书签会被删除)
* `Ctrl+F2`: 创建/删除书签
* `F2`: 下一个书签
* `Shift+F2`: 上一个书签

### 其他
* `F12`: 将当前文件在默认打开工具中打开，如html文件会在默认浏览器中打开
* `Ctrl+K, Ctrl+B`: 显示/隐藏左侧栏
* `F11`：全屏
* `Shift+F11`：全屏只编辑当前文件
* `Alt+Shift+数字`：分几屏显示

## 官方整理的快捷键
### mac
https://sublime-text-unofficial-documentation.readthedocs.org/en/latest/reference/keyboard_shortcuts_osx.html

## Windows/Linux
https://sublime-text-unofficial-documentation.readthedocs.org/en/latest/reference/keyboard_shortcuts_win.html


### 关于sublime
http://scotch.io/series/the-complete-visual-guide-to-sublime-text-3



