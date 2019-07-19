# 授权
## 获取用户的授权设置
```
wx.getSetting({
  success (res) {
    console.log(res.authSetting)
    // res.authSetting = {
    //   "scope.userInfo": true,
    //   "scope.userLocation": true
    // }
  }
})
```

## 打开设置
调起客户端小程序设置界面，返回用户设置的操作结果。2.3.0 版本开始，用户发生点击行为后，才可以跳转打开设置页，管理授权信息。
**设置界面只会出现小程序已经向用户请求过的权限。**

打开小程序设置页的方法
```
<!-- 方法一 -->
<button open-type="openSetting" bindopensetting="callback">打开设置页</button>

<!-- 方法二 -->
<button bindtap="openSetting">打开设置页</button>  openSetting() {wx.openSetting()}
```

示例：

```
wx.openSetting({
  success (res) {
    console.log(res.authSetting) // 操作结果
    // res.authSetting = {
    //   "scope.userInfo": true,
    //   "scope.userLocation": true
    // }
  }
})
```