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
路由
* wx.redirectTo 关闭当前页面，跳转到应用内的某个页面
* wx.navigateTo 保留当前页面，跳转到应用内的某个页面

显示信息
* wx.showToast|wx.hideToast 信息提示
* wx.showModal 模态框
* wx.showLoading|wx.hideLoading
* wx.showActionSheet 显示操作菜单