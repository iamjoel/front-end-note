# 字符串方法
## 创建
```
var str = ''
var str = ""
var str = ``
```

## 改
字符串连接
```
'a' + 'b'

var a = 'a'
var b = 'b'
`${a}${b}`

'a'.concat('b')
```

转化成数组
```
'a,b,c'.split(',') // ['a', 'b', 'c']
```

去空格
```
' abc '.trim()
' abc '.leftTrim()
' abc '.rightTrim()
```

子字符串
```
'abcd'.slice(0,2) // 'ab'
'abcd'.slice(0,-1) // 'abc'
```

替换
```
'abc'.replace('a', 'b') // 'bbc'
'aac'.replace(/a/g, 'b') // 'bbc'
```

编码
```
encodeURIComponent('我')
decodeURIComponent(encodeURIComponent('我'))
```

大小写
```
'abc'.toUpperCase()
'abc'.toLowerCase()
```

## 查
包含
```
'abc'.includes('a') // true
'abc'.indexOf('a') !== -1 // true
```

格式验证
```
/\d{11}/.test('13834333333')
```

求值
```
eval('3+5')
```
