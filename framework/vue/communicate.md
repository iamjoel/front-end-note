# Vue2 的组件通信写法总结
组件通讯包括：父子组件间的通信和兄弟组件间的通信。具体有以下几种情况。

## 父组件传递数据给子组件
父组件使用 Prop 传递数据给子组件。
```
<child-component :prop1="父组件的数据1" :prop2="父组件的数据2"></child-component>
```

子组件只接收在子组件定义的 props的值。通过 `this.prop名称` 获得父组件传数据。
```
// 子组件
Vue.component('child-component', {
  props: ['prop1', 'prop2'], // 定义接收哪些 props
  template: '<div>{{prop1 + prop2}}</div>',
  ...
}
```

## 父组件调用子组件属性或方法
给要调用的子组件起个名字。将名字设置为子组件 `rel` 属性的值。
```
<!-- 子组件。 ref的值是组件引用的名称 -->
<child-component ref="aName"></child-component>
```

父组件中通过 `$refs.组件名` 来获得子组件，也就可以调用子组件的属性和方法了。
```
var child = this.$refs.aName
child.属性
child.方法()
```

父组件通过 `$children` 可以获得所有直接子组件（父组件的子组件的子组件不是直接子组件）。需要注意 $children 并不保证顺序，也不是响应式的。

Vue 在 V2.1.0 版本后增加了的 `Scoped Slots` 的特性。该特性支持在子组件的 `slot` 中用子组件的数据。详情见[这里](https://github.com/vuejs/vue/releases/tag/v2.1.0)。

## 子组件传递数据给父组件
子组件通过事件传递父组件传数据。子组件通过`$emit(eventName)`触发事件，父组件通过`$on(eventName)`监听事件。
```
<child-component @somesth-happen="handlerHappen"></child-component>
```

`somesth-happen` 是事件名称，`handlerHappen` 是触发后，父组件的处理函数。


## 子组件调用父组件属性或方法
子组件通过 `$parent` 获得父组件，通过 `$root` 获得最上层的组件。

## 兄弟组件间通信
方法1:  
用事件的发布订阅来做。
```
var bus = new Vue()

// 组件 A 中触发事件
bus.$emit('id-selected', 1);

// 在组件 B 中监听事件
bus.$on('id-selected', function (id) {
// ...
})
```

方法2:  
用 [vuex](https://github.com/vuejs/vuex) 来做兄弟组件间的通信。

不推荐的方式：兄弟组件通过父组件来通信。这样做代码的耦合性比较高。
