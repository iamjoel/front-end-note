# Canvas
## save 和 restore
save: 保存canvas的当前状态。会被保存的状态包括：strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled。

restore: 将状态恢复到上次保存的状态。

更多阅读[Canvas学习：save()和restore()](https://www.w3cplus.com/canvas/canvas-states.html)

## 压缩图片
用 canvas 可以用来压缩图片：
```
canvas.toDataURL('image/jpeg', 1 || 0.8 );   //1最清晰，越低越模糊。
```

