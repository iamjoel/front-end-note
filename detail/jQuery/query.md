# jQuery之查询
## 选取元素
### 用选择器选取元素
```
$(选择器)
```

支持CSS1-3的选择器。    

注意：选择器中如果要使用选择器的元字符（包括`!"#$%&'()*+,./:;<=>?@[\]^{|}~`），必须用`\\`来转义。如选择id为`id="foo.bar"`元素，要使用`$("#foo\\.bar")`。

### 层级关系
#### 向上找
* .closest
* .parent
* .parents

#### 向下找
* .find
* .children
* .contents 包括文本节点

### 同级找
* .siblings

### 过滤
* .filter

## 选取属性
* .attr
* .prop

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
$(elem).html();
```

## 获取元素的outerHTML
```
$(elem).prop('outerHTML');
```

## 获取元素的文本内容
```
$(elem).text();
```

## 获取元素的数据
.data

