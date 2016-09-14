# 迭代器
一个迭代器(对象)会有一个名为 next 的方法, 调用该方法后会返回一个拥有两个属性的对象, 一个是 value 属性, 值可以是任意值, 以及一个 done 属性, 布尔值, 表示该迭代器是否已经被迭代完毕。

对象上的 [Symbol.iterator] 的值如果是一个迭代器对象，则该对象能被
for-of 来循环。如 数组，类数组（arguments 之类）字符串, Map，Set等都有[Symbol.iterator]，该值是迭代器，因此能被 for-of 来循环。

## 参考
* [迭代器协议（MDN）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)