# Photoshop
## 切图
### 切图标
1. 新建一个宽高比要切图标大的背景透明的图片
1. 选中图标所在的图层，如果是多个图层，按住shift进行多选
1. 将选中图层拖拽至新建的图片中
1. 剪裁掉透明像素
1. 保存为web所有格式

但更推荐用一键切图标插件[cutterman](http://www.cutterman.cn/cutterman/feature)

### 切背景
1. 隐藏背景上不需要的图层
1. 用切片工具切
1. 保存为web所有格式

## <a name="shortcut">常用快捷键</a>
### 工具
* `h` 移动工具。用`空格`可以临时的用手形工具
* `z` 放大/缩小工具。更方便的方式用`Alt + 滑轮`来调节页面大小
* `v` 选择工具。打开自动选中，可自动选中图层/组。
* `m` 选区工具。可以用来量尺寸。选区相关信息在信息面板中显示。信息面板在菜单`窗口>信息`中打开。
* `i` 量色工具
* `c` 切片工具

### 显示
* `ctrl + h` 显示/隐藏额外信息。额外信息包括：参考线，切片，网格
* `ctrl + ;` 显示/隐藏参考线
* `ctrl + '` 显示/隐藏网格
* f 全屏切换

## 其他
* `Alt + Ctrl + 方向键` 向某个方向复制黏贴选区像素。
* `ctrl + K` 打开首选项

## 破解 Adobe Photoshop CC
这里以 Mac 版为例。Windows 也类似
1 断网安装
2 在 hosts 文件(位于`/ect/hosts`)中加如下内容：  
```
127.0.0.1 activate.adobe.com
127.0.0.1 practivate.adobe.com
127.0.0.1 ereg.adobe.com
127.0.0.1 activate.wip3.adobe.com
127.0.0.1 wip3.adobe.com
127.0.0.1 3dns-3.adobe.com
127.0.0.1 3dns-2.adobe.com
127.0.0.1 adobe-dns.adobe.com
127.0.0.1 adobe-dns-2.adobe.com
127.0.0.1 adobe-dns-3.adobe.com
127.0.0.1 ereg.wip3.adobe.com
127.0.0.1 activate-sea.adobe.com
127.0.0.1 wwis-dubc1-vip60.adobe.com
127.0.0.1 activate-sjc0.adobe.com
127.0.0.1 lmlicenses.wip4.adobe.com
127.0.0.1 lm.licenses.adobe.com
127.0.0.1 na1r.services.adobe.com
127.0.0.1 hlrcv.stage.adobe.com
```
3 方法1，启动 Photoshop，点击连接Intenet时出现问题，然后用注册机完成剩下部分。方法2，把破解的 amtlib.framework 替换 Adobe Photoshop CC 2015.5.app/Contents/Frameworks 下的 amtlib.framework。

详细见[这里](http://www.waitsun.com/adobe-cc-2015-sn.html)和[这里](http://www.yunrui.co/33230.html)。