# 页面
## 注册页面
注册小程序中的一个页面。 
```
Page({
  data: {
    text: "This is page data."
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() { // 页面初次渲染完成
    // Do something when page ready.
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function() {
    // Do something when page scroll
  },
  onResize: function() {
    // Do something when page resize
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function() {
      // this is setData callback
    })
  },
  customData: {
    hi: 'MINA'
  }
})
```

## getCurrentPages
获取当前页面栈。 注意：
* 不要尝试修改页面栈，会导致路由以及页面状态错误。
* 不要在 App.onLaunch 的时候调用 getCurrentPages()，此时 page 还没有生成。

小程序最多打开10个页面，超过10个页面后，就不能再打开页面了。
```
 var pages = getCurrentPages();
console.log("pages:" + pages.length);
if (pages.length == 10) {
  wx.showToast({
    title: "页面打开太多，请回退关闭几个页面",
    icon: 'none',
    duration: 2000
  })
  setTimeout(() => {
    wx.navigateBack({

    })
  }, 2000)
  return;
}
```

