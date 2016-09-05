# 闭包
闭包简单理解成定义在一个函数内部的函数。如
```
function add(initVal){
  return function(value){
    return initVal + value;
  }
}

add(1)(2);// 3
add(2)(3);// 5
```

JavaScript有两种作用域：全局作用域和函数作用域。函数内部可以直接读取全局变量。但是，在函数外部无法读取函数内部声明的变量。闭包最大的特点，就是它可以“记住”诞生的环境。在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

闭包的最大用处有两个，一个是可以读取函数内部的变量(模拟私有变量)，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。

注意，外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题。

## 拓展阅读
* [javascript闭包机制](http://www.ifcoder.us/600)
* [Master the JavaScript Interview: What is a Closure?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
* [closures are not magic](http://renderedtext.com/blog/2015/11/18/closures-are-not-magic)
