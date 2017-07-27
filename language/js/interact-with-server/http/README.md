# HTTP
* [超文本传输协议（HTTP）介绍](intro.md)
* [浏览器缓存](browser-cache.md)

## 未整理
HTTP 1.1 协议 中就把 Connection 的默认值改成了Keep-Alive，这样同一个域名下的多个 HTTP 请求就可以复用同一个 TCP 请求。但不能避免 队头阻塞(HOC: Head of line blocking) （串行，一个一个来）的问题。

HTTP2.0 最重要的一个特点是支持多路复用(Multiplexing)。多路复用指的是同一个域名下的多个 HTTP 请求共同分享同一个 TCP 链接，这是并发的请求，也就是多个请求的数据包可以同时发送。显然，这就要求每个数据包要做好标记，自己属于哪一个 HTTP 请求，这样客户端才能在收到包以后拼装起来。

当然 HTTP2.0 的好处远远不止这些，由于支持了多路复用，我们可以很容易的基于 HTTP2.0 实现长连接，而以往的选择要么是用更底层的 TCP，要么是使用与 HTTP 同级的 Web Socket 协议。


## 推荐阅读
* [HTTP 下午茶](https://ccbikai.gitbooks.io/http-book/content/index.html)
* [Jerry Qu HTTP 相关专题](http://imququ.com/series.html)
* [HTTP 缓存策略](http://foofish.net/blog/95/http-cache-policy)
* [http2讲解](https://www.gitbook.com/book/ye11ow/http2-explained/details)
* [HTTP 权威指南](http://book.douban.com/subject/10746113/)
* bestswifter 的[网络基础知识系列](http://www.jianshu.com/nb/3276500)
  * [[面试∙网络] TCP/IP（一）：数据链路层](http://www.jianshu.com/p/f16d7f3c8d5f)
  * [[面试∙网络] TCP/IP（二）：IP协议](http://www.jianshu.com/p/9cb5cf1864da)
