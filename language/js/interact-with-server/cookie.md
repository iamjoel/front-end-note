# cookie
> cookie是存储在客户端的一小段数据，客户端通过HTTP协议和服务器端进行Cookie交互

## 出现cookie的原因
HTTP协议是无状态的协议。一旦数据交换完毕，客户端与服务器端的连接就会关闭，再次交换数据需要建立新的连接。这就意味着服务器无法从连接上跟踪会话。即用户A购买了一件商品放入购物车内，当再次购买商品时服务器已经无法判断该购买行为是属于用户A的会话还是用户B的会话了。要跟踪该会话，必须引入一种机制。    

Cookie就是这样的一种机制。用Cookie可以来跟踪会话。

## cookie包含的属性
* name
* value
* domian
* path
* expires
* secure
* http-only

## 属性详解
### name 和 value
cookie的名称和值

### domain

### path

### http only
在页面里不能通过JS来读写

### security
设置为true时，只在HTTPS连接下才会发送

## cookie的发送
如果请求的url满足domain,path,http only,security的限制时，请求头中会包含cookie。


## 其他注意点
1. 浏览器cookie存储大小的限制
1. 客户端向服务器端发异步请求，如果服务器端在响应时设置cookie,那cookie要刷新页面后才会生效。如果用js来设置cookie，则即时生效的。