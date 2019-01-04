# Chrome 插件开发
## Mainfast
```
{
  // 清单文件的版本，这个必须写，而且必须是2
  "manifest_version": 2,
  // 插件的名称
  "name": "demo",
  // 插件的版本
  "version": "1.0.0",
  // 插件描述
  "description": "简单的Chrome扩展demo",
  // 图标，一般偷懒全部用一个尺寸的也没问题
  "icons":
  {
    "16": "img/icon.png",
    "48": "img/icon.png",
    "128": "img/icon.png"
  },
  // 会一直常驻的后台JS或后台页面
  "background":
  {
    // 2种指定方式，如果指定JS，那么会自动生成一个背景页
    "page": "background.html"
    //"scripts": ["js/background.js"]
  },
  // 浏览器右上角图标设置，browser_action、page_action、app必须三选一
  "browser_action": 
  {
    "default_icon": "img/icon.png",
    // 图标悬停时的标题，可选
    "default_title": "这是一个示例Chrome插件",
    "default_popup": "popup.html"
  },
  // 当某些特定页面打开才显示的图标
  /*"page_action":
  {
    "default_icon": "img/icon.png",
    "default_title": "我是pageAction",
    "default_popup": "popup.html"
  },*/
  // 需要直接注入页面的JS
  "content_scripts": 
  [
    {
      //"matches": ["http://*/*", "https://*/*"],
      // "<all_urls>" 表示匹配所有地址
      "matches": ["<all_urls>"],
      // 多个JS按顺序注入
      "js": ["js/jquery-1.8.3.js", "js/content-script.js"],
      // JS的注入可以随便一点，但是CSS的注意就要千万小心了，因为一不小心就可能影响全局样式
      "css": ["css/custom.css"],
      // 代码注入的时间，可选值： "document_start", "document_end", or "document_idle"，最后一个表示页面空闲时，默认document_idle
      "run_at": "document_start"
    },
    // 这里仅仅是为了演示content-script可以配置多个规则
    {
      "matches": ["*://*/*.png", "*://*/*.jpg", "*://*/*.gif", "*://*/*.bmp"],
      "js": ["js/show-image-content-size.js"]
    }
  ],
  // 权限申请
  "permissions":
  [
    "contextMenus", // 右键菜单
    "tabs", // 标签
    "notifications", // 通知
    "webRequest", // web请求
    "webRequestBlocking",
    "storage", // 插件本地存储
    "http://*/*", // 可以通过executeScript或者insertCSS访问的网站
    "https://*/*" // 可以通过executeScript或者insertCSS访问的网站
  ],
  // 普通页面能够直接访问的插件资源列表，如果不设置是无法直接访问的
  "web_accessible_resources": ["js/inject.js"],
  // 插件主页，这个很重要，不要浪费了这个免费广告位
  "homepage_url": "https://www.baidu.com",
  // 覆盖浏览器默认页面
  "chrome_url_overrides":
  {
    // 覆盖浏览器默认的新标签页
    "newtab": "newtab.html"
  },
  // Chrome40以前的插件配置页写法
  "options_page": "options.html",
  // Chrome40以后的插件配置页写法，如果2个都写，新版Chrome只认后面这一个
  "options_ui":
  {
    "page": "options.html",
    // 添加一些默认的样式，推荐使用
    "chrome_style": true
  },
  // 向地址栏注册一个关键字以提供搜索建议，只能设置一个关键字
  "omnibox": { "keyword" : "go" },
  // 默认语言
  "default_locale": "zh_CN",
  // devtools页面入口，注意只能指向一个HTML文件，不能是JS文件
  "devtools_page": "devtools.html"
}
```

## content-scripts
是Chrome插件中向页面注入脚本的一种形式。 content-scripts 能访问 DOM，但 不能访问绝大部分 `chrome.xxx.api`。 

在 content-script 中的 CSS，用图片的方式

