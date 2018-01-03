# 音频(audio)
移动端不支持自动播放（autoplay 属性）：

> 由于自动播放网页中的音频或视频，会给用户带来一些困扰或者不必要的流量消耗，所以苹果系统和安卓系统通常都会禁止自动播放和使用 JS 的触发播放，必须由用户来触发才可以播放。

解决方案,在用户点击屏幕后，就播放。依赖用户点击屏幕，呵呵
```
var autoElem = vm.$refs.audio
var autoPlay = () => {
  autoElem.play()
  document.removeEventListener('touchstart', autoPlay)
}

document.addEventListener('touchstart', autoPlay)

```

