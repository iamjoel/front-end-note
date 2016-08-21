# [ESLint](http://eslint.org/)
ESLint 是用来检查我们写的 JavaScript 代码是否满足指定规则的静态代码检查工具。

通过用 ESLint 来检查一些规则，我们可以：
*  统一代码风格规则，如：代码缩进用几个空格；是否用驼峰命名法来命名变量和函数名等。
* 减少错误， 如：相等比较必须用 `===` ，变量在使用前必须被声明，在条件语句中不能使用赋值语句等。
* 提高代码质量，如：函数最多有多少条件分支；最多有几个参数，代码块最多能嵌套多少层等。
* 其他。如： 禁用 alert。这可以提高用户体验，因为 alert 框的外观不是那么好看，而且往往与网站的风格不搭，一般都会自定义 alert 框。

JSHint 和 JSLint 也是静态代码检查工具，但 ESLint 比它们功能强大也更灵活。

ESLint 是用 Node.js 写的，可以通过 npm 来安装。ESLint 也可以在 webpack(eslint-loader) 和 Gulp.js(gulp-eslint) 中使用。

## 在 webpack 中使用 ESlint
1 安装 ESLint 的依赖。
```
npm install  --save-dev eslint eslint-loader
```

2 在 webpack.config.js 加
```
module: {
  preLoaders: [
    {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
  ]
}
```

3 新建名为 `.eslintrc` 的文件。该文件的内容为对 ESLint 的配置。内容类似如下
```
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6
  },
  "rules": {
    "indent": ["error", 2],
    "no-mixed-spaces-and-tabs": "error"
    "camelcase": "error",
    "eqeqeq": "warn",
    "curly": "error",
    "no-undef": "error",
    "no-unused-vars": "warn",
    "max-params": "warn"
  }
}
```

其中
* env 指定代码运行的环境。
* parserOptions 指定 JavaScript 相关的选项。ecmaVersion 指定用哪个 ECMAScript 的版本，默认是 3 和 5。
* rules 指定具体检查的规则。默认情况下，如果不设置检查的规则，ESLint 不会检查任何规则。

更详细的说明见[官网的说明](http://eslint.org/docs/user-guide/configuring)。


## 验证规则
验证规则是写在 `.eslintrc` 文件中的 `rules` 下面的，如
```
"rules": {
  "indent": ["error", 2],
  "no-mixed-spaces-and-tabs": "error"
  "camelcase": "error"
}
```

配置一条验证规则，这么写
```
规则名: 值
```

值可以是以下几种
* `off` 或 0：表示不验证规则。
* `warn` 或 1：表示验证规则，当不满足时，给警告。
* `error` 或 2 ：表示验证规则，不满足时报错。

如
```
"eqeqeq": "error",
"camelcase": 2
```

如果规则有参数，则这么写
```
规则名: [值, 参数1, 参数2...]
```

如
```
"indent": ["error", 2]

```

### 常见规则
* indent： 代码缩进。参数有
  * 数字: 表示缩进的空格数。如 `indent: ["error", 2]`。默认值是4。
  * "tab": 表示用 `tab` 来缩进
* no-mixed-spaces-and-tabs： 代码缩进不能混用空格和`tab`。
* camelcase： 变量，函数名遵循驼峰命名法。参数有
  * "always": 会检查属性名。是默认值。
  * "never": 不检查属性名。
* quotes： 字符串的引号。我用配置是 `quotes: ["error", "single"]`。具体见[这里](http://eslint.org/docs/rules/quotes)。
* curly： 在 `if`，`else if`，`else` 或 `while` 的代码块中，即使只有一行代码，也要用写在 `{}` 中。
* eqeqeq： 比较用 `===` 或 `!==`。
* no-cond-assign： 不在 if 中使用赋值操作。
* no-undef： 变量和函数在使用前必须先声明。全局变量或函数除外。
* no-unused-vars：变量定义后会一定要被使用。
* no-alert： 代码不用 alert,confirm 和 prompt。系统的弹出框比较丑，一般都用自定义的弹出框。
* max-params： 函数最多有几个参数。默认是3个。
* max-statements： 函数最多有多少条语句。
* max-depth：代码块中默认嵌套深度。

更多的规则见[官网的说明](http://eslint.org/docs/rules/)。

如果觉得自己一条配置规则太麻烦，可以在 eslint 的默认推荐规则上做修改，如
```
"extends": "eslint:recommended",// 启用 eslint 的默认推荐规
"rules": {
    // 新增的一些规则
    "indent": ["error", 4],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],

    // 覆盖一些规则的配置
    "comma-dangle": ["error", "always"],
    "no-cond-assign": ["error", "always"],

    // 禁用一些规则
    "no-console": "off",
}
```

也可以在别人写好的一堆规则上修改
* [JavaScript Standard Style](https://github.com/feross/eslint-config-standard)
* [Google Style](https://github.com/google/eslint-config-google)
* [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
* [Shopify](https://github.com/Shopify/javascript/tree/master/packages/eslint-plugin-shopify)
* [XO](https://github.com/sindresorhus/eslint-config-xo)

## 推荐阅读
* [Awesome ESLint](https://github.com/dustinspecker/awesome-eslint)
