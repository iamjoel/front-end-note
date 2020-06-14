# React 最佳实践
## 无状态和refs的组件不要用 Class 组件
用无状态函数组件(SFC)。无状态函数组件和 Class 相比：
* 写法简洁。
* 无状态组件占用更少的内存。

## 使用组合而非继承
组合和继承相比，提供了清晰而安全地定制组件外观和行为的灵活方式。

详细说明： [这里](https://zh-hans.reactjs.org/docs/composition-vs-inheritance.html)。

## 尽量不要用 Mixins
Mixins 会增加隐式的依赖，导致命名冲突，并且会以雪球式增加复杂度。在大多数情况下Mixins可以被更好的方法替代，如：组件化，高阶组件，工具模块等。

不要用 Mixins 的详细说明：[Mixins Considered Harmful](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html)。

## 多个组件共享数据的处理
用 Context API。 或状态提升。

状态提升指：将多个组件的共享数据提升至这些组件的最近共同父组件中。详细的实现方式见[这里](https://zh-hans.reactjs.org/docs/lifting-state-up.html)。

## 组件一定要写 propTypes
通过 propTypes 更容易理解组件，也容易debug。

用 ts 来写 propTypes 会更舒服。还嗯控制

## 传递属性，筛选出不必要的属性
```js
// relevantProps 是必要的属性
const { irrelevantProp1, irrelevantProp2, ...relevantProps  } = this.props;
<WrappedComponent {...relevantProps} />
```

## 组件中的方法用箭头
组件中的方法用箭头，将实例的绑定到方法。避免写 bind this。

```js
handleClick = () => {
  console.log('this is:', this);
},
render() {
  return (
    <button onClick={this.handleClick}>
      Click me
    </button>
  );
}
```

bind this 的版本:
```js
constructor(props) {
  super(props)
  this.handleClick = this.handleClick.bind(this)
}
handleClick() {
  console.log('this is:', this);
},
render() {
  return (
    <button onClick={this.handleClick}>
      Click me
    </button>
  );
}
```

或者事件回调里用箭头函数
```js
handleClick() {
  console.log('this is:', this);
},
render() {
  return (
    <button 
      onClick={() => {
        this.handleClick()
      }}>
      Click me
    </button>
  );
}
```


## 推荐阅读
* [React 哲学](https://zh-hans.reactjs.org/docs/thinking-in-react.html) [英文版: Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
* [Airbnb React/JSX 风格指南](https://github.com/jhcccc/javascript/tree/master/react)