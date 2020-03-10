# Web前端进阶之路: 提升代码质量篇
初级前端和高级前端有什么差别？在我看来，初级前端关注点在完成功能，高级前端能在完成功能的基础上，做的又好又快。做的好，就是代码质量高，做的快就是开发效率高。

## 为什么要写高质量的代码
高质量的代码体现在两个方面：
* 易于维护。
* Bug少。

当需求发生变化，或出Bug需要改时，易于维护的代码改起来更容易，更快。改那些糟糕的代码，费时费力不说，心情也变得糟糕。

Bug少的代码。有利于提高目标用户的满意度。这也是开发人员的职责所在。

## 如何写出易于维护的代码
在我看来，易于维护的代码：
* 有统一的代码风格(Code Style)。
* 合理的代码设计。
* 易于管理的项目版本号。
* 清晰明了的提交信息。

### 统一的代码风格(Code Style)
代码风格指对代码的缩进，空格，命名等方面的约定。统一的代码风格能减少团队成员的理解成本。

#### 代码风格
我们分别从 HTML，CSS 和 JavaScript 来说。

##### HTML
1 HTML 是要满足W3C标准的。  
以下是几个比较重要的：
* HTML文档必须有文档类型定义(DTD)。规范推荐使用:`<!DOCTYPE html>`。
* 要定义网页的编码。 推荐: `<meta charset="UTF-8">`
* 标签中的字母必须是小写字母。
* 标签必须闭合。自闭合标签，以 / 闭合标签，如 `<input type="text" />`。
* 标签属性值用双引号包起来。
* 属性名称中的字母必须是小写字母。
* 自定义属性名，以 `data-` 开头。
* img 标签的 alt 属性必填。图片加载失败时，会显示 alt 属性的值。

