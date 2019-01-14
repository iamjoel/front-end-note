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

Object.defineProperty 来检测到数据变化时，会通知 Visual DOM， Visual DOM 决定更新哪些UI。

Vue3 用 Proxy 来检测数据变化的。

## 数据变化后，对应UI不会变的原因及解决方案
没有检测到数据变化。可能的原因
* 动态新增的属性。 => 在 data 中声名，或用 `this.$set(this.someObject,'b',2)`
* 改的数组内部的值。

## 异步更新队列会导致的问题及解决方案
数据变化后，对应的UI并不是立刻变化的。

异步更新队列会导致的问题:数据改变后，立刻获取对应的 DOM 的内容并没有变化。
解决方案：
``` 
this.$nextTicker(()=>{
  // 操作DOM，比如 初始化一些基于 DOM 的组件。
})
```

# 组件
## 介绍

## 创建组件
只在当前项目中用的组件:

定义：

使用：


## 组件间的通信
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

vue-cli1:
```
vue init ...
```


# Vue 相关优秀资源推荐
* 资源库
  * [Awesome Vue.js](https://github.com/vuejs/awesome-vue)
* 管理后台框架
  * [Element UI](https://github.com/ElemeFE/element) 饿了么出品。
  * [iView](https://www.iviewui.com/) Talking Data 出品。
* 移动端框架
  * [Vant](https://www.youzanyun.com/zanui/vue#/zh-CN/component/quickstart) 有赞出品。
  * [vue-weui](https://github.com/aidenZou/vue-weui) weui 的 Vue 实现。