# 单向数据流 和 Vuex 简介
随着前端的项目的越来越复杂，出现了一堆概念来降低开发的复杂性。单向数据流就是其中一个。

如果项目很简单，不需要用单向数据流。

## 单向数据流是什么
单向数据流指只能从一个方向来修改状态。下图是单向数据流的极简示意：

![单向数据流的极简示意](http://upload-images.jianshu.io/upload_images/16777-e9e03f0a1f0bc760.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

与单向数据流对对应的是双向数据流（也叫双向绑定）。在双向数据流中，Model（可以理解为状态的集合） 中可以修改自己或其他Model的状态， 用户的操作（如在输入框中输入内容）也可以修改状态。这使改变一个状态有可能会触发一连串的状态的变化，最后很难预测最终的状态是什么样的。使得代码变得很难调试。如下图所示：

![](http://upload-images.jianshu.io/upload_images/16777-7110c84626145295.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

与双向数据流比，在单向数据流中，当你需要修改状态，完全重新开始走一个修改的流程。这限制了状态修改的方式，让状态变得可预测，容易调试。

## 单向数据流的使用场景
多个组件会共享状态时，共享状态和组件间（兄弟组件）通信变的不容易。我们把共享状态抽取出来，用单向数据流的方式会变得容易。  

## Vuex 简介
[Vuex](https://vuex.vuejs.org/zh-cn/) 是适用于 Vue.js 应用的状态管理库，为应用中的所有组件提供集中式的状态存储与操作，保证了所有状态以可预测的方式进行修改。

Vuex 是单向数据流的一种实现。

### 核心概念
#### State
State 用来存状态。在根实例中注册了store 后，用 `this.$store.state` 来访问。

#### Getters
Getters 从 state 上派生出来的状态。可以理解为基于 State 的计算属性。很多时候，不需要 Getters，直接用 State 即可。

#### Mutations
Mutations 用来改变状态。需要注意的是，Mutations 里的修改状态的操作必须是同步的。在根实例中注册了 store 后， 可以用 `this.$store.commit('xxx', data)` 来通知 Mutations 来改状态。

#### Actions
Actions 通过调用 Mutations 来改状态。Actions 可以包含异步操作。在根实例中注册了 store 后， 可以用 `this.$store.dispatch('xxx', data)` 来存触发 Action。

### Vuex 的完整流程
组件中触发 Action，Action 提交 Mutations，Mutations 修改 State。 组件根据 State 或 Getters 来渲染页面。具体如下图

![](http://upload-images.jianshu.io/upload_images/16777-0e1848bfcdd206ef.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

最后，推荐下 Vue 的官方调试工具 [devtools extension](https://github.com/vuejs/vue-devtools)，它提供了 time-travel 调试、状态快照导入导出等高级调试功能。下图是 time-travel 功能的 Demo：

![](http://upload-images.jianshu.io/upload_images/16777-e108d2b03b915477.gif?imageMogr2/auto-orient/strip)