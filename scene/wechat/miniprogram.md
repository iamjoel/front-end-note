# 小程序
[文档](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=19031317)

## API
### 同步，异步 API
以 Sync 结尾的 API 一定是同步 API。也有一些 同步API 是不以 Sync 结尾的。

异步 API 通常都接受一个 Object 类型的参数。该参数包括:
* success: 接口成功回调
* fail: 接口失败回调
* complete: 接口调用结束的回调函数。调用成功、失败都会执行。

这三个参数都会包含 
* errMsg 错误信息，如果调用成功返回 ${apiName}:ok。
* errCode 错误码，仅部分 API 支持。

### 常用 API
#### 路由
* wx.redirectTo 关闭当前页面，跳转到应用内的某个页面
* wx.navigateTo 保留当前页面，跳转到应用内的某个页面

#### 显示信息
* wx.showToast|wx.hideToast 信息提示
* wx.showModal 模态框
* wx.showLoading|wx.hideLoading
* wx.showActionSheet 显示操作菜单

#### 导航
* wx.setNavigationBarTitle({title: '商品详情页'}) 设置导航栏标题
* wx.setNavigationBarColor({frontColor: '#ffffff|#000000', backgroundColor: '#ff0000'})

#### 数据存储
* wx.setStorageSync(string key, any data)
* wx.getStorageSync(string key)
* wx.removeStorageSync(string key)

### 获取用户信息
wx.getUserInfo({success(userInfo) => {}})。 需要授权。 UseInfo 包括 昵称，头像，性别，所在国家，省，市。不包括 openid。

wx.login({success({code}) => {}}) 。拿到 code 后，调用服务器端代码，服务器拿 code 去换 openid, session_key。

### 数据分析
* 数据上报 wx.reportMonitor(string name, number value)
* 数据分析 wx.reportAnalytics(string eventName, Object data)

#### 页面滚动
* wx.pageScrollTo({scrollTop: 100 /*单位px*/, duration: 200 /*单位毫秒*/})

#### 背景音频
* wx.getBackgroundAudioManager()
* BackgroundAudioManager.play()|pause()

#### 其他
位置，录音，相机。

### 授权
询问用户是否同意授权小程序使用某项功能或获取用户的某些数据。示例代码

```
wx.getSetting({ // 获取用户当前的授权状态。
  success(res) {
    if (!res.authSetting['scope.record']) {
      wx.authorize({
        scope: 'scope.record',
        success() {
          // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
          wx.startRecord()
        }
      })
    }
  }
})
```

需要授权的有: 用户信息,地理位置，通讯地址，发票抬头，获取发票，微信运动步数量，录音功能，摄像头，保存到相册。

具体见[这里](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)。

### 客服
```
<button open-type="contact" bindcontact="handleContact"></button>
```

bindcontact 事件回调获取到用户所点消息的页面路径 path 和对应的参数 query