1 在 Mainfast 中，将图片的路径设置在访问的插件资源列表中，例如
```
  "web_accessible_resources": ["images/*"],
```

2 CSS 中用 `url(chrome-extension://__MSG_@@extension_id__/图片的路径)` 来写。如:
```
  background-image: url(chrome-extension://__MSG_@@extension_id__/images/xx.png)
```

当然，也可用 base64 的方式来做。

## 动态注入资源
### 注入 JS
bacground 和 popup 的 js 不能直接访问 DOM。当通过在 bacground 或 popup 中 注入js，动态注入的js可以访问 DOM。 
```
// 注入文件
chrome.tabs.executeScript(null, {
  file: "路径"
})

// 注入代码
chrome.tabs.executeScript(null, {
  code: 'document.body.style.backgroundColor="red"'
})
```

需要在 `manifest.json` 中配置对应的配置：  
```
"permissions": [ "tabs", "activeTab", "<all_urls>" ],
```

`"<all_urls>"` 也可以改成, `"http://*/*", "https://*/*"` 



## 事件
图标被点击

```
chrome.browserAction.onClicked.addListener(function() {

})
```


## Popup 和 background 的通信
popup可以直接调用background中的JS方法，也可以直接访问background的DOM：
```
// background.js
function test()
{
  alert('我是background！');
}

// popup.js
var bg = chrome.extension.getBackgroundPage();
bg.test(); // 访问bg的函数
alert(bg.document.body.innerHTML)
```

background 调用 popup 的代码如下（前提是popup已经打开）
```
var views = chrome.extension.getViews({type:'popup'});
if(views.length > 0) {
  console.log(views[0].location.href);
}
```

## popup 和 background 向 content 发信息
background.js或者popup.js
```
function sendMessageToContentScript(message, callback)
{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
  {
    chrome.tabs.sendMessage(tabs[0].id, message, function(response)
    {
      if(callback) callback(response);
    });
  });
}

// cmd 是类型
sendMessageToContentScript({cmd:'test', value:'你好，我是popup！'}, function(response)
{
  console.log('来自content的回复：'+response);
})
```

content-script.js 接发信息
```
// 接收信息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
  // console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension")
  // 根据不同类别做不同处理
  if(request.cmd == 'test') alert(request.value);
  sendResponse('我收到了你的消息！')
})

// 发送信息
chrome.runtime.sendMessage({
  method: "xxx", // 调用函数
  cmd: 'xxx', // 执行命令。接受
}, { // 发送的信息
  
}, function(re) {
  sender()
})
```

要注意的是：**chrome.runtime.sendMessage的回调函数默认是同步的，而且超时后直接执行，返回undefined，如果要异步执行，必须在处理函数中return true。**

## content-script主动发消息给后台
chrome.runtime.sendMessage

## 本地存储
推荐用`chrome.storage`而不是普通的`localStorage`。最重要的2点区别是：

* chrome.storage是针对插件全局的，即使你在background中保存的数据，在content-script也能获取到；
* chrome.storage.sync可以跟随当前登录用户自动同步，这台电脑修改的设置会自动同步到其它电脑，很方便，如果没有登录或者未联网则先保存到本地，等登录了再同步至网络；

需要声明storage权限，有chrome.storage.sync和chrome.storage.local2种方式可供选择，使用示例如下：

```
// 读取数据，第一个参数是指定要读取的key以及设置默认值
chrome.storage.sync.get({color: 'red', age: 18}, function(items) {
  console.log(items.color, items.age);
});
// 保存数据
chrome.storage.sync.set({color: 'blue'}, function() {
  console.log('保存成功！');
})
```

## 打包和发布
在插件管理页有一个打包按钮，然后会生成 .crx 文件。npm 上也有打包的包。

花5个$注册成为开发者，上传到应用商店。

## 资源
* [官方开发者文档](https://developers.chrome.com/extensions/api_index)
* [Chrome插件开发全攻略](https://github.com/sxei/chrome-plugin-demo)