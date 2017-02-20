# 微信
## 网页授权
```
https://open.weixin.qq.com/connect/oauth2/authorize?appid=公众号的唯一标识&redirect_uri=真正的地址&response_type=code&scope=snsapi_base&connect_redirect=1#wechat_redirect
```

其中：
* response_type 写死code。必填。
* scope 应用授权作用域，必填。snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）
* #wechat_redirect 无论直接打开还是做页面302重定向时候，必须带此参数，必填。