可以用[HTML标准验证工具](https://validator.w3.org/unicorn/)检查，HTML 是否符合W3C标准。

2 选择语义化(Semantic)的HTML标签。  
标签语义化(Semantic)指根据内容的语义，去选择与之匹配的标签。

使用语义化标签的原因：
1. 有利于开发者维护代码。语义化标签能提升代码的可读性，让开发者更快找到目标代码。
2. 有利于SEO。爬虫通过语义化标签，能抓取更多页面的信息。

常用的语义化标签有：header, footer, aside, article, section, hgroup, h1\~h6, nav, strong, small。推荐通读下[HTML Living Standard](https://html.spec.whatwg.org/multipage/)。

尽量不用 div 和 span 这2个没有实际意义的标签。

##### CSS
1 CSS的类名用BEM命名法  
[BEM](http://getbem.com/) 是由Yandex公司推出的一套CSS命名规范。BEM 的名称来源于该方法学的三个组成部分的英文首字母，分别是块（Block）、元素（Element）和修饰符（Modifier）。

CSS 的样式应用是全局性的，没有作用域可言。 BEM 通过元素的命名遵循遵循 block-name__element-name–-modifier-name 来保证命名的唯一性。因此，BEM 能够帮助你在前端开发中实现可复用的组件和代码共享。

BEM写法示例：
```html
<div class="box">
  <div class="box__header">
    <h2 class="box__title">标题</h2>
  </div>
  <div class="box__body">
    <div class="box__content">
      内容。
    </div>
    <button class="button button--state-danger">
      Danger button
    </button>
  </div>
</div>
```

错误用法：
* `__` 只能有一个。`block__elem1__elem2__elem3` 要改成 `block__elem3` 或 `block3__elem3`。
* 修饰符中不能有`__`。 `block--xmas__btn` 要改成
  * 在 block 上加类名: `block--xmas`。
  * `block--xmas__btn` 改成: `block__btn`。

更多错误用法及纠正：[Battling BEM (Extended Edition): 10 Common Problems And How To Avoid Them](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/)。

2 语义化CSS的类名  
根据模块的功能来命名，而不是根据样式来命名。如：给红色的提示文字起类名。类名可以叫 `tip`，不应该叫 `color-red`。如果类名是`color-red`，那以后提示文字要改成绿色，类名也要改，用功能来命名不会出现这种问题。

下面是常见类名：
* 布局: header(头部), footer(尾部), main(主栏),side(侧栏), wrap(盒容器), item(条目)。
* 模块: nav(导航), subnav(子导航), breadcrumb(面包屑), menu(菜单), tab(选项卡), title(标题), list(列表), content(内容), table(表格), form(表单), hot(热点), top(排行), login(登录), log(标志), search(搜索), slide(幻灯), tip(提示), help(帮助), news(新闻), download(下载), regist(注册), vote(投票), copyright(版权), result(结果), button(按钮), input(输入), avatar(用户头像), badge(徽章), tag(标签)。
* 状态: collapsed(收拢的), expanded(展开的), current(当前), selected(选中的), active(活跃的), enabled(可用), disabled(不可用)。

3 CSS属性的书写顺序  
我的CSS属性的书写顺序规则是：先写布局类的，再写细节类；从外到内，从上到下，从左到右。

按照这个规则，常见的CSS属性的书写顺序是： display, position, top, bottom, left, right, z-index, margin, border,border-radius,box-shadow, padding, width, height, line-height, background, text-align, font-size, font-family, color, transition, animation。

4 其他  
* 类名用驼峰。类名要优先用BEM命名，再用驼峰。如 `info-box--header`。
* 给 js 用到的类名，以 `js-` 开头。

##### JavaScript
主流的 JavaScript 代码风格有 [JavaScript 标准代码风格(JavaScript Standard Style)](https://github.com/standard/standard/blob/master/docs/README-zhcn.md) 和 [Airbnb JavaScript 代码风格](https://github.com/airbnb/javascript)。

我的项目常用[JavaScript 标准代码风格](https://github.com/standard/standard/blob/master/docs/README-zhcn.md)。可以用 [Prettier](https://github.com/prettier/prettier) 和 [Prettier-standard](https://github.com/sheerun/prettier-standard) 来格式化代码。除此之外，还会用 [ESLint](http://eslint.cn/) 来补充验证JavaScript 标准代码风格中没有涉及，但我觉得需要遵守的[额外规则](https://github.com/iamjoel/front-end-team-guide/blob/master/doc/code-style/demo/.eslintrc.js)。

### 合理的代码设计
合理的代码设计，往往符合下面的一些原则。

### 简单的，容易理解的
单一职责。一个函数只做一件事。单一职责的优点：
* 降低代码的复杂度。因为做的事少了，分支判断就少了，也就变简单了。
* 有利于代码复用。

KISS原则。KISS原则是英语 Keep It Simple, Stupid 的首字母缩写。在设计当中应当注重简约的原则。

### DRY原则：减少重复代码
DRY 是 Don't repeat yourself 的简称。

大量重复代码会导致的问题是：如果修改某重复的代码出了问题，就要修改所有的包含该有问题的代码。增加维护成本。

同样的代码出现了三次，就应该考虑去消除这些重复代码。

### 高内聚低耦合
高内聚指模块内的代码是紧密联系的。低内聚的模块设计的坏处有：模块的职责不明确，比较松散；更有甚者是完成不相关的功能。

低耦合指模块间的依赖尽可能低。高耦合的代码很脆弱。比如一个模块直接读取另一个模块的内部数据，那么当内部数据变了，调用模块就不能工作了。

配置与逻辑分离能降低耦合。配置与逻辑分离指把配置代码从逻辑代码中抽出来。

### 约定优于配置(convention over configuration)
约定优于配置，也称作按约定编程。指通过命名规则之类的约束来减少程序中的配置，旨在减少软件开发人员需要做决定的数量，获得简单的好处，而又不失灵活性。

在写组件的，可以用约定优于配置的做法。

### 健壮性
健壮性是指软件对于规范要求以外的输入情况的处理能力。健壮的系统是指对于规范要求以外的输入能够判断出这个输入不符合规范要求，并能有合理的处理方式。

健壮的代码，就是考虑的全面。具体来说：当写 switch 语句时，是否有 default 分支；当接口报错时，代码是否能正确处理；用户填表单的非法输入，是否会让程序奔溃；当用户输错网址，是否会跳404页面等等。

### 如何提升设计代码的能力
* 多读优秀源码。
* 了解[设计模式](https://www.runoob.com/design-pattern/design-pattern-tutorial.html)（Design pattern）。设计模式代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。
* 多写。

#### 易于管理的项目版本号
[语义化版本规范](https://semver.org/lang/zh-CN/)让项目版本号变得易于管理。通过这个规范，用户可以了解版本变更的影响范围。 版本格式：`主版本号.次版本号.修订号`，版本号递增规则如下：

* 主版本号：当你做了不兼容的 API 修改，
* 次版本号：当你做了向下兼容的功能性新增，
* 修订号：当你做了向下兼容的问题修正。

先行版本号及版本编译元数据可以加到“主版本号.次版本号.修订号”的后面，作为延伸。

#### 清晰明了的提交信息
我采用的提交信息的格式为： `提交类型: 任务id或备注`。如：`fix: 1432`。注意：不要忘写列冒号和空格。提交类型包括：
* feature: 新功能。
* fix:  改bug。
* perf:  优化。 如： 代码写法优化，性能优化等。
* ver： 版本升级。
* doc：添加文档。
* test:  添加测试。

可以用[commitlint](https://commitlint.js.org/)和[husky](https://github.com/typicode/husky) 来验证提交信息符合提交信息规范。

## 如何写出Bug少的代码
通过：错误处理，代码测试，代码review，结对编程可以减少代码的Bug。

### 错误处理
错误监控[FunDebug](https://www.fundebug.com/)。

### 代码测试
根据需求，给代码写测试。每次代码提交前，所有测试用例必须童工。

### 代码review

### 结对编程




