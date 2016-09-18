# [cordova](http://cordova.apache.org/)
[文档](http://cordova.apache.org/docs/en/latest/)

## 安装及环境设置
* 安装 cordova： install -g cordova
* 如果生成 andorid 的 app
  * 安装 JDK：点[这里](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html)。
  * 安装 Android Studio：点[这里](http://developer.android.com/sdk/installing/index.html?pkg=studio) 需翻墙访问。这里包括了 Andorid 的 sdk。

## 操作
* 创建项目： `cordova create 名称`
* 添加平台： ` cordova platform add 平台名称 --save`。平台名称包括 browser,，android，ios 等。会在 platforms 文件夹下生成平台名称的文件夹。 `--save` 会将添加的平台添加到 confg.xml 文件中。
* 添加插件：。`cordova plugin add 插件名称 --save` 。各平台支持对 cordova 的各个插件的支持情况。点[这里](http://cordova.apache.org/docs/en/latest/guide/support/index.html)
* 命令帮助文档： `cordova help`

## 在 android 模拟器中查看
* 在 Android Studio 中打开项目的 platforms/android。platforms/android 是一个 android 项目。
* 在 Android Studio 中点击运行按钮。
* 每次改完 www 下的源码后，执行 `cordova prepare android`
* 重新运行这个 android 应用

## 构建安卓 app
cordova build android。生成的目录apk目录位于 platforms/android/build/outputs/apk 下。

## 在浏览器中预览
* 添加浏览器平台 `cordova platform add browser --save`
* 预览 `cordova run browser`
* 修改后代码，也只需执行 `cordova run browser`


## 目录结构
* www :源码
* platforms : 各平台的代码。不要改这些文件夹下面的文件。这里的部分代码会在构建的时候，从 www 目录下拷贝。
* plugins : 插件。
* config.xml 配置文件。

## 配置
[Config.xml](http://cordova.apache.org/docs/en/latest/config_ref/)
