# 调试CSS
## 布局的 Debug
给元素加 outline
```
[].forEach.call($$("*"),function(elem){
    elem.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16);
})
```

CSS 不支持随机个颜色
```
* {
  outline: 1px solid #f00;
}
```

## 拓展阅读
* [调试CSS](https://docs.webplatform.org/wiki/tutorials/debugging_css)
