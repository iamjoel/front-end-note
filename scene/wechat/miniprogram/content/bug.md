# 常见问题
## 在CSS用背景图用本地路径，图片不显示
原因：在 CSS 中设置背景图不支持本地图片。
解决方案：用 base64 的或者网络路径。或者用 `image` 标签。

## IOS 中设置了背景色的图片不显示
解决方案：不要在 Image 上设置背景色。

## 小程序中嵌入 webview 的页面有哪些限制
1. 个人类型的小程序暂不支持使用 webview。
1. webview 指向网页的链接。可打开关联的公众号的文章，其它网页需登录小程序管理后台配置业务域名。
1. webview 支持的jssdk 是有限的，比如不支持微信支付。

[webview 文档](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html)

## 小程序支持长按识别公众号二维码吗？
官方宾没有说明，只说 "image组件中二维码/小程序码图片不支持长按识别。仅在wx.previewImage中支持长按识别"。 

有网友说： 可以实现识别跳转到webview，但公众号不行(有些矛盾。。。) (19-07-30)。[相关链接](https://developers.weixin.qq.com/community/develop/doc/00004c532b06b09dd9e8917f359400?_at=1581596538151)。