# [Prettier](https://prettier.io)
Prettier 是格式化代码工具。用来保持团队的项目风格统一。

## 安装
用 `yarn` 安装：
```
yarn add prettier --dev --exact
```

用 `npm` 安装：

```
npm install --save-dev --save-exact prettier
```

## 使用
### 代码变化后，自动进行代码格式化
按如下步骤做：

1 安装检查文件变化的的第三方包: [onchange](https://www.npmjs.com/package/onchange)。

2 在 `package.json` 加如下内容：
```
"scripts": {
  "prettier-watch": "onchange '**/*.js' -- prettier --write {{changed}}"
}
```

### 和 ESLint 配合使用
按如下步骤做：

1 安装第三方包：
```
yarn add eslint-config-prettier eslint-plugin-prettier --dev
```

2 在 `.eslintrc.json` 加如下内容：
```
{
  "extends": ["prettier", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

### 代码提交前，自动进行代码格式化
1 安装第三方包：
```
yarn add pretty-quick husky --dev
```

2 在 `package.json` 加如下内容：
```
{
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged"
    }
  }
}
```

更多代码提交的使用方法见[这里](https://prettier.io/docs/en/precommit.html)。

## 配置规则
在 `.prettierrc.js` 中配置:

```
module.exports = {
  trailingComma: "es5",
  tabWidth: 4,
  semi: false,
  singleQuote: true
}
```

参数说明，见[这里](https://prettier.io/docs/en/options.html)。

推荐用 [prettier-standard](https://github.com/sheerun/prettier-standard) 将代码格式化成
[JavaScript 标准风格](https://github.com/standard/standard/blob/master/docs/README-zhcn.md)。


## 忽略文件
忽略文件, 在 `.prettierrc.js` 中配置
```
node_modules/
```

## 推荐阅读
* [相关项目](https://prettier.io/docs/en/related-projects.html)
* [我为什么推荐Prettier来统一代码风格](https://yq.aliyun.com/articles/694576)