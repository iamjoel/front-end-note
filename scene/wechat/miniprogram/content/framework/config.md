# 小程序配置
配置包括：全局配置，页面配置 和 sitemap 配置。

## 全局配置
根目录下的 `app.json` 文件用来对微信小程序进行全局配置。 [文档地址](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)。

### pages
配置小程序包含的页面。如：
```
pages: ["pages/index/index", "pages/logs/logs"]
```

### window
用于设置小程序的状态栏、导航条、标题、窗口背景色。如：
```
"window": {
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "微信接口功能演示",
  "backgroundColor": "#eeeeee",
  "backgroundTextStyle": "light"
}
```

### tabBar
tabBar 的配置。 tabBar 只能配置最少 2 个、最多 5 个 tab。

### 权限
用 `permission` 来设置。如：
```
"permission": {
  "scope.userLocation": {
    "desc": "你的位置信息将用于小程序位置接口的效果展示"
  }
}
```

### 跳转到其他小程序
当小程序需要使用 wx.navigateToMiniProgram 接口跳转到其他小程序时，需要先在配置文件中声明需要跳转的小程序 appId 列表，最多允许填写 10 个。如

```
navigateToMiniProgramAppIdList: []
```

### 其他
* usingComponents 全局自定义组件配置。
* plugins 使用到的插件。
* networkTimeout 网络超时时间。
* debug 是否开启 debug 模式，默认关闭。
* requiredBackgroundModes 需要在后台使用的能力，如「音乐播放」。
* functionalPages 是否启用插件功能页，默认关闭

## 页面配置
每个页面可以用 `xx.json` 来配置每个页面进行配置。如：

```
{
  "navigationBarBackgroundColor": "#ffffff", // 会覆盖 app.json 里的值
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "微信接口功能演示",
  "backgroundColor": "#eeeeee",
  "backgroundTextStyle": "light",
  "usingComponents": {
    "painter":"/components/painter/painter"
  }
}
```

### 下拉刷新
默认不开启。
```
enablePullDownRefresh: true
```

监听下拉刷新
```
Page({
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
})
```

## sitemap 配置
小程序根目录下的 sitemap.json 文件用于配置小程序及其页面是否允许被微信索引，文件内容为一个 JSON 对象，如果没有 sitemap.json ，则默认为所有页面都允许被索引。如
```
{
  "rules":[{
    "action": "allow", // 能被索引
    "page": "path/to/page",
    "params": ["a", "b"],
    "matching": "exact"
  }, {
    "action": "disallow", // 不能被索引
    "page": "path/to/page"
  }]
}
```


