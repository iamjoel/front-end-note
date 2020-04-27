# Web 前端性能优化
## 优化方向
* 页面加载速度。
* 代码运行速度。

## 优化方法
1. 指定优化目标。目标需要是具体的，可度量的。比如，在 50Kb 每秒的网络环境下，加载首屏所用时间少于 2 秒。
1. 从大头去优化。如果提高页面加载速度，考虑优化加载时间最长的资源。如果要提高代码运行速度，考虑优化最耗时的操作。
1. 制定和实施优化策略。
1. 验证。

## 提升页面加载速度
* 缓存。
  * 静态资源缓存。
  * 某些ajax接口的缓存。
  * 减少样式和脚本的内联。因为内联的是没法被缓存的。
* 减少 HTTP 发送内容的大小。
  * 服务器端启用压缩服务，如用 gzip。
  * 精简代码。
  * 图片
    * 图片压缩。
    * 图片文件选用合适的格式。
      * 考虑 WebP 格式的图片。
      * 对于色彩数不是很丰富的图片，使用`png`格式。
  * 用没有 Cookie 的域来放静态资源。
* 减少 HTTP 数量。
  * 合并文件。
    * 将多个样式表合并成一个。将多个脚本文件合并成一个。
    * 小图标可以用图片精灵 或 图标字体。
  * 首屏的一些 CSS 可以考虑内联。
  * 体积比较小的图片可以考虑内联。
  * 避免空的 src 和 href。
* 提升资源下载速度。
  * 使用 CDN。
  * 无阻塞加载 Script。
* 减少 DNS 查找时间。
  * 减少域名数量。
* 避免重定向。
* 其他。
  * CSS 写在 `<head>` 中，JS 写在 `</body>` 前。

## 页面性能术语
### TTFB（Time To First Byte）
最初的网络请求被发起到从服务器接收到第一个字节这段时间。

### DNS时间
用户在浏览器输入网址名称（网址）后，浏览器通过查询DNS服务器所需要的时间

### 建立连接时间
根据TCP协议要求，请求方（浏览器等）与接受方（服务器）经过一系列协商所需要的时间

### 服务器处理时间
接收方（服务器）处理请求所需时间

### 数据传输时间
从请求方（浏览器等）到接收方（服务器）以及从接收方（服务器）到请求方的时间

### 白屏时间
用户浏览器输入网址后至浏览器出现至少1px图片为止。

### 首屏时间
用户浏览器首屏内所有的元素呈现所花费时间。

### 用户可操作时间(dom ready)
网站某些功能可以使用的时间。

### 页面总下载时间(onload)
网站中所有资源加载完成并且可用时间。

## 提升代码运行速度
### JavaScript
* 优化耗时的循环。
* 缓存一些耗性能的中间结果。
* 将耗时的任务交给 worker 来做。
* 防止内存泄漏。
* 算法改进。

### CSS
* 如果需要动态更改CSS样式，尽量采用触发 reflow 次数较少的方式。
* 选择器优化。
* 避免使用 CSS 表达式。

### HTML
* 尽量不要用 iframe。
* 减少 DOM 数量。

## 工具
* [YSlow](http://yslow.org/) 分析网站，提出提升网站性能的建议。
* [阿里测](http://alibench.com/) 网站在不同地区的访问情况。
* Chrome 开发工具中的 Profiles 和 Timeline。
* [jsPerf](http://jsperf.com/) JS 执行效率测试。
* [Benchmark.js](https://benchmarkjs.com/) 同 jsPerf。

## 参考
* [15年双11手淘前端技术巡演 - H5性能最佳实践](https://github.com/amfe/article/issues/21)
* [性能 CheckList v1.0](http://ntx.me/2015/03/02/checkList/)
* [WebP 探寻之路](http://isux.tencent.com/introduction-of-webp.html)
* [Introducing RAIL: A User-Centric Model For Performance](http://www.smashingmagazine.com/2015/10/rail-user-centric-model-performance/)
* [内存泄露](http://jinlong.github.io/2016/05/01/4-Types-of-Memory-Leaks-in-JavaScript-and-How-to-Get-Rid-Of-Them)
* http://yanhaijing.com/jquery/2013/12/05/writing-better-jquery-code/
* https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/
* https://github.com/CN-Chrome-DevTools/CN-Chrome-DevTools Chrome 开发者工具中文手册
* https://developers.google.com/chrome-developer-tools/docs/demos/memory/example1.html
* https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/
* https://developer.chrome.com/devtools/docs/demos/memory

