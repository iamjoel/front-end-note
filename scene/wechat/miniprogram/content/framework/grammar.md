# 语法
## WXML
### 条件
```
<view wx:if="{{length > 5}}"> 1 </view>
<view wx:elif="{{length > 2}}"> 2 </view>
<view wx:else> 3 </view>
```

如果要一次性判断多个组件标签，可以使用一个 `<block/>` 标签将多个组件包装起来，并在上边使用 wx:if 控制属性。
```
<block wx:if="{{true}}">
  <view> view1 </view>
  <view> view2 </view>
</block>
```

`<block/>` 不会输出。


### 循环
```
<view wx:for="{{array}}" wx:for-index="idx">
  {{idx}}: {{item.message}}
</view>

<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
  {{idx}}: {{itemName.message}}
</view>
```

### 引用
用 `import` 的方式  
```
<!-- 定义：item.wxml -->
<template name="item">
  <text>{{text}}</text>
</template>

<!-- 使用 -->
<import src="item.wxml"/>
<template is="item" data="{{text: 'forbar'}}"/>

```

用 `include` 的方式  
```
<!-- header.wxml -->
<view> header </view>

<!-- 使用 -->
<include src="header.wxml"/>
<view> body </view>
```