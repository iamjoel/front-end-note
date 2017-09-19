# 使用 Vue 的注意点
## 组件中的 data 必须是函数
如
```
Vue.component('my-component', {
  template: '<span>{{ message }}</span>',
  data: function () {
    return {
      message: 'hello'
    }
  }
})
```

## 属性传值
用字面量语法给组件传值的话，值会转换成字符串，如
```
<comp some-prop="{a:3}"></comp>
```

上面的代码传入的是字符串 `{a:3}`，而不是对象。如果要传非字符串或变量，需要用动态Prop 的语法： `v-bind`。上面的代码这么
```
<comp v-bind:some-prop="{a:3}"></comp>
<!-- 简写 -->
<comp :some-prop="{a:3}"></comp>
```

## 组件命名约定
注册组件（或者 props（））时，可以使用 kebab-case（短横线隔开），camelCase ，或 TitleCase。
```
components: {
  // 使用 kebab-case 形式注册
  'kebab-cased-component': { /* ... */ },
  // register using camelCase
  'camelCasedComponent': { /* ... */ },
  // register using TitleCase
  'TitleCasedComponent': { /* ... */ }
}
```

在 HTML 模版中，请使用 kebab-case 形式：

```
<!-- 在HTML模版中始终使用 kebab-case -->
<kebab-cased-component></kebab-cased-component>
<camel-cased-component></camel-cased-component>
<title-cased-component></title-cased-component>
```

## native 修饰符
在 Vue 2.0 中的自定义组件上使用 v-on 只会监听自定义事件（即组件用 $emit 触发的事件）。如果要监听原生事件，必须使用 .native 修饰符，如
```
<my-component @click.native="handleClick"></my-component>
```

## 箭头函数注意事项
在生命周期函数，用箭头函数，不会指向 vue 示例。在 `methods` 里用箭头函数会指向 vue 示例。