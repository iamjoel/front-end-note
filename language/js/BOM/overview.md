# BOM 操作写法示例
## 浏览器相关信息
```
// 浏览器信息
navigator.userAgent // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36
// 运行浏览器的操作系统平台
navigator.platform // MacIntel
```

## 浏览记录历史
```
// 前进
history.forward()
// 后退
history.back()
```

## url 信息
### 页面跳转
```
// 当前页面会记入浏览记录历史
location.href = 'http://www.baidu.com'
// 当前页面不会记入浏览记录历史
location.replace('http://www.baidu.com')
```

### 页面重新加载
```
location.reload()
```

### 获得当前 url 的信息
```
// 假设当前 url 是 http://192.168.31.194:8000/jquery/index.html?a=3&c=aa#b

location.href // 完整的url
location.hostname // 192.168.31.194
location.host // 192.168.31.194:8000
location.port // 8000
location.protocol // http:
location.search // ?a=3&c=aa
location.hash // #b
location.pathname // /jquery/index.html

```

## 全局对象
### 信息弹出框
```
alert('你很帅！')
```

### 确认弹出框
```
var isReady = confirm('准备好来吗?')
if (isReady) {
  
} else {
  
}
```

### 输入信息弹出框
```
var name = prompt('请输入你的名字')
console.log(name)
```

### 打开一个新窗口
```
open('http://baidu.com')
// 改变某个窗口的 url
open('http://baidu.com', 'a')
open('http://youku.com', 'a') // 上面窗口的地址会从 百度 变成 优酷的
```

### 过段时间后执行
```
// 1 秒后执行
setTimeout(function() {
  // doSth
}, 1000)

```

### 每隔一段时间执行
```
var i = 1
// 每隔 1 秒后执行
var runId = setInterval(function(){
  console.log(i++)
  if(i >= 10) {
    clearInterval(runId) // 停止执行
  }
}, 1000)
```

### 屏幕每次刷新时执行
一般是渲染一些 UI。
```
var targetEl = document.querySelector('.tar')
var res
var isStop
var runId = requestAnimationFrame(function(){
  targetEl.text(res)
  if(isStop) {
    cancelAnimationFrame(runId)
  }
})
```

### 在控制台输出信息
```
console.log('日志信息')
console.warn('警告信息')
console.info('普通信息')
console.error('错误信息')

console.log('1+2 = %d', 3)
var person = {name: 'Joel', gender: '男'}
console.log('名字：%s，性别：%s', person.name, person.gender)

```

