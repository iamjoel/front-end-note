# Dart
> Dart是Google公司发布的网络编程语言,其诞生的目的是为了让广大C类OOP程序员们克服JavaScript那”复杂”的语言特性。

[官网](https://www.dartlang.org/)。


## 定义变量
用 泛型的 `var`, 或具体类型，如: `int`, `bool` 等。如
```
var name = 'Bob';
```

变量如果未被赋值，默认值是 `null`。


## 定义常量
用 `final` 定义变量。如:
```
final a = 3;
``` 

用 `const` 还可以定义内容的不可变，如

```
var constantList = const [1, 2, 3];
// constantList[1] = 1; // Uncommenting this causes an error.
```

## 数据类型
### 数值型
`num`, `int`, `double`。

字符串转数字
```
int.parse('1');
double.parse('1.2');
```

### 字符串
#### 创建
```
'a';
"b";
'''
多行字符串1
多行字符串2
'''

```

### 字符串中用变量
```
var a = 3;
var str = '$a'; // $变量名
```

### 操作
* 索引
  * .contains
  * .startsWith
  * .endsWidth
  * .indexOf
* .substring(startIndex, endIndex) 子字符串
* .toUpperCase, .toLowerCase
* .trim
* .replaceAll
* .split 转数组

## 数组
```
var list = [1, 2, 3];
// 数组中只包含某种类型
var names = new List<String>();
```

### Map
和 `JavaScript` 中的 Ojbect 用法基本一样。如：

```
var gifts = {
// Keys      Values
  'first' : 'partridge',
  'second': 'turtledoves',
  'fifth' : 'golden rings'
};

gifts['fourth'] = 'calling birds';

// 用泛型
var pages = <String, String>{
  'index.html': 'Homepage',
  'robots.txt': 'Hints for web robots',
  'humans.txt': 'We are people, not machines'
};
```

## 流程控制
if，switch，for 和 JavaScript 的写法是一模一样的。

## 函数
### 定义
```
返回值 函数名(参数类型：参数名, [可选参数]) {

}

// 可选命名参数
返回值 函数名({参数类型：参数名,参数类型：参数名,}) {

}
```

如
```
bool isNoble(int atomicNumber, [String xx]) {
  return _nobleGases[atomicNumber] != null;
}
```

只有一个表达式的方法，你可以选择 使用缩写语法：
```
=> expr 语法是 { return expr; } 形式的缩写
```

### 调用
```
xxx(3, 4);
xxx(a: 3, b: 4); // 指定参数名创制
```

### 执行入口
程序执行的入口 `main()`

## 包管理工具
pub。

### 引入包
```
import 'dart:io';
import 'package:mylib/mylib.dart'; // 安装的包里找
import 'package:utils/utils.dart';
import 'a.dart'; // 本地找
```

指定库前缀 来解决 两个库存在两个冲突的标识符的情况。如:

```
import 'package:lib1/lib1.dart';
import 'package:lib2/lib2.dart' as lib2;
// ...
Element element1 = new Element();           // Uses Element from lib1.
lib2.Element element2 = new lib2.Element();
```

导入部分
```
// Import only foo.
import 'package:lib1/lib1.dart' show foo;

// Import all names EXCEPT foo.
import 'package:lib2/lib2.dart' hide foo;
```

### 定义一个包
```
library xx;
```

以下划线 (`_`) 开头的标识符只有在库 内部可见。

## Class
```
class Point {
  num x; // 实例变量
  num y;
  num _z; // _ 开头是私有的
  static num d; 静态变量

  // 构造函数
  Point(num x, num y) {
    // There's a better way to do this, stay tuned.
    this.x = x;
    this.y = y;
  }

  // 实例函数
  num distanceTo(Point other) {
    var dx = x - other.x;
    var dy = y - other.y;
    return sqrt(dx * dx + dy * dy);
  }
}

main() {
  var point = new Point();
  point.x = 4;          // Use the setter method for x.
  assert(point.x == 4); // Use the getter method for x.
  assert(point.y == null); // Values default to null.
}
```

抽象类
```
abstract class Doer {
  void doSomething(); // 定义抽象方法。
}

// 实现
class EffectiveDoer extends Doer {
  void doSomething() {
    // ...Provide an implementation, so the method is not abstract here...
  }
}
```

也支持接口(`implements`),以及 mixins。

也支持重写`+`,`-`,`*`,`/`之类的操作符。

## 异步支持
用 `async` 和 `await`。和 JavaScript 的差不多。如:
```
checkVersion() async {
  var version = await lookUpVersion();
  if (version == expectedVersion) {
    // Do something.
  } else {
    // Do something else.
  }
}
```

## Metadata（元数据）(注解)
元数据注解是以 @ 字符开头，后面是一个编译时 常量(例如 deprecated)或者 调用一个常量构造函数。


## 注意点
* 语句结尾一定要带 `;`

## 资源
* [Dart 语法预览](http://dart.goodev.org/guides/language/language-tour)