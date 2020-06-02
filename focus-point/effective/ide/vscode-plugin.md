# VSCode 插件
## 外观
* 配色(Color Theme): Monokai。 VScode 内置。
* 文件类型图标: [VSCode Great Icons](https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons)
* [Fira Code](https://github.com/tonsky/FiraCode/wiki/Installing)

所有配置。 在 `setting.json`。
```json
{
    "explorer.confirmDragAndDrop": false,
    "editor.minimap.enabled": false,
    "workbench.iconTheme": "vscode-great-icons",
    "editor.fontFamily": "'Fira Code',Menlo, Monaco, 'Courier New', monospace",
    "editor.fontLigatures": true, // 开启连字
    "workbench.colorTheme": "Monokai",
    "npm.enableScriptExplorer": true, // 能
    "editor.renderControlCharacters": true,
    "editor.renderWhitespace": "all"// 画空格
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
* [CSS Blocks](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-blocks) CSS modules 内容提示及定义的跳转。
* [Document This](https://marketplace.visualstudio.com/items?itemName=joelday.docthis) 给函数、类等自动的加上详细的注释。

## 功能增强
* [Vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) 在 VSCode 中用Vim。
* [Prettier Now](https://marketplace.visualstudio.com/items?itemName=remimarsal.prettier-now) 代码格式化。
* [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) 给配对的括号标记上不同的颜色。在括号使用非常多的情况下能缓解眼部压力。
* [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) 给缩进加不同的一种颜色。
* [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager) 方便的在项目面板中切换项目。
* [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) 看到每行代码的Git提交信息：作者，时间，提交信息。以及一系列的git 操作。可以在 GitLens 面板看到更多的操作。
* [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight) 高亮 TODO， FIXME 之类的标记。注意，TODO、FIXME 之类的后面必须加上冒号。
* [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) 列出代码中所有的TODO。
* [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) 通过命令面板可直接执行代码，并查看输出。
* [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) 识别单词拼写是否有误，并给出提示。

## 其他
* [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) 把插件和配置备份到gist。


## 参考
* [能让你开发效率翻倍的 VSCode 插件配置（上）](https://juejin.im/post/5a08d1d6f265da430f31950e)
* [能让你开发效率翻倍的 VSCode 插件配置（中）](https://juejin.im/post/5ad13d8a6fb9a028ce7c0721)
