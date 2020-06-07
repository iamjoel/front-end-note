# React 核心知识点
## JSX

## 事件
### bind this
```js
this.doSth.bind(this, otherParam) // 最后一个参数是 event。
JSX

## 组件
### propTypes
设置组件属性的类型。

### 获取组件下的内容
类似 Vue 中的 slot。 写法：
```js
props.children
```

## 工具
* [Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension)

## 文档
* [中文文档](https://zh-hans.reactjs.org/)

## 推荐阅读
* [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
* [React.js 小书](http://huziketang.mangojuice.top/books/react/)
* [React 未来之函数式 setState](https://juejin.im/post/58cfcf6e44d9040068478fc6)
* [5 分钟理解 snapshot testing](https://egghead.io/lessons/javascript-use-jest-s-snapshot-testing-feature)