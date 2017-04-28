# Mock.js 写法示例
[官网](http://mockjs.com/) [文档](https://github.com/nuysoft/Mock/wiki)

## 拦截 ajax
```
// 如果是 Get 方式， 如果带请求参数，就需要用正则来匹配路径
Mock.mock(new RegExp(url), ({ url, body }) => {
  var type = /type=(\w+)/.exec(url)[1]
  var data = orgData[type]
  return setRespose(data)
})

```

## 造数据
先要获取 Random 对象。
```
var Random = Mock.Random
```

* `Random.cname()` 随机中文名
* `Random.name()` 随机英文名
* 数据类型
  * `Random.natural( min?, max? )` 随机自然数（大于等于 0 的整数）。
  * `Random.integer( min?, max? )` 随机整数
  * `Random.float( min?, max?, dmin?, dmax? )` 随机浮点数
  * `Random.character( 'lower|upper|number|symbol' )` 随机字符
  * `Random.string( pool?, min?, max? )` 随机字符串
  * `Random.boolean( 'lower|upper|number|symbol' )` 随机布尔值
* `Random.date( format? )` 随机日期