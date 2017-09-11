# 微信
[微信JS-SDK 文档地址](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115)。

## 网页授权
[文档](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842)。


```
https://open.weixin.qq.com/connect/oauth2/authorize?appid=公众号的唯一标识&redirect_uri=真正的地址&response_type=code&scope=snsapi_base&connect_redirect=1#wechat_redirect
```

其中：
* response_type 写死code。必填。
* scope 应用授权作用域，必填。snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）
* #wechat_redirect 无论直接打开还是做页面302重定向时候，必须带此参数，必填。
* 注意`真正的地址`需要编码 encodeURIComponent

## 支付
老的不需要注册 jssdk的方式
```
if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
  WeixinJSBridge.invoke(
    'getBrandWCPayRequest',
    data,
  function() {
    // 支付成功
  });
}
```

## 判断是否在微信
```
function isInweixin(){
  var ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('micromessenger') !== -1
}
```

## 分享
[对外分享组件接口文档](http://open.mobile.qq.com/api/component/share) 定制微信，手机QQ，QQ空间APP内的分享内容。

## 一些可能不知道的微信提供的功能
预览图片（wx.uploadImage），指的是小图，点击后，到新窗口打开大图，然后可以放大，缩写查看图片。


