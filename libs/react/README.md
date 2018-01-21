# React学习
React 仅仅是 VIEW 层。

## 创建组件
React 应用都是构建在组件之上。

### 用纯函数
```
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}
```

比较简单的组件用上面的写法。这样的组件没有 state。函数名就是组件名。

### 用 Class
```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

考虑性能，可以用 React.PureComponent 。PureComponent的自动为我们添加的shouldComponentUpate函数，只是对props和state进行浅比较(shadow comparison)，当 props 或者 state 本身是嵌套对象或数组等时，浅比较并不能得到预期的结果，这会导致实际的props和state发生了变化，但组件却没有更新的问题。

React.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。 当 props 或者 state 变化时，会被自动调用。如
```
React.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
```

需要注意的是，模板的内容必须是在一个标签中的。

**注意**
* 组件名必须大写

## 生命周期
* constructor
* componentDidMount
* componentWillUnmount
* componentWillReceiveProps 当 props 变化时会触发。里面的第一个参数值为最新的props。 在该方法中的，用 this.props 的值还没更新。

## state 和 props
组件的外部数据用 props，内部数据用 state。 

修改 state 用 setState。props 不能被修改的。

当 state 或 props 发生变化时，render 函数会被调用。

属性上的一些等效代码

```
<MyComponent message="hello world" />

<MyComponent message={'hello world'} />
```

属性的默认值是true
```
<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />
```

## JSX
JSX 的基本语法规则：遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析。例如
```
var names = ['Alice', 'Emily', 'Kate'];

React.render(
  <div>
  {
    names.map(function (name) {
      return <div>Hello, {name}!</div>
    })
  }
  </div>,
  document.getElementById('example')
);
```

JSX 与 HTML 非常相似，但是有些关键区别要注意。如
* 代码中输出的内容会被转义。如`<div>sth</div>`中的`<`和被`>`会变成`&lt;`和`&gt;`
* 如果往原生 HTML 元素里传入 HTML 规范里不存在的属性，React 不会显示它们。如果需要使用自定义属性，要加 data- 前缀。以 aria- 开头的 [网络无障碍] 属性可以正常使用。
* 创建标签 直接用类似 `<h1>xxx</h1>`。 加字符串包含会被转义。

详细见[JSX 陷阱](http://facebook.github.io/react/docs/jsx-gotchas-zh-CN.html)

需要注意的是，
* JSX的内容必须是在一个闭合元素里。 如：`<input type="text" />` 而不能写 `<input type="text" >`。
* 用到 class 时，必须用 className
* 在JSX 中的绑定事件时，回调里的 this 默认是underfined。 解决这个问题除了用bind外，还可以用
```
<button onClick={this.handleClick}>
...

// public class fields syntax
handleClick = () => {
  console.log('this is:', this);
}
// this undefined
handleClick() {
  console.log('this is:', this);
}

