# redux
## 创建
```
import { combineReducers, createStore } from 'redux'
// 多个 reducer。不同的 reducer 响应不同的 type。
let reducer = combineReducers({ visibilityFilter, todos })
let store = createStore(reducer)
```

## state
state 来存状态。state 是只读的。

## action
用 action 来改变 state。 用 dispatch 来触发 action。
```
store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1
})

store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
})
```

## reduce
reduce 是一个函数，用来返回新的 state。建议 reduce 是一个普通的纯函数。`(state, action) => state`。
```
function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
```

获得状态 `store.getState()`

## 文档
* redux
  * [Redux 中文文档](http://cn.redux.js.org/index.html)
  * [React + Redux 最佳实践](https://github.com/sorrycc/blog/issues/1)
  * [Awesome redux](https://github.com/xgrommx/awesome-redux)
* redux 中的异步处理（中间件）
  * redux-thunk
  * redux-promise
  * [redux-saga](https://github.com/redux-saga/redux-saga)