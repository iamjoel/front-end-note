# TypeScript
## 是什么
TypeScript:
* 是 JavaScript 的超集。意思是 TypeScript 支持 JavaScript 的所有写法，除此之外还支持其他功能。
* 具有类型系统。
* 能编译成 JavaScript。
* 由 Microsoft 开发
* 开源于 [GitHub](https://github.com/Microsoft/TypeScript)。

## 优点
TypeScript 增加了代码的可读性和可维护性：
* 在编译阶段就发现大部分错误。
* 类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了。
* 增强了IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等。

## 缺点
* 学习成本。
* 增加开发成本。毕竟要多写一些类型的定义。
* 可能和一些库结合的不是很完美。

## 安装
```
npm install -g typescript
```

[Sublime Plugin](https://github.com/Microsoft/TypeScript-Sublime-Plugin)

## 编译
```
tsc 文件名.ts
```

## 基础
* 数据类型
  * 基础数据类型。 string, number, boolean, void。
  * 任意类型。 any。
  * 类型推断。定义时如果没有明确的指定类型，则会安装下面的规则推断类型:
    * 定义时如果赋值，会根据赋值类型推断类型。
    * 定义时没有赋值，则会推断为 any。
  * 联合类型： 表示取值可以为多种类型中的一种。如 `let a: string | number`
  * 对象类型 接口。变量的类型是接口时。赋值的时候，变量的形状必须和接口的形状保持一致。
    * 定义: `interface Person { name: string; age: number}`
    * 可选属性。属性后面加`?`。如 `age?: number`
    * 允许任意属性。 `[propName: string]: any`
  * 数组类型。 类型+方括号。 如`let fibonacci: number[] = [1, 1, 2, 3, 5]`
  * 函数类型。
    * 返回值类型。 参数类别后声名。如 `function sum(x: number, y: number): number {...}`
    * 可选参数。参数名称后加`?`。`lastName?: string`。可选参数放最后。
    * 剩余参数。`...items: any[]`
  * 类型断言。手动指定一个的类型。写法 `<类型>值` 或 `值 as 类型`。 用在 联合类型 中将变量指定为一个更加具体的类型。
  * 声名文件。当使用第三方库时，我们需要引用它的声明文件。推荐用 `@types` 来管理，见 [这里](https://github.com/DefinitelyTyped/DefinitelyTyped)。
  * 内置对象。
    * ECMAScript 的内置对象有：Boolean, Error, Date, RegExp。
    * DOM 和 BOM 的内置对象有：Document、HTMLElement、Event、NodeList 等。
    * 如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件。 `npm install @types/node --save-dev`。
  * 类型别名。 `type 名称 = 类型`。 如 `type Name = string; var b: Name`
  * 字符串字面量类型。字符串字面量类型用来约束取值只能是某几个字符串中的一个。 如 `type EventNames = 'click' | 'scroll' | 'mousemove'`。
  * 元组。数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。如: `let xcatliu: [string, number] = ['Xcat Liu', 25]`。
  * 枚举。
  * 类
  * 类和接口。接口（Interfaces）可以用于对「对象的形状（Shape）」进行描述。还可以定义方法，让类来实现。
  * 泛型。


## 资源
* [官网](http://www.typescriptlang.org/)
* [TypeScript 入门教程](https://ts.xcatliu.com/)
* [TypeScript Handbook](https://zhongsp.gitbooks.io/typescript-handbook/)