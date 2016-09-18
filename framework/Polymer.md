# Polymer
用 [web components](http://webcomponents.org/) 的方式来做应用的一个框架。

## 需要注意的
* web component 的名称不能带大写字母

## 一些概念
### shadow DOM
Shadow DOM 是指浏览器的一种能力，它允许在文档（document）渲染时插入一棵DOM元素子树，但是这棵子树不在主DOM树中。

简单来说，Shaow DOM 里的 CSS 和 JS 不会影响主DOM，主DOM 的 CSS 和 JS 也不会影响到DOM。

### 会影响 shadow DOM 的选择器
* ::shadow
* /deep/ 新的规范是 >>>。 这个选择器是否应该存在有争议。
* :host
* :host-context
* ::content

详细解释见 [Shadow DOM CSS Cheat Sheet](http://robdodson.me/shadow-dom-css-cheat-sheet/)。


## 相关链接
* [官网](https://www.polymer-project.org/1.0/)
* [Github](https://github.com/Polymer/polymer)
* [A Guide to Web Components | CSS-Tricks](https://css-tricks.com/modular-future-web-components/)

# Demo
* [Grid Element](http://charbelrami.github.io/grid-element/) 用 Polymer 和 Flex 做的响应式 Grid。 [Github](https://github.com/charbelrami/grid-element)

## 待探究
* 如何与组件通信
* 如何给组件绑事件
* 组件能嵌套组件吗？
