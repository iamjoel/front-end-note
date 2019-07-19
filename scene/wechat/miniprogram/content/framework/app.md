# App
## 注册 App
在 小程序 根路径的 `app.js` 下注册。
```
App({
  onLaunch (options) { // 监听小程序初始化
    // Do something initial when launch.
  },
  onShow (options) { // 监听小程序启动或切前台
    // Do something when show.
  },
  onHide () { // 监听小程序切后台
    // Do something when hide.
  },
  onError (msg) {
    console.log(msg)
  },
  onPageNotFound() { // 页面不存在监听函数。
    wx.redirectTo({ // 页面找不到后，跳转到指定页面
      url: 'pages/...'
    }) // 如果是 tabbar 页面，请使用 wx.switchTab
  },
  globalData: {}
})
```

## 获取 App
```
var appInstance = getApp()
console.log(appInstance.globalData)
```