# Web动画简介
## 帧率（FPS）
帧率（FPS）：描述每秒播放的帧数，单位为 Hz 或者 frame/s （帧/秒）。

理论上说，FPS越高，动画会越流畅，但是，因为大部分的显示器刷新频率是 60Hz，当动画的FPS超过 60Hz 时，会出现[画面撕裂](http://zh.wikipedia.org/wiki/%E7%95%AB%E9%9D%A2%E6%92%95%E8%A3%82)现象（显示器会把两个或更多的帧显示在同一画面上）。所以通常来讲 FPS 为 60frame/s 时动画效果最好，也就是每帧16.67ms，在浏览器中要减去渲染时间1ms左右，得到的结果是每帧时间大概15ms。

如果用 setInterval 来做动画，每帧时间大概设置成13ms（jQuery 用的 13ms）。因为用 setInterval 会有1ms左右的延时。当然在高级浏览器中，当然是用 requestAnimationFrame 来做动画啦。

## 网页不同帧率的体验
* 帧率能够达到50~60fps的动画将会相当流畅，让人倍感舒适。
* 帧率在30～50fps之间的动画，因各人敏感程度不同，舒适度因人而异。
* 帧率在30fps以下的动画，让人感觉到明显的卡顿和不适感。
* 帧率波动很大的动画，亦会使人感觉到卡顿。

## 动画的流畅程度具备的特点
* 帧率高（接近60fps最佳）
* 帧率稳定，波动少（极少出现跳帧现象）


## 参考
* [动画初探](https://github.com/imsobear/blog/issues/39)
* [Web动画性能指南](http://alexorz.github.io/animation-performance-guide/)

## 拓展阅读
* [消除疑问：CSS动画 VS JavaScript](https://github.com/classicemi/blog/issues/3)