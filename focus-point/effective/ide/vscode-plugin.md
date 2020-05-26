# VSCode 插件
## 外观
* 配色(Color Theme): Monokai。 VScode 内置。
* 文件类型图标: [VSCode Great Icons](https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons)

所有外观配置
```json
{
    "explorer.confirmDragAndDrop": false,
    "editor.minimap.enabled": false,
    "workbench.iconTheme": "vscode-great-icons",
    "editor.fontFamily": "'Fira Code',Menlo, Monaco, 'Courier New', monospace",
    "editor.fontLigatures": true, // 开启连字
    "workbench.colorTheme": "Monokai"
}
```

## 代码片段
* [Javascript (ES6) Code Snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) 常用的类声明、ES 模块声明、CMD 模块导入等。
* [Javascript Patterns Snippets](https://marketplace.visualstudio.com/items?itemName=nikhilkumar80.js-patterns-snippets) 常用的编码模式，比如 IIFE。

## 自动补全
* [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) 在修改标签名时，自动会修改与之匹配的结束标签名。
* [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion&ssr=false) CSS 类名补全，会自动扫描整个项目里面的 CSS 类名并在你输入类名时做智能提示。
* [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense) 引用任何 node_modules 下的依赖包时提供智能提示和自动补全。
* [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) 文件路径提供智能提示和自动补全。
* [React PropTypes Intellisense](https://marketplace.visualstudio.com/items?itemName=OfHumanBondage.react-proptypes-intellisense) 写组件属性时，根据组件定义的 PropTypes 提供提示和自动补全。

## 功能增强
* [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) 给配对的括号标记上不同的颜色。在括号使用非常多的情况下能缓解眼部压力。
* [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager) 方便的在项目面板中切换项目。


## 参考
* [能让你开发效率翻倍的 VSCode 插件配置（上）](https://juejin.im/post/5a08d1d6f265da430f31950e)
