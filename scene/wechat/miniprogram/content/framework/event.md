# 事件
[文档](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html)。

## 事件
事件包括 冒泡事件 和 非冒泡事件。

冒泡事件: 
* touchstart, touchmove, touchcancel, touchend
* tap
* longpress 长按。手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发。
* touchforcechange 在支持 3D Touch 的 iPhone 设备，重按时会触发。
* transitionend
* animationstart, animationiteration, animationend

用 `bind` 或 `catch` 跟 事件名来绑定事件。 bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡。如：
```
<view id="outer" bind:touchstart="handleTap1" capture-bind:touchstart="handleTap2">
  outer view
  <view id="inner" bind:touchstart="handleTap3" capture-bind:touchstart="handleTap4">
    inner view
  </view>
</view>
```

非冒泡事件:
* form 的 submit 事件
* input 的 input 事件


## event 上的对象
* type 事件类型
* currentTarget 事件绑定的当前组件。
  * dataset 当前组件上由data-开头的自定义属性组成的集合。
* target 触发事件的源组件。
  * dataset
* touches
  * pageX, pageY, clientX, clientY
* mask