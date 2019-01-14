# Vue2 实用技巧分享
## 大纲
* 响应式原理
  * 介绍
  * 数据变化后，对应UI不会变的原因及解决方案
  * 异步更新队列会导致的问题及解决方案
* 组件
  * 介绍
  * 创建组件
    * 只在当前项目中用的组件
    * 在多个项目中用的组件
  * 组件间的通信
    * 父子组件间的通信
    * 兄弟组件，子组件与祖先组件间的通信
* 通用的报错处理
  * vm 中报错的处理
  * vm 外的报错处理
  * 接口报错的通用处理
* 创建项目
  * 用 vue-cli 创建项目
  * 自定义 vue-cli 的项目模板
* Vue 相关优秀资源推荐

# 响应式原理
## 介绍
数据变化时，对应的UI也发生变化。

Object.defineProperty 来检测到数据变化时，通知到 watcher，会通知 Visual DOM， Visual DOM 决定更新哪些UI。

Vue3 用 Proxy 来检测数据变化的。

## 数据变化后，对应UI不会变的原因及解决方案
没有检测到数据变化。可能的原因
* 动态新增的属性。
* 改的数组内部的值。 

```js
var vm = new Vue({
  data:{
    a:1
  }
})

// `vm.a` 是响应的

vm.b = 2
// `vm.b` 是非响应的
```

在 data 中声名，或用 `$set(object, key, value)`
```js
var vm = new Vue({
  data:{
    a:1,
    b:2,
    c: {}
  }
})

// `vm.a`,`vm.b` 是响应的
vm.$set(vm.c,'d', 2) // vm.c.d
```

注意，$set的第一个参数不能写 vm。

改变数组中，下标为 index 的数据的`name`值：
```
changeName(index, name) {
  this.list[index].name = name
}
```

改为：
```
changeName(index, name) {
  this.list = this.list.map((item, i) => {
    if (index === i) {
      return {
        ...item,
        name: name
      }
    } else {
      return item
    }
  })
}

```

## 异步更新队列会导致的问题及解决方案
数据变化后，对应的UI并不是立刻变化的。

```
<template>
  <div ref="tar">{{a}}</div>
</template>
<script>
</script>
export default {
  data: {
    a: 'old'
  },
  mounted() {
    this.change()
  },
  methods: {
    change() {
        this.a = 'new'
        console.log(this.$refs.tar.innerHTML) // old
        this.$nextTick(() => {
            console.log(this.$refs.tar.innerHTML) // new
        })
    }
  }
}
```

解决方案：
``` 
this.$nextTick(()=>{
  // 操作DOM，比如 初始化一些基于 DOM 的组件。
})
```

# 组件
## 介绍
方便代码的复用。引入组件，可以将组件对应的 HTML，JS，CSS 都引入。

## 创建组件
只在当前项目中用的组件:

定义：
`ComponentA`：

```
<template>
  <div class="main">
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
    }  
  },
  methods: {
  }
}
</script>

<style scoped></style>
```

使用：
```
import ComponentA from './ComponentA'

export default {
  components: {
    ComponentA,
  },
  // ...
}
```

在多个项目中用的组件
```js
// 组件定义
import Index from './components/Index.vue'

export function install (Vue) {
  Vue.component('lj-list', Index) // 注册组件名
}

export {
  Index,
}

const plugin = {
  version: VERSION,
  install,
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
```

使用
```
npm install --save xxx

```

```
<template>
<ul>
  <lj-list 
    url="/singer/list"
  >
    <template slot-scope="scope" v-if="scope.data">
      <li>{{scope.data.name}}</li>
    </template>
  </lj-list>
</ul>

<script>
import Vue from 'vue'
import List from '@lucky-joel/vue-list'
Vue.use(List)
</script>
```

详细加 https://github.com/iamjoel/vue-list

## 组件间的通信
### 父子组件之间
父组件传递数据给子组件
```
<child-component :prop1="父组件的数据1" :prop2="父组件的数据2"></child-component>
```

父组件调用子组件属性或方法
```
<child-component ref="aName"></child-component>

```

父组件中通过 `$refs.组件名` 来获得子组件，也就可以调用子组件的属性和方法了。
```
var child = this.$refs.aName
child.属性
child.方法()
```

子组件传递数据给父组件,子组件通过`$emit(eventName)`触发事件，父组件通过`$on(eventName)`监听事件。
```
<child-component @somesth-happen="handlerHappen"></child-component>
```

`somesth-happen` 是事件名称，`handlerHappen` 是触发后，父组件的处理函数。

### 子组件调用父组件属性或方法
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

# 通用的报错处理
```
window.onerror = function(error, url, line) {
  console.error(`文件: ${url}第${line}行: ${error}`)
}
```

```
import Vue from 'vue'
import {Toast} from 'vant'

Vue.config.errorHandler = function(error, vm, info) {
  var componentName = formatComponentName(vm);
  var propsData = vm.$options && vm.$options.propsData;

  Toast.fail(error)
  console.error(`${componentName}: ${error}`)
  console.error(`更多错误信息: ${info}`)
}

function formatComponentName(vm) {
  if (vm.$root === vm) return 'root';
  var name = vm._isVue ? (vm.$options && vm.$options.name) || (vm.$options && vm.$options._componentTag) : vm.name;
  return (name ? 'component <' + name + '>' : 'anonymous component') + (vm._isVue && vm.$options && vm.$options.__file ? ' at ' + (vm.$options && vm.$options.__file) : '');
}
```

推荐 [FunDebug](https://www.fundebug.com/) : 专业的应用错误监控平台。

```
import axios from 'axios'
import { Toast } from 'vant'

axios.interceptors.response.use(response => {
  var data = response.data
  var config = response.config
  var errorCode = data.errorCode
  if(errorCode) { 
    Toast(data.errorMessage || '未知错误')
    return Promise.reject()
  }
  return response;
}, error => {
  let errorMessage = "连接到服务器失败"
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        errorMessage = '错误请求'
        break;
      case 401:
        errorMessage = '未授权，请重新登录'
        break;
      case 403:
        errorMessage = '拒绝访问'
        break;
      // 更多错误信息...
    }
  }

  Toast(errorMessage)
  return Promise.reject(error)
})
```

# 创建项目

vue-cli 1:
```
vue init [项目模板名|git地址|项目模板路径]
```

自定义 vue-cli 的项目模板
从 [官方模板库](https://github.com/vuejs-templates) Fork 一份，在上面做修改。

详细 [如何自定义自己的vue-cli模板](https://juejin.im/post/5a0d03e86fb9a044ff3102be)

# Vue 相关优秀资源推荐
* 资源库
  * [Awesome Vue.js](https://github.com/vuejs/awesome-vue)
* 管理后台框架
  * [Element UI](https://github.com/ElemeFE/element) 饿了么出品。
  * [iView](https://www.iviewui.com/) Talking Data 出品。
* 移动端框架
  * [Vant](https://www.youzanyun.com/zanui/vue#/zh-CN/component/quickstart) 有赞出品。
  * [vue-weui](https://github.com/aidenZou/vue-weui) weui 的 Vue 实现。