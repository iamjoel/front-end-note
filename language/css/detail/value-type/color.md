# 颜色
## 可选值
* 颜色名称，如: red,green,blue等，更多见[这里](http://www.w3school.com.cn/cssref/css_colornames.asp)
* 十六进制，如: #ff0000，#ff6600等。其中前两位代表红，中间两位表示绿，最后两位表示蓝
* rgb，如rgb(255,0,0)。第1,2,3个参数分别表示红，绿，蓝。参数取值范围是0~255
* 还可以是 `currentColor`。 表示是当前计算出的字的颜色。

如
```
.red{color: #ff0000;}
.bg-red{background: red;}
.bule-border{border: 1px solid rgb(0, 0, 255);}

div {
  color: red;
  border: 5px solid currentColor;
  box-shadow: 0 0 5px solid currentColor;
}
```

推荐使用十六进制。