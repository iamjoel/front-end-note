# jQuery 写法示例
## 选择元素
```
$('.box') // CSS3 选择器
$('.el', $parent)
$().add('.el1').add('.el2')
```

## 遍历元素
```
$el.each(function( index ) {
  console.log( index + ": " + $( this ).text() );
});
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
```

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
