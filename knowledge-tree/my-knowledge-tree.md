# 我的前端技能
* HTML
  * 常见标签和属性
  * 文档类型
  * 转义字符
  * 网页访问无障碍（只是了解）
* CSS
  * 常用选择器
  * 样式生效规则（浏览器的默认样式，选择器权重的计算，样式的继承综合作用的结果）。
  * 常用样式
  * 布局
    * 盒模型
    * 水平，垂直居中
    * 布局技术
      * 相对，绝对和固定定位
      * ~~Float（不推荐。功能弱，还要去浮动）~~
      * inline-block(兼容旧些的浏览器用)
      * Flex (主流)
      * Grid（和Flex配合，面向未来）(只是了解)
    * 响应式
      * 媒体查询
      * rem 的使用（配合 JS 动态设置根节点的字体大小更灵活）。
  * 效果
    * 过渡和动画
    * 变形
    * 盒阴影，文字阴影
    * 渐变
    * 滤镜(只是了解)
  * 常见浏览器兼容性问题和解决
  * 提高代码质量&工作效率
    * CSS组织的方法：[BEM 命名法](http://getbem.com/)，[SMACSS](https://smacss.com/) 等
    * Sass，Compass（基于Sass的框架，很强大，但用的越来越少）。
    * PostCSS: 主要用 AutoPrefix。
* JavaScript
  * 基础语法（变量，函数定义，流程等）
  * 数据类型
  * 变量的求值（作用域，变量定义提升，this，原型链等）
  * DOM
    * DOM 的增删改查
    * 事件
  * BOM （浏览器相关信息,浏览记录历史和一些全局API）
  * Ajax
  * 客户端存储：Cookie，Web Stroge(Local&Session)，离线缓存。
  * 常见浏览器兼容性问题和解决
  * 提高代码质量&工作效率
    * 严格模式
    * 流程控制：Promise，async/await，Event Bus(事件的发布与订阅)。
    * 管理组件的状态和组件间的通信
      * 单向数据流：Vuex
    * ES6
    * 函数式编程（纯函数有很多优势，但完全函数式编程的可读性很烧脑）
    * 设计模式（了解部分）
  * 安全（只是了解） （加密摘要算法，XSS，CSRF）
* 综合
  * 页面性能优化
    * 页面加载的优化
    * 代码执行速度的优化
  * 代码调试
    * 浏览器的调试工具
    * 移动端页面调试
      * 在微信中：微信开发者工具
      * [Weinre](https://people.apache.org/~pmuellr/weinre/docs/latest/)
    * 调试线上页面
      * [Fiddler](http://www.telerik.com/fiddler)
  * HTTP （缓存机制，请求头，相应头，浏览器同源策略等）
  * 如何命名
* 框架
  * 主框架：jQuery， Backbone，Angular 1， Vue。 React(只是了解)。
  * UI 框架：Bootstrap 2，Bootstrap 3。
  * 加载器：Webapck， Requirejs， Seajs。
  * 工具库：UnderScore&Lodash，Moment.js
  * 前端工程化
    * 依赖管理：[npm](https://www.npmjs.com/)，[Bower](https://bower.io/) (不推荐)。
    * 工作流：Webpack， Gulp.js， ~~Grunt（不推荐。Gulp 比 Grunt效率高）~~。
    * 生成项目结构脚手架：[yo](https://github.com/yeoman/yo)
* 软件
  * IDE：Sublime(Vim 模式，Emmet)。
  * 代码版本控制： Git， SVN。
  * 切图： Photoshop ，[cutterman](http://www.cutterman.cn/cutterman/feature)（一键切图标工具）。
* 软技能
  * 沟通（不断学习中）。
  * 团队协作（不断学习中）。

## 想学的
* SVG : SVG 可以做很多酷炫的交互。用 SVG 做的一些效果比用图片或 Canvas之类的更有优势。
* [Cycle.js](https://cycle.js.org/): 写法很优雅的函数式编程的数据流的库。学习用更优雅的方式来管理组件的状态和组件间的通信。
