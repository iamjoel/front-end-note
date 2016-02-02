# 获取和设置元素信息
## 属性
* .attr('属性名' [,值] )
* .prop('属性名' [,值] )

## 获取样式
* .css

## 获取尺寸
* .height
* .width

## 位置
* position
* offset

## 是否满足某个条件
.is。如是否可见
```
$(selector).is(':visible');
```

## 获取元素的innerHTML
```
$(selector).html();
```

## 获取元素的标签名
```
$(selector).prop("tagName").toLowerCase();
```
$(selector).prop("tagName")返回的为全大写的

## 获取元素的outerHTML
```
$(selector).prop('outerHTML');
```

## 获取元素的文本内容
```
$(selector).text();
```

## 获取元素的数据
.data
