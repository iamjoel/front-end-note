# jQuery 写法示例
## 选择元素
```
$('.box') // CSS3 选择器
$('.el', $parent)
$().add('.el1').add('.el2')

$('.box').filter(':visible')
$('.box').filter(function(){
  var $this = $(this)
  return $this.index() > 3 && $this.hasClass('xxx')
})

$('.box').find('.box-header')

$('.box').closest('.wrap')
$('.box').parents('.wrap')
$('.box').offsetParent()
```

## 遍历元素
```
$el.each(function( index ) {
  console.log( index + ": " + $( this ).text() );
});
```

## 创建元素
```
var $newEl = $('<div>')
```

## 复制元素
```
$(el).clone()
```

## 元素的末尾插入子元素
```
$el.append($newEl)
```

## 元素的开始插入子元素
```
$el.prepend($newEl)
```

## 当前元素前面插入元素
```
$el.insertBefore($newEl)
```

## 当前元素后面插入元素
```
$el.insertAfter($newEl)
```

## 删除元素
```
$(el).remove()
```

## 判断两个元素是否相等
```
$(el).is($(otherEl))
```

## 内容
```
$el.text()
$el.text('text')
$el.html()
$el.html('<span>xxx</span>')
```

## 属性
```
$el.attr('href')
$el.attr('href', '//google.com')
$el.removeAttr('data-loading')
$el.prop('checked')
$el.prop('checked', true)
```

## 类名
```
$el.addClass('className')
$el.addClass('className1 className2')
$el.removeClass('className')
$el.hasClass('className')
$el.toggleClass('className')
```

## 样式
```
$el.css('color');
$el.css('color', 'red');
$el.css({
  'font-size': '16px',
  'border': 'none'
});
```

## 尺寸
```
$el.width()
$el.width(400)
$el.height()
$el.innerWidth()
$el.outerWidth()
```

## 位置
```
$el.position().top // 相对于其定位父元素
$el.position().left
$el.offset() // 相对于浏览器窗口
$el.offset({
  top: 10,
  left: 20px
})
$el.scrollTop(20) //滚动条滚动20px
```

### 父元素滚动到指定子元素的位置
```
$wrap.scrollTop($child.position().top)
```

注意：父元素需要是定位元素（position 不为 static）。

## 显示隐藏
```
$el.show()
$el.hide()
$el.toggle() //切换显示，隐藏的状态
$el.fadeIn()
$el.fadeOut()
$el.slideUp()
$el.slideDown()
```

## 事件
```
$el.click(function(){})
$el.on('click', '.child', function(){})
$el.off('click')
$el.click(function(event){
  event.stopPropagation(); // 阻止事件冒泡
  event.preventDefault(); // 阻止元素的默认行为
  event.target;// 触发事件的元素
  event.currentTarget === this; // true
  event.which();// 按下的键
})

$(document).ready(function(){})

$el.change()// 脚本触发事件
```

## 动画
```
$.animate({
  opacity: 0.6,
  left: '+=50',
  height: 'toggle'// 0 与 原高的切换
}, 2000, function(){
  // 动画完成
})
```

## ajax
```
$.ajax({
  url: 'xxx',
  data: {}
})

$.ajax({
  url: 'xxx',
  type: 'post'
  data: {
    query: 'aaa'
  }
}).done(function(res){}).fail(function(){})
```

## 链式调用
```
$el.addClass('someClass')
   .html('xxx')
   .click()
```

## 工具方法
### $.makeArray
将类似数组的对象转化成数组
```
function add() {
  var args = arguments;
  args = $.makeArray(args);
  var sum = 0;
  return args.reduce(function(prev, curr) {
    return prev + curr
  }, 0)
}
add(1,2,3);//输出6
```

### 类型判断
```
$.isArray() // 是否是数组
$.isFunction() // 是否是方法
$.isNumeric() // 是否是数组
$.isEmptyObject() // 是否是空对象
$.isPlainObject() // 是否是PlainObject。PlainObject的定义见[这里](http://api.jquery.com/Types/#PlainObject)
```

### $.extend
对象合并
```
var defaultOpts = {a:'xxx', b:'xxx'}
function doSth(opts) {
  $.extend({}, defaultOpts, opts)
  // 也可以用 Object.assign({}, defaultOpts, opts)
}
```

### 其他
```
$.noop() // 返回一个空函数
$.now() // 返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数。也可以用 Date.now()
$.trim('   aa  ') // 去除字符串前后的空格。也可以用 '   aa  '.trim()
```
