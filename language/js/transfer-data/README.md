# 同域的页面间传递数据
同域指页面URL的协议，端口号和host(document.domain)一样。

## 方法1:用 postMessage
两个页面需要如果存在如下两种关系之一，才可以用 postMessage 来传递数据。
* 关系1: 页面1 用 `window.open` 打开 页面2
* 关系2: 页面1 有 iframe，iframe的地址为页面2

原理是： 可以用 `targetWindow.postMessage` 向目标页面发数据，页面可以监听 `onmessage` 事件来接收其他页面发的数据。

实现如下，  
页面1
```
var popup = window.open('page2.html') // 关系1
var iframe = window.frames[0] // 关系2

popup.postMessage('向页面2发的数据', '*')
iframe.postMessage('向页面2发的数据', '*')

// 接收页面2发送的数据
window.addEventListener("message", function(event) {
  event.data // 收到的页面2发送的数据
})
```

页面2
```
window.addEventListener("message", function(event) {
  event.data // 页面1发送的数据
  event.source.postMessage('向页面1发的数据', '*')
}, false)
```

更详细的描述见[这里](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)。

## 方法2:监视 window.name 的变化
两个页面需要如果存在用 postMessage 一样的关系。才可以用监视 window.name 的变化来传递数据。

原理是：满足上面关系的页面可以修改打开各自 window 的 name 值，通过修改 name 值来传递数据。

实现如下，  
页面1
```
popup.name =  '向页面2发的数据'
iframe.name = '向页面2发的数据'

```

页面2
```
setInterval(function(){
  window.name  // 页面1发送的数据
  var sourceWindow = window.opener || window.top
  sourceWindow.name = '向页面1发的数据'
}, 2000)
```

## 方法3:监视 webStroge 的变化
原理是，当某个页面的webStroge的值发生变化后，会触发其他页面的 `onstorage` 事件。

实现如下，  
页面1
```
localStorage.setItem('xx-item', '向页面2发的数据')

window.addEventListener('storage', function(){
  localStorage.getItem('xx-item2') // 收到的页面2发送的数据
}, false)
```

页面2
```
localStorage.setItem('xx-item2', '向页面1发的数据')

window.addEventListener('storage', function(){
  localStorage.getItem('xx-item') // 收到的页面1发送的数据
}, false)
```

更详细的描述见[这里](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Responding_to_storage_changes_with_the_StorageEvent)。

## 方法4:借助服务器
用 WebSocket 或 通过某个接口来修改数据，通过某个接口来获得数据。