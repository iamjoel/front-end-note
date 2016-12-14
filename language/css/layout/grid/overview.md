# Grid 布局写法示例
Grid 可以简便、完整、响应式地实现各种页面布局。它比 Flex 布局功能更强大。

Grid 布局是一个实验特性，目前移动浏览器都不支持该特性。在 Chrome 中使用该特性需要在 `chrome://flags` 中启用 `#enable-experimental-web-platform-features` 。

## 多个元素在一行
HTML
```
<div class="ly">
  <div class="ly__item">xxx</div>
  <div class="ly__item">xxx</div>
  <div class="ly__item">xxx</div>
</div>
```

CSS

```
.ly {
    display: grid;
    grid-template-columns: 50px 50px 50px;/* 这边以 3 列为例，每列宽 50px */
}
```

## 多个元素水平居中对齐
```
.ly {
  display: grid;
  grid-template-columns: 50px 50px 50px;
  justify-content: center;
}
```

## 多个元素水平两端对齐
```
.ly {
  display: grid;
  grid-template-columns: 50px 50px 50px;
  justify-content: space-between;
}
```

## 多行多个元素水平两端对齐
```
.ly {
  display: grid;
  grid-template-columns: 50px 50px 50px;
  grid-template-rows: 50px 50px 50px; /* 这边以 3 行为例 */
  justify-content: space-between;
}
```

## 多个元素在一行，某个元素占据剩余部分
```
.ly {
  display: grid;
  grid-template-columns: 50px 50px 1fr; /* 这边以最后一个元素占剩余部分为例 */
}

```

## 多个元素水平居右对齐
```
.ly {
  display: grid;
  grid-template-columns: 50px 50px 50px;
  justify-content: end;
}
```

## 多个元素垂直居中
```
.ly {
  display: grid;
  grid-template-columns: 50px 50px 50px;
  align-items: center;
}
```

## 多个元素水平垂直居中对齐
```
.ly {
  display: grid;
  grid-template-columns: 50px 50px 50px;
  justify-content: center;
  align-items: center;
}
```

更多关于 Grid 的内容见[这里](https://css-tricks.com/snippets/css/complete-guide-grid/)。