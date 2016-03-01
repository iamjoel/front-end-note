# JavaScript 数字常用方法介绍
## 全局的
* [isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) - 是否是 NaN。主要是和 NaN 来比较，因为 `NaN == NaN ` 是 `false`。ES6中 Number 上也有 Number.isNaN。
```
isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true

isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false

isNaN("37");      // false
isNaN("37.37");   // false
isNaN("");        // false: 会被转化转化成0
isNaN(" ");       // false: 会被转化转化成0
```
* [isFinite](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) - 是否是有限的数字
```
isFinite(Infinity);  // false
isFinite(NaN);       // false
isFinite(-Infinity); // false
isFinite(2/0);       // false:2/0 的结果是 Infinity

isFinite(0);         // true
isFinite(2e64);      // true
isFinite(null);      // true
```

## 转化
* parseFloat - 字符串转数字
```
var number = parseFloat('4.6');
number;// 4.6
```
* parseInt(str [,进制]) - 字符串转整数
```
var number = parseInt('4.6', 10);
number;// 4
```
* 数字转字符串
```
var str = 4.5 + '';
str; // '4.5'
```

## Number 上的常用属性方法
* [Number.prototype.toFixed([精度])]() - 取几位小数。注意：返回值类型为字符串。
```
```
* [Number.prototype.]() -
```
```
* [Number.prototype.]() -
```
```
* [Number.prototype.]() -
```
```


## Math 上的常用属性方法
* Math.PI - 3.141592653589793
* Math.ceil - 如果是小数，返回比参数大最近的整数
```
Math.ceil(4.3);// 5
Math.ceil(4.8);// 5
Math.ceil(-4.3);// -4
Math.ceil(2);// 2
```
* Math.floor - 如果是小数，返回比参数小最近的整数
```
```
* Math.round - 四舍五入
```
Math.round(3.5);// 4
Math.round(3.4);// 3

```
* Math.random() -
```

```
* Math. -
```

```
