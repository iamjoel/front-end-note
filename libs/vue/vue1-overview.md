# Vue.js 写法示例
[Vue1 官网](http://v1-cn.vuejs.org/)。  
如果你用的是 Vue2，看[Vue2 写法示例](http://www.jianshu.com/p/a2efd179b9c3)。

## Hello World
```
<div id="app">
  {{ message }}
  <button v-on:click="clickMe()">点击</button>
  <button v-on:click="clickMe">无参数的简写</button>
</div>
```

```
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    clickMe: function(){}
  }
});
```

## 指令
### 循环
#### 循环数组
```
<li v-for="item in items"> 第{{ $index }}条:{{ item.message }}</li>
<!-- 通过加track-by ，让 Vue 能跟踪节点的身份，从而提高性能。track-by 的值是在数组中是不能重复的。 -->
<div v-for="item in items" track-by="id">
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
<li v-for="(key, value) in obj"></li>
```

#### 循环数字
```
<!-- n 从 0 开始  -->
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
<!-- 修饰符可以串联 -->
<a @click.stop.prevent="doThat"></a>
<!-- 按键修饰符：回车时才会执行 -->
<input @keyup.13="submit"><!-- 13 为 keycode -->
<input @keyup.enter="submit">
<!-- 支持的按钮有 enter, tab, delete, space, up, down, left, right -->
```

### 表单的双向绑定
```
<input type="text" v-model="message">
<!-- 自定义选中值。若不设置自定义选中值，选中为表单元素value属性的值，不选为空 -->
<input
  type="checkbox"
  v-model="toggle"
  v-bind:true-value="a"
  v-bind:false-value="b">
```

### 绑定属性
```
<div v-bind:class="{ 'class-a': isA, 'class-b': isB }"></div>
<div v-bind:class="classArr"></div> <!-- classArr 是一个数组 -->
<!-- 简写 -->
<div :class="{ 'class-a': isA, 'class-b': isB }"></div>
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
<img :src="imgSrc">
<a :href="baseURL + '/path'">
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

### 单向绑定
单向绑定的意思是，即使绑定变量的值发生变化，显示的内容仍旧就是最初绑定时候的值。
```
<span>This will never change: {{* msg }}</span>
```

### 输出 HTML
```
<div>{{{ raw_html }}}</div> <!-- {{}} 中的 HTML 内容的会转为纯文本 -->
```

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

常见内置过滤器  
capitalize, uppercase, lowercase, json, limitBy, filterBy。所有见[这里](http://cn.vuejs.org/api/#过滤器)。


### 自定义过滤器
```
Vue.filter('wrap', function (value, begin, end) {
  return begin + value + end;
});
```

```
<!-- 'hello' => 'before hello after' -->
<span v-text="message | wrap 'before' 'after'"></span>

```

`this.$options.filters.filter名称` 可以获取到具体的 filter


## 生命周期相关的钩子函数
```
new Vue({
  created: function(){},
  beforeCompile: function(){},
  compiled: function(){},
  ready: function(){},// DOM 元素已经加入到HTML中
  beforeDestroy: function(){},
  destroyed: function(){}
});
```

## 过渡效果
```
<div v-if="show" transition="my-transition"></div>
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
  :prop1="defaultOneWay"
  :prop2.sync="twoWay"
  :prop3.once="oneTime">
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
child.$dispatch('child-msg', child.msg);

// 父组件
var parent = new Vue({
  events: {
    'child-msg': function (msg) {
      // 父组件向所有子组件传消息。
      this.$broadcast('parent-msg', 'received it');
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
组件中定义用 slot 来定义插入点，可以带name来标识 slot。
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

## 小技巧
### 渲染一个包含多个元素的块
```
<template v-for="item in items">
  <li>{{ item.msg }}</li>
  <li class="divider"></li>
</template>
<template v-if="user">
  <img :src="user.avatarUrl" alt="">
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
Vue 在检测到数据变化时是异步更新 DOM 的。具体见 [异步更新队列](http://cn.vuejs.org/guide/reactivity.html#u5F02_u6B65_u66F4_u65B0_u961F_u5217)。vm 上也有 `this.$nextTick`。
