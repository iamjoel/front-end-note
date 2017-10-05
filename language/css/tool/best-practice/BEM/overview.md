# BEM 写法示例
BEM 是一种前端项目开发的方法学， 主要解决样式的冲突的问题，以此帮助你在前端开发中实现可复用的组件和代码共享。更详细的介绍见[这里](http://www.jianshu.com/p/49023c3f242c)。

写法示例如下
```
<!-- block, block__item, block--modifier, block__item--modifier -->
<ul class="menu">
  <li class="menu__item menu__item--selected">Menu Item 1</li>
  <li class="menu__item">Menu Item 2</li>
  <li class="menu__item">Menu Item 3</li>
</ul>


<!-- 避免 .block__el1__el2。改成用以下的方式。 -->
<div class='block'>
    <div class='block__elem1'>
        <div class='block__elem2'>
            <div class='block__elem3'></div>
        </div>
    </div>
</div>

<!-- 避免用 block-name–-modifier-name__element-name 的写法。改成用以下的方式。 -->
<div class="block block--xmas">
  <button class="block__btn"></button>
</div>
```