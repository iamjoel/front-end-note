# Media Queries 写法示例
通过 Media Queries，可以给不同的设备设置不同的样式。

## 设备
### 屏幕
```
@media screen {

}
```

### 打印机
```
@media print {

}
```

## 屏幕尺寸
### 手机及更大
```
@media only screen and (min-width: 320px) {

}
```

注意：` (min-width: 320px)` 的括号不能少。

### 平板及更大
```
@media only screen and (min-width: 768px) {

}
```

### PC
```
@media only screen and (min-width: 980px) {

}
```

### 小于等于 iphone 4
```
@media only screen and (max-width:320px) and (max-height: 480px) {

}
```

## 屏幕方向
### 横屏
```
@media only screen and (orientation : landscape) {

}
```

### 竖屏
```
@media only screen and (orientation : portrait) {

}
```