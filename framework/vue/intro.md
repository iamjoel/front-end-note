# [Vue.js](http://cn.vuejs.org/)介绍
## 特点
* 易学。API 简洁明了。
* 数据驱动。支持数据的双向绑定。
* 支持组件。
* 轻量级。
* 快速。精确有效的异步批量 DOM 更新。

## 重要概念
### 组件
组件是自定义元素。用组件来拓展HTML，封装可重用代码。

### Slot（插槽）
Slots 允许外部环境将额外的内容组合在组件中。如弹出框组件，弹出的内容外部的定义的，就可以用 Slot 来实现。例如：

```
<modal>
  xxx
</modal>
```

如果一个组件中有多个Slot，则需要用 Slot 的名字。如

```
<modal>
  <div slot="slotName1">xxx</div>
  <div slot="slotName2">xxx2</div>
</modal>
```
