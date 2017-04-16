## vue 插件
### 路由: vue-router
[官方文档](http://router.vuejs.org/zh-cn/)

#### 定义路由
```
var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);
router.map({
  '/login': {component: require('login')},
  '/user/:': {component: ...},
  // 异步加载组件。加载器用的 webpack
  '/another': {component: function(resolve) {
      require.ensure([], function(require) {
        resolve(require('...'));
      });
    }},
});

router.redirect({ '*': '/login' }); // 默认路由

router.beforeEach(function(transition) {
  // console.info('show loading');
  transition.next();
}).afterEach(function(transition) {
  // console.info('hide loading');
});

// 启动
router.start(Vue.extend({}), '#app');

```


#### 使用路由

```
<a v-link.literal="/a/b/c"></a>
<a v-link="{ path: Foo }">Go to Foo</a>
```


```
new Vue({
  ready: function(){
    this.$route.path;
    this.$route.params;
    this.$route.query;
  },
  methods: {
    jumpUrl: function () {
      // 代码跳转
      this.$route.router.go('/a');
      this.$route.router.go({
        path: '/a',
        replace: true // 是否产生新的历史记录
      });
      this.$route.router.go({
        name: 'a', // 具名路径
        params: {},
        query: {}
      });
    }
  }
});

```

### 异步请求: vue-resource
[官网](https://github.com/vuejs/vue-resource)

```
Vue.http.get('/someUrl', [options]).then(successCallback, errorCallback);
Vue.http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);
```

### 拦截
```
Vue.http.interceptors.push(function(request, next) {
  var data = request.data;
  // 添加 url 前缀
  request.url = serverPrefix + request.url;
  // 加请求参数
  request.data.sessionid = localStorage.getItem('sessionid');

  next(function (response) {
    if(登陆超时){
      setTimeout(function () {
        router.go('/login');
      });
    } else {
      // modify response
      response.body = '...';
    }
  });
});
```

### 支持 Promise
例如
```
Vue.http.post('/someUrl', [optinos])
  .then(function(res) {
    var data = res.data;
    return new Promise(function(resolve, reject) {
      if (!data.error) {
        reject()
      } else {
        resolve(data);
      }
    }.bind(this));
  })
  .then(function(res) {
    var data = res.data;
    return new Promise(function(resolve, reject) {
      Vue.http.post('/someUrl', data).then(function (res) {
        if(res.data){
          resolve();
        }
      });
    }.bind(this));
  }, failFn)
  .then(succFn, failFn);

```
