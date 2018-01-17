# [Redux-Saga](https://redux-saga.js.org/)
处理应用的副作用。如
* 异步操作。如：和服务器端的交互。
* 有副作用的东西。如 浏览器缓存。


## 示例
* call(函数, 参数1, 参数2)
* put({ type: actionType, data }) 和 `dispatch({ type: 'PRODUCTS_RECEIVED', products })` 差不多，只是更加容易测试。
* select

* takeEvery
* takeLatest

```
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

export function* fetchData(action) {
   try {
      const data = yield call(Api.fetchUser, action.payload.url);
      yield put({type: "FETCH_SUCCEEDED", data});
   } catch (error) {
      yield put({type: "FETCH_FAILED", error});
   }
}

export default function* defaultSaga() {
  // takeEvery , takeLatest
  // 每次 触发 action 值是 FETCH_REQUESTED 时，会触发该函数
  yield* takeEvery('FETCH_REQUESTED', fetchData)
  
  // 多个
  yield [
    takeLatest(LOAD_REPOS, getRepos),
    takeLatest(LOAD_USERS, getUsers),
  ]
}
```



## 文档
* [中文教程](http://leonshi.com/redux-saga-in-chinese/docs/introduction/index.html)
* [节流和防抖动](http://leonshi.com/redux-saga-in-chinese/docs/recipes/index.html)