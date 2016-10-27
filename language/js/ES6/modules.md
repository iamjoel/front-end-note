# 模块
## 导出
### 导出默认
```
export default { foo: 'bar' }// CommonJS module.exports = { foo: 'bar' }
```

### 导出带名字的
```
export var foo = 'bar' // CommonJS module.exports.foo = 'bar'
export var baz = 'ponyfoo'
```

## 导入
### 导入默认的
```
import _ from 'lodash'// var _ = require('lodash')
```

### 导入带名字的
```
import {map, reduce} from 'lodash'
import {map as myMay} from 'lodash'
```

### 导入所有带名字的
```
import * as _ from 'lodash'
```

导入所有必须加 `as` 语句。

## 综合 Demo
demo.js 如下
```
export default {
  a:1
}
export var other = {
  b:2,
  c:3
}
```

test.js 如下
```
import d from './demo'
console.log(d) // {a: 1}
import {default as d1,other1, other2 as myName, other3} from './demo'
console.log(d1) // {a: 1}
console.log(other1) // {b: 2, c: 3}
console.log(myName)  // {d: 4}
console.log(other3) // undefined

import * as all from './demo'
console.log(all) //  {default: Object, other1: Object, other2: Object, __esModule: true}
console.log(all.default) // {a: 1}
```

注意： `import` 和 `export` 只能在顶级用，不能在代码块中用。否则会报 `'import' and 'export' may only appear at the top level`。例如
```
var isDebugger = true
if(isDebugger) {
  import mock from './mock'
}
```

这种情况，可以考虑用 CommonJS 或 System.import 的写法。

## 参考
* [ES6 Modules in Depth](https://ponyfoo.com/articles/es6-modules-in-depth)
* [ECMAScript 6 modules: the final syntax](http://www.2ality.com/2014/09/es6-modules-final.html)