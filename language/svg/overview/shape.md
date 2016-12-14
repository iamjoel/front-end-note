# 形状写法示例
## 线
```
<line x1="10" x2="50" y1="110" y2="150"/>
```

## 折线
```
<polyline points="60 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145"/>
```

## 矩形
在座标为 (10,20) 的地方画一个宽 30，高 15 的矩形。
```
<svg>
  <rect x="10" y="20" width="30" height="15"/>
</svg>
```

背景色红色的矩形。
```
<svg>
  <rect width="30" height="15" fill="#f00"/>
</svg>
```

带边框的矩形。
```
<svg>
  <rect width="30" height="15" stroke="#f00" stroke-width="2"/>
</svg>
```

圆角矩形。
```
<svg>
  <rect width="30" height="15" rx="5" ry="10"/>
</svg>
```

## 多边形
```
<polygon points="10 10, 10 15, 20 30, 40 50"/>
```

## 圆
```
<circle cx="80" cy="50" r="20"/>
```

(cx, cy) 是圆心座标

## 椭圆
```
<ellipse cx="75" cy="75" rx="20" ry="5"/>
```

(cx, cy) 是椭圆中心座标  
cx 为长轴半径
cy 为短轴半径
