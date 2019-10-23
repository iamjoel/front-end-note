# Vue2 写法示例
[Vue2 官网](http://vuejs.org/)。  
如果你用的是 Vue1，看[Vue1 写法示例](http://www.jianshu.com/p/293387d240b2)。

## Hello World
模板：
```
<div id="app">
  {{ message }}
  <button @click="clickMe()">点我</button>
</div>
```

Vue 实例：
```
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    clickMe: function(){
      console.log('我被点击拉~')
    }
  }
})
```

## 指令
### 循环
#### 循环数组
```
<ul>
  <li v-for="item in items">{{ item.message }}</li>
  <!-- 获取当前数组下标 -->
  <li v-for="(item, index) in items"> 第{{ index }}条:{{ item.message }}</li>
  <!-- 通过加key ，让 Vue 能跟踪节点的身份，从而提高性能。key 的值是在数组中是不能重复的。 -->
  <li v-for="item in items" :key="item.id"> {{ item.message }}</li>
</ul>
```

items 的结构类似这样
```
[{
  id: 1,
  message: 'foo'
}, {
  id: 2,
  message: 'bar'
}]
```

#### 循环对象
```
<li v-for="(value, key) in obj">key is {{key}}, value is {{value}}</li>
```

#### 循环数字
```
<!-- n 从 1 开始  -->
<span v-for="n in 10">{{ n }} </span>
```

### 条件
```
<!-- 如果ok为false, 不输出在 HTML 中 -->
<div v-if="ok">Yes</div>
<div v-else>No</div>

<!-- 如果ok为false,只是 display:none 而已 -->
<h1 v-show="ok">Hello!</h1>
```

### 事件绑定
```
<button v-on:click="say('hi')">点击</button>
<!-- 简写 -->
<button @click="say('hi')">点击</button>
<!-- 传入 event 对象 -->
<button @click="say('hi', $event)">点击</button>
<!-- 阻止单击事件冒泡 -->
<button @click.stop="doSth">点击</button>
<!-- 阻止默认行为 -->
<button @submit.prevent="doSth">点击</button>
<!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
<div @click.self="doThat">...</div>
<!-- 修饰符可以串联 -->
<a @click.stop.prevent="doThat"></a>
<!-- 按键修饰符：回车时才会执行 -->
<input @keyup.13="submit"><!-- 13 为 keycode -->
<input @keyup.enter="submit">
<!-- 支持的按钮有 enter, tab, delete, space, up, down, left, right -->
```

给组件绑定[原生事件](https://developer.mozilla.org/zh-CN/docs/Web/Events)，需要加修饰符 `.native`。如：
```
<my-component @click.native="doTheThing"></my-component>
```

### 表单的双向绑定
```
<input type="text" v-model="message">
<!-- 自定义选中值。若不设置自定义选中值，选中为表单元素value属性的值，不选为空 -->
<input
  type="checkbox"
  v-model="toggle"
  :true-value="a"
  :false-value="b">
```

### 绑定属性
```
<div v-bind:class="{ 'class-a': isA, 'class-b': isB }"></div>
<div v-bind:class="classArr"></div> <!-- classArr 是一个数组 -->
<!-- 简写 -->
<div :class="{ 'class-a': isA, 'class-b': isB }"></div>
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
![](imgSrc)
<a :href="baseURL + '/path'">
```

如果属性值是变量，必须用绑定属性的写法。
```
// wrong
![]({{imgSrc}})
// right
![](imgSrc)
```

### 避免闪烁： v-cloak
```css
[v-cloak] {
  display: none;
}
```

```
<div v-cloak>
  {{ message }}
</div>
```

编译结束后，Vue 会删除元素上的 cloak 属性。

### 输出 HTML
```
<div v-html="raw_html"></div>
```

注意：只在可信内容上使用 v-html，永不用在用户提交的内容上，否则会导致[XSS攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。

## 计算属性
```
<div id="demo">{{fullName}}</div>
```

```
new Vue({
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
});
```

### 自定义指令
定义指令：
```
Vue.directive('my-directive', {
  bind: function () {
    // 准备工作
    // 例如，添加事件处理器或只需要运行一次的高耗任务
    this.el;// 添加指令的元素
    this.vm.$get(name)// 获得该指令的上下文 ViewModel
    this.expression;// 指令的表达式的值
  },
  update: function (newValue, oldValue) {
    // 值更新时的工作
    // 也会以初始值为参数调用一次
  },
  unbind: function () {
    // 清理工作
    // 例如，删除 bind() 添加的事件监听器
  }
})
```

使用指令：
```
<div v-my-directive="someValue"></div>
```


## 监听数据变化
```
new Vue({
  data: {
    firstName: 'Foo'
  },
  watch: {
    firstName: function (val, oldVal) {
    }
  }
});
```

## 过滤器
```
{{ msg | capitalize }}// 'abc' => 'Abc'
```

Vue2 没有内置的过滤器。

### 自定义过滤器
定义全局可用的过滤器
```
Vue.filter('capitalize', function (value) {
  return value.toUpperCase()
});

Vue.filter('wrap', function (value, begin, end) {
  return begin + value + end;
});
```

定义只能在具体组件上用的过滤器
```
Vue.component('my-comp', {
  filters: {
    capitalize: function(value) {
      return value.toUpperCase()
    }
  }
}
<!-- `this.$options.filters.filter名称` 可以获取到具体的 filter -->
```

在模板中调用：
```
<!-- 不带参数的 -->
<span>{{'abc' | capitalize}}</span>
<!-- 带参数 -->
<span v-text="'abc' | wrap('before', 'after')"></span>
```

注意，Vue2 的过滤器只能在mustache绑定中使用。如果需要在属性中实现相同的功能，请使用计算属性或方法。


## 生命周期相关的钩子函数
```
new Vue({
  created: function(){},
  mounted : function(){},// 相对与 1 中的 ready
  beforeDestroy: function(){},
  destroyed: function(){}
});
```

## 过渡效果
```
<transition :name="my-transition">
  <!-- ... -->
</transition>
```

```
/* 必需 */
.my-transition-transition {
  transition: all .3s ease;
}
/* .my-transition-enter 定义进入的开始状态 */
.my-transition-enter{}
/* .my-transition-leave 定义离开的结束状态 */
.my-transition-leave {}
```


## 组件
### 定义和调用组件
```
<my-comp
  prop="literal string"
  :prop1="bar"
  :prop2="666"
  :prop3="foo">
</my-comp>
```

```
Vue.component('my-comp', {
  template: 'html strings',
  props: {
    prop: String,
    prop1: {
      type: Number,
      required: true
    },
    prop2: {
      type: Number,
      default: 88
    },
     // 对象/数组的默认值应当由一个函数返回
    prop3: {
      type: Object,
      default: function () {
        return { msg: 'hello' }
      }
    },
    // 自定义验证函数
    prop4: {
       validator: function (value) {
        return value > 10
      }
    }
  },
  data: functin(){
    return {

    }
  }

}
```

### 父子组件通信

```
// 子组件
var child = new Vue.component('child', {
  events: {
    'parent-msg': function (msg) {}
  }
});

// 子组件向父组件传消息
child.$emit('child-msg', 'I need help!');

// 父组件
var parent = new Vue({
  events: {
    'child-msg': function (msg) {
      // 父组件向所有子组件传消息。
      console.log(`收到子组件的信息，值为 ${msg}`)
    }
  }
});

```

this.$parent 访问它的父组件。  
this.$root 访问它的根组件。  
this.$children 访问它的子组件。

可以通过 `ref` 来访问组件。如
```
<!-- js中通过 vm.$refs.child 来访问子组件 -->
<child-comp ref="child"></child-comp>
```

## Slot
组件中定义用 slot 来定义插入点，可以带 name 来标识 slot。
```
Vue.component('multi-slot-component', {
  template: `<div>
                <h2>单个Slot</h2>
                <slot>默认值</slot>
                slot1:<slot name="s1">默认值1</slot><br>
                slot2:<slot name="s2">默认值2</slot>
              </div>`,
  data() {
    return {
      describe: '我叫小呆'
    }
  }
})
```

调用组件的地方用 slot 属性的值来对应插入 slot 的位置。
```
<multi-slot-component>
  <strong slot="s1">父组件插槽内容1</strong>
  <strong slot="s2">父组件插槽内容2</strong>
</multi-slot-component>
```

Vue 在 V2.1.0 版本后增加了的 `Scoped Slots` 的特性。该特性支持在子组件的 `slot` 中用子组件的数据。用法是：子组件在 `slot` 上定义传给父组件的数据，父组件通过 `scope` 属性来拿子组件数据。如
```
<!-- 子组件 -->
<slot :describe="describe"></slot>

<!-- 父组件 -->
<child-component >
  <template scope="childScope">
    子元素传给父组件的数据：{{childScope.describe}}
  </template>
</child-component>
```

详情见[这里](https://github.com/vuejs/vue/releases/tag/v2.1.0)。

## 小技巧
### 渲染一个包含多个元素的块
```
<template v-for="item in items">
  <li>{{ item.msg }}</li>
  <li class="divider"></li>
</template>
<template v-if="user">
  ![](user.avatarUrl)
  <div class="name">{{user.name}}</div>
</template>
```
template 用于包含多个元素的块,最终的渲染结果不会包含 template 元素。

### Vue.set 和 Vue.delete
用于解决 不能检测到属性添加，属性删除的限制。

### Vue.nextTick
```
// 修改数据
vm.msg = 'Hello'
// DOM 没有更新
Vue.nextTick(function () {
  // DOM 更新了
})
```

Vue 在检测到数据变化时是异步更新 DOM 的。具体见 [异步更新队列](http://cn.vuejs.org/v2/guide/reactivity.html#mobile-bar)。vm 上也有 `this.$nextTick`。

### keep-alive
在组件切换过程中将状态保留在内存中，防止重复渲染DOM。

`keep-alive` 生命周期钩子函数：`activated`、`deactivated`。

推荐文章
* [vue实现前进刷新，后退不刷新](https://juejin.im/post/5a69894a518825733b0f12f2)
* [vue-navigation](https://github.com/zack24q/vue-navigation/blob/master/README_CN.md)