# 常见属性
## 位置
* `x` x 座标
* `y` y 座标

## 填充
* `fill` 填充颜色。也就是背景色
* `fill-opacity` 填充色的透明度

## 边框
* `stroke` 边框颜色
* `stroke-width` 边框宽带
* `stroke-linecap` 边框结束的地方的形状
  * butt用直边结束线段，它是常规做法，线段边界90度垂直于描边的方向、贯穿它的终点。
  * square的效果差不多，但是会稍微超出实际路径的范围，超出的大小由stroke-width控制。
  * round表示边框的终点是圆角，圆角的半径也是由stroke-width控制的。