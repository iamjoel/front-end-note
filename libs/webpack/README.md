# webpack

webpack 不支持加载外部js ，但用 微信，钉钉之类的 jssdk，必须加载外部js 。可以用 [little-loader](https://github.com/walmartlabs/little-loader) 来做，如下
```
var load = require("little-loader");

load("http://example.com/foo.js", function (err) {
  // ... your code ...
});
```