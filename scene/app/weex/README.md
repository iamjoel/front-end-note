# [Weex](https://weex.apache.org/cn/)
> Weex 遵循 Web 标准，同时支持 vue.js 的语法。因此，您可以使用 vue.js 语法来开发应用程序。

用 [CocoaPods](https://guides.cocoapods.org/using/getting-started.html) 来装xcode项目的依赖。

## 工具
* [eros template](https://github.com/bmfe/eros-template) weex 的脚手架。

## 坑
如果输入 `weex run ios` 报下面的错：`xcrun: error: unable to find utility "instruments", not a developer tool or in PATH` 。

解决方案：打开 Xcode，在 Preferences > Locations 选择 Command Line Tools 。

