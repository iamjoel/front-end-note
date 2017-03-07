# Vue2 的一些坑
## native 修饰符
在 Vue 2.0 中的自定义组件上使用 v-on 只会监听自定义事件（即组件用 $emit 触发的事件）。如果要监听原生事件，必须使用 .native 修饰符，如
```
<my-component @click.native="handleClick"></my-component>
```