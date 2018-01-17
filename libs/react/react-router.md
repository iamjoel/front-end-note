# react router
## 使用
### 引入
```
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
```

### 定义路由

```
import Users from "./routes/Users.js";

<Route path="/users" component={Users} />

```

### 使用
链接
```
<Link to="/user">跳转到 User</Link>

```

在 js 中使用
```
import { browserHistory } from 'react-router'

browserHistory.push(path)
```


如果用了 `react-router-redux` 可以这么写
```
<a onClick={this.props.toListPage}>跳转至list页</a>

import { push } from 'react-router-redux'
import { connect } from 'react-redux';
import { compose } from 'redux';

function mapDispatchToProps(dispatch) {
  return {
    toListPage: ()=> {
      dispatch(push('/list'))
    },
  };
}

const withConnect = connect(null, mapDispatchToProps)

export default compose(
  withConnect
)(组件名)

```

### 获得组件中的参数
```
<Route path="xxx/:id" component={Child}/>
const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)
```

```
// this.props.match.params
```

### 生命周期函数
进入路由时：onEnter
```
const requireAuth = (nextState, replace) => {
    if (!auth.isAdmin()) {
        // Redirect to Home page if not an Admin
        replace({ pathname: '/' })
    }
}
export const AdminRoutes = () => {
  return (
     <Route path="/admin" component={Admin} onEnter={requireAuth} />
  )
}
```

离开路由时
```
const Home = withRouter(
  React.createClass({
    componentDidMount() {
      this.props.router.setRouteLeaveHook(
        this.props.route, 
        this.routerWillLeave
      )
    },

    routerWillLeave(nextLocation) {
      // 返回 false 会继续停留当前页面，
      // 否则，返回一个字符串，会显示给用户，让其自己决定
      if (!this.state.isSaved)
        return '确认要离开？';
    },
  })
)
```

## 问题
Route 上的`exact` 是什么意思。

## 链接
* [文档](https://reacttraining.com/react-router/web/guides/philosophy)
* [React Router 使用教程](http://www.ruanyifeng.com/blog/2016/05/react_router.html)
* [Demos](https://reacttraining.com/react-router/web/example/basic)






