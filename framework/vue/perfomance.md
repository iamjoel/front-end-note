# 性能优化
## v-for 加 key
为每项提供一个唯一 `key`。来给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，从而增加效率。`key`值是每项都有唯一 id。 例如:
```
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>
```

## 动态组件加 keep-alive
如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个 keep-alive 指令参数。例如：
```
<keep-alive>
  <component :is="currentView">
    <!-- 非活动组件将被缓存！ -->
  </component>
</keep-alive>
```

2.1.0 新增`include` 和 `exclude` 属性允许组件有条件地缓存组件。如
```
<!-- 缓存组件a和b -->
<keep-alive include="a,b">
  <component :is="view"></component>
</keep-alive>
<!-- 正则表达式 (使用 v-bind)-->
<keep-alive :include="/a|b/">
  <component :is="view"></component>
</keep-alive>
```
