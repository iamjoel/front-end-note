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
* wx.navigateToMiniProgram({appId, path, extraData}) 打开另一个小程序。 navigator 组件也可以完成该功能。

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

登录：  
wx.login({success({code}) => {}}) 。拿到 code 后，调用服务器端代码，服务器拿 code 去换 openid, session_key。

检查登录情况：
```
wx.checkSession({
  success() {
    // session_key 未过期，并且在本生命周期一直有效
  },
  fail() {
    // session_key 已经失效，需要重新执行登录流程
    wx.login() // 重新登录
  }
})
```

获取用户手机号。 
```
<button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber"></button>
```

注意：获取微信用户绑定的手机号，需先调用wx.login接口。该接口针对非个人开发者，且完成了认证的小程序开放。

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

## 尺寸单位
rpx（responsive pixel）: 屏幕的宽度是 750rpx。会自动做响应式的处理。


### 打开 App
比较复杂。和场景值有关。

## 更新机制
小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」。 假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动；冷启动指的是用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动。

小程序冷启动时如果发现有新版本，将会异步下载新版本的代码包，并同时用客户端本地的包进行启动，即新版本的小程序需要等下一次冷启动才会应用上。 如果需要马上应用最新版本，可以使用 wx.getUpdateManager API 进行处理。

## 真机调试
点击开发者工具的工具栏上 “远程调试” 按钮。工具会将本地代码进行处理打包并上传，就绪之后，使用手机客户端扫描二维码即可弹出调试窗口，开始远程调试。

## 其他资源
* [微信小程序设计指南](https://developers.weixin.qq.com/miniprogram/design/index.html)