```

## 比较酷的库的代码片段
```
const attrs = {
  href: 'http://example.org',
  target: '_blank',
};
<a {...attrs}>Hello</a>
```

相当于
```
const attrs = {
  href: 'http://example.org',
  target: '_blank',
};
<a href={attrs.href} target={attrs.target}>Hello</a>
```

将一堆组件移到子组件上
```
const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const App = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
}
```


## 选取真实的DOM元素(非虚拟DOM)
通过 `React.findDOMNode(this.refs.元素的ref属性的值)`


## 虚拟DOM（Virtual DOM）
在浏览器渲染网页的过程中，加载到HTML文档后，会将文档解析并构建DOM树，然后将其与解析CSS生成的CSSOM树一起结合产生爱的结晶——RenderObject树，然后将RenderObject树渲染成页面（当然中间可能会有一些优化，比如RenderLayer树）。这些过程都存在与渲染引擎之中，渲染引擎在浏览器中是于JavaScript引擎（JavaScriptCore也好V8也好）分离开的，但为了方便JS操作DOM结构，渲染引擎会暴露一些接口供JavaScript调用。由于这两块相互分离，通信是需要付出代价的，因此JavaScript调用DOM提供的接口性能不咋地。各种性能优化的最佳实践也都在尽可能的减少DOM操作次数。

而虚拟DOM干了什么？它直接用JavaScript实现了DOM树（大致上）。组件的HTML结构并不会直接生成DOM，而是映射生成虚拟的JavaScript DOM结构，React又通过在这个虚拟DOM上实现了一个 diff 算法找出最小变更，再把这些变更写入实际的DOM中。这个虚拟DOM以JS结构的形式存在，计算性能会比较好，而且由于减少了实际DOM操作次数，性能会有较大提升。

支持Virtual DOM的新增，比较等操作的库[virtual-dom](https://github.com/Matt-Esch/virtual-dom)

## 关于Flux
* [图解 Flux](http://zhuanlan.zhihu.com/FrontendMagazine/20263396)
* [Flux 傻瓜教程](http://zhuanlan.zhihu.com/FrontendMagazine/19900243)

## 相关插件
* [dva](https://github.com/dvajs/dva/blob/master/README_zh-CN.md) 基于 redux、redux-saga 和 react-router 的轻量级前端框架。阿里出品。
  * [ppt](http://slides.com/sorrycc/dva#/)
  * [dva-knowledgemap](https://github.com/dvajs/dva-knowledgemap)
* [Ant Design Pro](https://preview.pro.ant.design/) 是基于 dva 实现的。阿里出品。

## 服务器端渲染
[玩转 React 服务器端渲染](https://blog.coding.net/blog/React-server-rendering)

## Tip
* React的文档地址为 http://facebook.github.io/react/docs/getting-started.html 对应的中午的地址为 http://facebook.github.io/react/docs/getting-started-zh-CN.html 。如果文档页面是有中文翻译的，则其地址是`.html`前加`-zh-CN`即为对应的中文页面地址。

## 案例
* [百度母婴技术团队—基于Reactjs实现webapp](https://github.com/my-fe/wiki/issues/1)

## 学习资源
* [如何学习React](https://github.com/petehunt/react-howto/blob/master/README-zh.md) 一个概览。
* [React 入门实例教程](http://www.ruanyifeng.com/blog/2015/03/react.html) 阮一峰
* [React 入门教程](http://hulufei.gitbooks.io/react-tutorial/content/) 比阮一峰的详细
* [ReactJS 傻瓜教程](http://zhuanlan.zhihu.com/FrontendMagazine/19896745)
* [A Compact React Cookbook](http://blog.oyanglul.us/javascript/react-cookbook-mini.html) 收集了在实践 React 时的一些问题和解决方法
* [React Mixin 的前世今生](http://zhuanlan.zhihu.com/purerender/20361937)
* [React.js Introduction For People Who Know Just Enough jQuery To Get By](http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/)
* [React Router 中文文档](https://github.com/react-guide/react-router-cn) React Router 是完整的 React 路由解决方案

## 工具与环境设置
* [Babel Sublime](https://packagecontrol.io/packages/Babel) 支持ES6, React.js, jsx 代码高亮。安装后设置下。
* 在Sublime 中，让 Emmet 能在 js 中起作用。在key binding 中加
```
{ "keys": ["tab"], "command": "expand_abbreviation_by_tab", "context":
  [
      { "operand": "source.js", "operator": "equal", "match_all": true, "key": "selector" },
      { "match_all": true, "key": "selection_empty" },
      { "operator": "equal", "operand": false, "match_all": true, "key": "has_next_field" },
      { "operand": false, "operator": "equal", "match_all": true, "key": "auto_complete_visible" },
      { "match_all": true, "key": "is_abbreviation" }
  ]
}
```


## 好文
* [React.js生态系统概览 [译]](http://www.inkpaper.io/blog/post/2015/10/18/navigating-the-react-ecosystem.html)
* [React源码剖析系列 － 生命周期的管理艺术](http://zhuanlan.zhihu.com/purerender/20312691)
* [React 组件之间如何交流](http://www.60sky.com/2015/09/03/2015-07-19-react-component-communicate/)
* [React 编程风格指南](http://segmentfault.com/a/1190000003899845)

## 组件库
* [Awesome React Components & Libraries](https://github.com/brillout/awesome-react-components)
* [jmui](https://github.com/choujimmy/jmui) Mobile UI React Components
