# 超文本传输协议
超文本传输协议（HyperText Transfer Protocol，HTTP）是互联网上应用最为广泛的数据传输协议。

HTTP 是可靠的数据传输协议，能确保数据在传输过程中不会损坏或混乱。

## HTTP 的过程
1. 客户发起连接
2. 客户发送请求
3. 服务器响应请求
4. 服务器关闭连接

## 请求消息结构
一个请求消息是由一个请求行、请求头字段、一个空行、随后的消息主体构成的。
如
```
GET /hello.htm HTTP/1.1
User-Agent: Mozilla/4.0 (compatible; MSIE5.01; Windows NT)
Host: example.com
Accept-Language: en-us
Accept-Encoding: gzip, deflate
```

### 请求行
请求消息的第一行就是请求行。它指明使用的请求方法、资源标示符、和HTTP 版本。如
```
GET /hello.htm HTTP/1.1
```
#### 请求方法
请求方法用来定义操作资源的方式，HTTP/1.1 协议中定义了八种请求方法：
* GET：读取资源数据
* POST：新建资源数据
* PUT：更新资源数据
* DELETE：删除资源数据
* HEAD：读取资源的元数据
* OPTIONS：读取该资源所支持的所有请求方法
* TRACE：回显服务器收到的请求，主要用于测试或诊断
* CONNECT：HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器。通常用于SSL加密服务器的链接（经
由非加密的HTTP代理服务器）

此外，除了上述方法，特定的HTTP服务器还能够扩展自定义的方法。

#### 资源标示符


### 请求头字段
用来传递客户端的更多信息，以及传递解析消息主体的必要信息。如
```
User-Agent: Mozilla/4.0 (compatible; MSIE5.01; Windows NT)
Host: example.com
Accept-Language: en-us
Accept-Encoding: gzip, deflate
```

常见请求头字段有
* Accept
* User-Agent

### 空行
指示头字段区完成，消息主体开始（如果有消息主体的话）。

### 消息主体
消息主体是请求消息的承载数据。比如在提交POST表单，并且表单方法不是GET时，表单数据就是打包在消息主体内的。消息主体是可选的。

## 响应消息结构
响应消息由一个状态行、一个或者多个首部字段行、一个空行、消息主体 构成。如
```
HTTP/1.1 200 OK
Date: Mon, 27 Jul 2009 12:28:53 GMT
Server: Apache/2.2.14 (Win32)
Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT
Content-Length: 88
Content-Type: text/html
Connection: Closed

<html>
   <body>

   <h1>Hello, World!</h1>

   </body>
</html>
```

### 状态行
由http版本、状态码、状态描述文字构成。如
```
HTTP/1.1 200 OK
```

#### 状态码
HTTP 状态码（HTTP Status Code）是用以表示网页服务器 HTTP 响应状态的3位数字代码。

所有的状态码的第一个数字代表了响应的五种状态之一:
* 1xx：代表请求已被接受，需要继续处理。这类响应是临时响应，只包含状态行和某些可选的响应头信息，并以空行 结束。
* 2xx：代表请求接收、理解并且接受。
* 3xx：代表需要客户端采取进一步的操作才能完成请求。通常，这些状态码用来重定向，后续的请求地址（重定向目 标）在本次响应的Location域中指明。当且仅当后续的请求所使用的方法是GET或者HEAD时，用户浏览器才可以 在没有用户介入的情况下自动提交所需要的后续请求。
* 4xx：代表了客户端看起来可能发生了错误，妨碍了服务器的处理。除非响应的是一个HEAD请求，否则服务器就应 该返回一个解释当前错误状况的实体，以及这是临时的还是永久性的状况。
* 5xx：代表了服务器在处理请求的过程中有错误或者异常状态发生，，也有可能是服务器意识到以当前的软硬件资源 无法完成对请求的处理。

常见状态码有：
* 200: 请求已经成功，请求所希望的响应头或者数据体将随着此响应返回
* 202: 服务器已接受请求，但尚未处理。正如它可能被拒绝一样，最终该请求可能会也可能不会被执行。在异步操作的场合下，没有比发送这个状态码更方便的做法了
* 204: 服务器成功处理了请求，但不需要返回任何实体内容，并且希望返回更新了的元信息
* 304: 被请求的资源内容没有发生更改
* 400: 包含语法错误，无法被服务器解析
* 403: 服务器已经接收请求，但是拒绝执行
* 404: 请求失败，请求所希望得到的资源未在服务器上发现
* 408: 请求超时。客户端可以再次提交这一请求而无需任何修改
* 500: 服务器内部错误，无法处理请求
* 502: 作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效响应
* 504: 作为网关或者代理工作的服务器尝试执行请求时，未能及时从上游服务器（URI标识出的服务器，例如HTTP、FTP、LDAP）或者辅助服务器（例如DNS）收到响应

### 响应头字段
和请求消息类似，首部字段会包括服务器本身的一些信息指示、以及响应消息本身的元数据。
```
Date: Mon, 27 Jul 2009 12:28:53 GMT
Server: Apache/2.2.14 (Win32)
Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT
Content-Length: 88
Content-Type: text/html
Connection: Closed
```

### 消息主体
消息主体是响应消息的承载数据。


## 信息报头
* General-header
* Request-header
* Response-header
* Entity-header


### 常见响应头



## 缓存
Expires 和 Cache-Control；

Last-Modified、If-Modified-Since】和【ETag、If-None-Match。

详细介绍 [HTTP 缓存策略](http://foofish.net/blog/95/http-cache-policy)


## 参考链接
* [HTTP 引入](http://www.ituring.com.cn/article/209130)
* [HTTP 协议解析](http://yuez.me/http-xie-yi-jie-xi/)
* [Jerry Qu HTTP 相关专题](http://imququ.com/series.html)

## 书籍
* [HTTP 下午茶](https://ccbikai.gitbooks.io/http-book/content/index.html)
* [http2讲解](https://www.gitbook.com/book/ye11ow/http2-explained/details)
* [HTTP 权威指南](http://book.douban.com/subject/10746113/) 大部头~
