# 变形(Transform)
## 变形函数
* 旋转(rotate)
* 缩放(scale)
* 斜交(skew)
* 位移(translate)
* 变形矩阵

### translate()
通过 translate(x,y) 方法，移动元素。x使元素左右移动，正值向右，负值向左；y使元素上下移动，正值向下，负值向上    
如
```
transform: translate(50px,100px);
-ms-transform: translate(50px,100px);   /* IE 9 */
-webkit-transform: translate(50px,100px); /* Safari and Chrome */
-o-transform: translate(50px,100px);    /* Opera */
-moz-transform: translate(50px,100px);    /* Firefox */
```

### rotate()
通过 rotate(deg) 方法，旋转元素。正值为顺时针，负值为逆时针。    
如
```
transform: rotate(30deg);
-ms-transform: rotate(30deg);   /* IE 9 */
-webkit-transform: rotate(30deg); /* Safari and Chrome */
-o-transform: rotate(30deg);    /* Opera */
-moz-transform: rotate(30deg);    /* Firefox */
```

### scale()
通过 scale(x,y) 方法，缩放元素的大小，根据给定的倍数。    
如
```
transform: scale(2,4);
-ms-transform: scale(2,4);  /* IE 9 */
-webkit-transform: scale(2,4);  /* Safari 和 Chrome */
-o-transform: scale(2,4); /* Opera */
-moz-transform: scale(2,4); /* Firefox */
```
scale(2,4) 把宽度转换为原始尺寸的 2 倍，把高度转换为原始高度的 4 倍。

### skew()
通过 skew() 方法，元素倾斜给定的角度，根据给定的水平线（X 轴）和垂直线（Y 轴）参数。比如，让长方形变成四个角不为90度的平行四边形，就可以使用方法。    
如
```
transform: skew(30deg,20deg);
-ms-transform: skew(30deg,20deg); /* IE 9 */
-webkit-transform: skew(30deg,20deg); /* Safari and Chrome */
-o-transform: skew(30deg,20deg);  /* Opera */
-moz-transform: skew(30deg,20deg);  /* Firefox */

## transform-origin
变换的中心，默认是元素中心。

## perspective


## 兼容性
IE9+，Firefox， Chrome，Safari。IE9，Chrome，Safari需要加前缀    
手机浏览器的兼容性见[这里](https://docs.webplatform.org/wiki/css/transforms/transform#Mobile)

## 其他
* CSS3变形中具有X /Y可用的函数
translateX()、translateY()、scaleX()、scaleY()、skewX()和skewY()。

## 工具
* [将transform函数转变成矩阵形式](http://meyerweb.com/eric/tools/matrix/)
* [CSS3 Maker:Transform](http://www.css3maker.com/css3-transform.html)

## 拓展阅读
* [Intro to CSS 3D transforms](https://desandro.github.io/3dtransforms/)
* https://css-tricks.com/almanac/properties/t/transform/
* [Understanding CSS 3D Transforms(CSS 3D – 1)](http://www.eleqtriq.com/2010/05/understanding-css-3d-transforms/)
* [理解CSS3 transform中的Matrix(矩阵)](http://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%E7%9F%A9%E9%98%B5/)
* [perspective](https://css-tricks.com/almanac/properties/p/perspective/)
* [3D Transforms](https://www.webkit.org/blog/386/3d-transforms/)
