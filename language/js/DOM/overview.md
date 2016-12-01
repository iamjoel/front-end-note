## 选取元素
```
document.querySelector('a') // 返回找到的第一个，不存在返回 null
document.querySelectorAll('a') // 返回所有，类型是 NodeList。不存在返回长度为 0 的 NodeList
```

## 遍历元素
```
[].slice.call(document.querySelectorAll('a')).forEach(function(el, index){
  console.log( index + ": " + el.innerHTML );
})
```


## 创建元素
```
var newEl = document.createElement('div')
```

## 元素的末尾插入子元素
```
el.appendChild(newEl)
```

## 元素的开始插入子元素
```
el.insertBefore(newEl, el.firstChild)
```

## 当前元素前面插入元素
```
el.parentNode.insertBefore(newEl, el)
```

## 当前元素后面插入元素
```
el.parentNode.insertBefore(newEl, el.nextSibling)
```

## 删除元素
```
el.parentNode.removeChild(el)
```

## 表单元素
### 获取/设置值
```
document.querySelector('#my-input').value // 获取
document.querySelector('#my-input').value = 3 // 设置
```

## 单选/复选框选中状态
```
document.querySelector('input[type=checkbox]').checked
document.querySelector('input[type=checkbox]').checked = true
```

## 内容
```
el.textContent
el.textContent = 'xxx'
el.innerHTML
el.innerHTML = 'xxx'
```

## 属性
```
el.getAttribute('href')
el.setAttribute('href', 'xxx')
el.tagName
```

## 类名
```
el.classList.add(className)
el.classList.remove(className)
el.classList.contains(className) // hasClass
```

## 样式
```
// 注意：此处为了解决当 style 值为 auto 时，返回 auto 的问题
var win = el.ownerDocument.defaultView;
// null 的意思是不返回伪类元素
win.getComputedStyle(el, null).color; // 获取元素的颜色

el.style.color = '#ff0011'

```

## 尺寸
```
// 与 jQuery 一致（一直为 content 区域的高度）
function getHeight(el) {
  const styles = this.getComputedStyle(el);
  const height = el.offsetHeight;
  const borderTopWidth = parseFloat(styles.borderTopWidth);
  const borderBottomWidth = parseFloat(styles.borderBottomWidth);
  const paddingTop = parseFloat(styles.paddingTop);
  const paddingBottom = parseFloat(styles.paddingBottom);
  return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
}
// 精确到整数（border-box 时为 height 值，content-box 时为 height + padding + border 值）
el.clientHeight;
// 精确到小数（border-box 时为 height 值，content-box 时为 height + padding + border 值）
el.getBoundingClientRect().height;

```

## 事件
```
el.addEventListener('click', function(event){
  console.log(this.innerHTML)
})
```

## 参考
* [You Don't Need jQuery](https://github.com/oneuijs/You-Dont-Need-jQuery/blob/master/README.zh-CN.md)