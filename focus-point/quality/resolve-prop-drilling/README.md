# 层级很深的组件 获取 最外层组件的数据 - React 和 Vue 的解决方案
如果 层级很深的组件 要获取 最外层组件的数据，最简单的做法是：最外层组件将值通过属性传给子组件，子组件再通过属性往下传递，直到传到需要数据的组件为止。这种实现方式被称为 `prop drilling`。

## prop drilling 存在的问题
使用 prop drilling 会在 需要数据的组件 和 最外层组件 之间的组件上都加上额外的属性，会多了很多额外代码。如果传递的值的数据类型或其他发生变化时，要改很多的组件代码。

## 解决方案
要解决这个问题，有2个方案。

### 方案1: 状态管理库
状态管理库统一管理需要共享的数据，任意组件都可以访问到这些数据。这样，只要将 层级很深的组件 需要的 最外层组件的数据 放到状态管理中来管理，层级很深的组件可以直接拿到需要的数据了。

React 可以用 redux。 Vue 可以用 Vuex。

### 方案2: React 和 Vue 自带的 API
#### React: Context API
Context API 通过创建 Context 对象来管理共享数据。 Context 对象包含 Provide 和 Consumer。 Provide 来设置共享数据， Consumer 来获取共享数据。下面是共享用户信息的 Demo:  
```js
import React, {createContext, useContext} from 'react'

// 创建 Context
const UserCtx = createContext({
  name: '',
})

// Provide 设置共享数据
function Parent() {
  return (
    <UserCtx.Provider value={{name: 'Joel'}}>
      <UseUserData />
    </UserCtx.Provider>
  )
}

// Consumer 获取共享数据
function UseUserData() {
  let user = useContext(UserCtx)
  return (
    <View>用户名： {user.name}</View>
  )
}
```

#### Vue: Provide/inject
provide/inject 允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。

写法：
父组件
```js
data() {
  return {
    name: 'Joel',
    obj: {
      name: 'Joel'
    }
  }
},
provide() { // 设置共享的数据
  return {
    name: this.name, // 该值是不响应的。即 this.name 变了后，子组件拿到的name 未变。
    obj: this.obj,// 该值是响应的。
    age: 18,
  }
},
```

子组件
```js
// 获取共享数据
inject: ['name', 'age', 'obj']
```

注意： 

1. 该特性是在 Vue 2.2.0 版本止之后添加的。
2. provide 提供的数据，如果是基础类型的数据，则该数据是非响应的。对象类型的数据是响应的。

## 拓展阅读
* [React: Context API](https://zh-hans.reactjs.org/docs/context.html)
* [Vue: provide / inject](https://cn.vuejs.org/v2/api/#provide-inject)
* [React ⚛️ 新的 Context API](https://zhuanlan.zhihu.com/p/33482759)