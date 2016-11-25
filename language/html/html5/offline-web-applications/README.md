# 应用缓存(Offline Web Applications)
应用程序缓存为应用带来三个优势：
* 离线浏览 - 用户可在应用离线时使用它们
* 速度 - 已缓存资源加载得更快
* 减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源

注意：该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

## 示例
index.html
```
<html lang="en" manifest="index.manifest">
</html>
```

index.manifest

```
CACHE MANIFEST
# v1 2011-08-14
# This is another comment
index.html
cache.html
style.css
image1.png

# Use from network if available
NETWORK:
network.html

# Fallback content
FALLBACK:
/ fallback.html
a.png image1.png
```

## MANIFEST 字段说明
### CACHE:
这是缓存文件中记录所属的默认段落。在 CACHE: 段落标题后(或直接跟在 CACHE MANIFEST 行后)列出的文件会在它们第一次下载完毕后缓存起来。

#### NETWORK
在 NETWORK: 段落标题下列出的文件是需要与服务器连接的白名单资源。所有类似资源的请求都会绕过缓存，即使用户处于离线状态。可以使用通配符。

### FALLBACK
FALLBACK: 段指定了一个后备页面，当资源无法访问时，浏览器会使用该页面。该段落的每条记录都列出两个 URI—第一个表示资源，第二个表示后备页面。两个 URI 都必须使用相对路径并且与清单文件同源。可以使用通配符。

## 其他
发现微信 6.x 不支持该特性。原生的手机浏览器支持。

## 参考
* [MDN 应用缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Using_the_application_cache)
