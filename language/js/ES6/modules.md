# 模块
## 导出
### 导出默认
```
export default { foo: 'bar' }// CommonJS module.exports = { foo: 'bar' }
```

## 导出带名字的
```
export var foo = 'bar' // CommonJS module.exports.foo = 'bar'
export var baz = 'ponyfoo'
```

## 导入
## 导入默认的
```
import _ from 'lodash'// var _ = require('lodash')
```

## 导入带名字的
```
import {map, reduce} from 'lodash'
```

## 导入所有
```
import * as _ from 'lodash'
```

导入所有必须加 `as` 语句。

## 参考
* [ES6 Modules in Depth](https://ponyfoo.com/articles/es6-modules-in-depth)