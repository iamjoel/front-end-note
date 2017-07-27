# javascript代码风格
## <a name='TOC'>目录</a>
1. [文件命名](#fileNameDefine)
1. [变量命名](#varDefine)
1. [常量命名](#constantDefine)
1. [方法命名](#functionDefine)
1. [类命名](#classDefine)
1. [定义变量](#defineVar)
1. [定义对象](#defineObject)
1. [字符串](#string)
1. [大括号](#brace)
1. [代码缩进/空格](#whitespace)
1. [注释](#comment)
1. [jquery](#jquery)
1. [参考](#reference)

## <a name='fileNameDefine'>文件命名</a>
使用分割线。
```js
child_process.js
string_decoder.js
_linklist.js
```

## <a name='varDefine'>变量命名</a>
使用小驼峰式命名法。[原因](https://github.com/modulejs/pragmatic-jquery#why-lowercamelcase)
```js
var thisIsMyVal = "foo";
```
[返回顶部](#TOC)

## <a name='constantDefine'>常量命名</a>
全部大写，单词间用_分隔。
```js
var LOCALHOST = "http://localhost";
var REMORT_PORT = "8080";
```
[返回顶部](#TOC)

## <a name='functionDefine'>方法命名</a>
使用小驼峰式命名法。
```js
function thisIsMyFunction() {
    // balabala
}
```
[返回顶部](#TOC)


## <a name='classDefine'>类命名</a>
使用大驼峰式命名法。
```js
var Greeter = Class.extend({
    name: null,

    _constructor: function(name) {
        this.name = name;
    },

    greet: function() {
        alert('Good Morning ' + this.name);
    }
});
```
[返回顶部](#TOC)

## <a name='defineVar'>定义变量</a>
```js
var a = "alpha";
var b = "beta";
var c = "chi";
```
原因
```js
var a = "alpha",
    b = "beta" // <-- 遗漏逗号
    c = "chi"; // <-- c成为全局变量
```
[返回顶部](#TOC)

## <a name='defineObject'>定义对象</a>
```js
var hero = {
    firstName: 'Bob'
  , lastName: 'Parr'
  , heroName: 'Mr. Incredible'
  , superPower: 'strength'
};
```
原因
```js
var hero = {
  firstName: 'Bob',
  lastName: 'Parr',
  heroName: 'Mr. Incredible', // <-- 注释最后一行是忘记删除逗号
  //superPower: 'strength'    
};
```
[返回顶部](#TOC)

## <a name='string'>字符串</a>
* 定义字符串统一使用单引号。
```javascript
    // bad
    var name = "Bob Parr";

    // good
    var name = 'Bob Parr';
```
* 字符过长，换行连接使用加号。
```javascript
    // bad
    var errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

    // bad
    var errorMessage = 'This is a super long error that \
    was thrown because of Batman. \
    When you stop to think about \
    how Batman had anything to do \
    with this, you would get nowhere \
    fast.';


    // good
    var errorMessage = 'This is a super long error that ' +
      'was thrown because of Batman.' +
      'When you stop to think about ' +
      'how Batman had anything to do ' +
      'with this, you would get nowhere ' +
      'fast.';
```
* 一个的字符串的值是由多个字符串连接而成的，使用join而不是字符串连接
```javascript
    // bad
   var obj = {
       name :'joel'
       ,age :18
   };
   var str = '';
   for (var key in obj){
      if(obj.hasOwnProperty(key)){
         str += obj[key];
      } 
   }
    // good
   var obj = {
       name :'joel'
       ,age :18
   };
   var str = '';
   var arr = [];
   for (var key in obj){
      if(obj.hasOwnProperty(key)){
         arr.push(obj[key]);
      } 
   }
   str = arr.join('');
```
[返回顶部](#TOC)

## <a name='brace'>大括号</a>
大括号位于行尾
```javascript
   // bad
   function ()
   {


    // good
   function () {

```
[返回顶部](#TOC)

## <a name='whitespace'>代码缩进</a>
* 缩进使用4个空格（sublime等IDE可配置1个tab等于几个空格）。不要混用空格和tab。
```javascript
  function() {
  ∙∙∙∙var name;
  }
```
* 方法的参数列表，逗号前不需空格，逗号后需空一格
```javascript
  function(a,∙b) {

  }
```
* "{"，"}" 前后需空一格;":"，","后面空一格，前面不需空格;if，for，方法名与"("之间不要空格;操作符(+，-等)与操作数间需要有一个空格
```javascript
  function a(a,∙b)∙{
     return a∙+∙b;
  }
  if()∙{
  }∙else∙{
  }
```
[返回顶部](#TOC)

## <a name='comment'>注释</a>
* 用// FIXME:来标示bug
```javascript
    function Calculator() {

      // FIXME: shouldn't use a global here
      total = 0;

      return this;
    }
```
* 用//  TODO:来标示要做的
```javascript
    function Calculator() {

      // TODO: total should be configurable by an options param
      this.total = 0;

      return this;
    }
```
[返回顶部](#TOC)

## <a name='jquery'>jquery</a>
* jquery对象声明使用前缀$
```javascript
    // bad
    var sidebar = $('.sidebar');
    var that = $(this);

    // good
    var $sidebar = $('.sidebar');
    var $this = $(this);

```
[返回顶部](#TOC)

## <a name='reference'>参考</a>
* [Pragmatic jQuery Style](https://github.com/modulejs/pragmatic-jquery/blob/master/README.md)
* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
* [Google JavaScript代码风格指南](http://chajn.org/jsguide/javascriptguide.html)    
[返回顶部](#TOC)


