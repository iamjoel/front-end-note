### 跨域请求

如果是跨域请求，会发 option 请求。预检请求（Preflighted Requests）会检测
* 响应头 Access-Control-Allow-Header 的范围是否大于 Access-Control-Request-Headers。
* 请求域名是否在 Access-Control-Allow-Origin 的值中
* 请求的方法是否在 Access-Control-Allow-Method 中

如果满足条件，会报错。