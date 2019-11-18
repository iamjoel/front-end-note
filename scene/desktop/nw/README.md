# NW.js
> NW.js is an app runtime based on Chromium and node.js. You can write native apps in HTML and JavaScript with NW.js. It also lets you call Node.js modules directly from the DOM and enables a new way of writing native applications with all Web technologies.

## 代码片段
全屏
```
var gui = require('nw.gui');
var win = gui.Window.get();
win.maximize();
```

## 资源
* [GitHub](https://github.com/nwjs/nw.js)
* [文档](http://docs.nwjs.io)
* [Manifest format](https://github.com/nwjs/nw.js/wiki/Manifest-format) 配置文档。 