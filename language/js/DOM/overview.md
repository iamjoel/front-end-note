# DOM 操作写法示例
## 选取元素
```
document.querySelector('.btn') // 返回找到的第一个，不存在返回 null
document.querySelectorAll('.btn') // 返回所有，类型是 NodeList。不存在返回长度为 0 的 NodeList
```

## 遍历元素
```
[].slice.call(document.querySelectorAll('a')).forEach(function(el, index){
  console.log( index + ": " + el.innerHTML );
})
```

## 内容
```
document.querySelector('.btn').textContent
document.querySelector('.btn').textContent = 'xxx'
```

## 所有兄弟元素
```
[].filter.call(el.parentNode.children, function(child) {
  return child !== el;
})
```

## 前一个元素
```
el.previousElementSiblin
```

## 后一个元素
```
el.nextElementSibling
```


## 控制表单元素
### 获取/设置值
```
document.querySelector('#my-input').value // 获取
document.querySelector('#my-input').value = 3 // 设置
```

## 单选/复选框选中状态