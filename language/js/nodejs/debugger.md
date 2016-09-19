# 使用node-inspector来调试node
## 安装
npm install -g node-inspector
## 启动
* 启动要调试的项目： node --debug 文件名
* 启动node-inspector:node-inspector --web-port=11111  默认监听端口为 8080
* 用chrome浏览器打开 http://127.0.0.1:11111/debug?port=5858 选择文件打断点之类


## 一些选项
```
         Option             Default                  Description
    --help            |                 |   Print information about options
    --web-port        |      8080       |   Port to host the inspector
    --web-host        |    127.0.0.1    |   Host to listen on
    --debug-port      |      5858       |   Port to connect to the debugging app
    --save-live-edit  |      false      |   Save live edit changes to disk (update the edited files)
    --hidden          |       []        |   Array of files to hide from the UI
                      |                 |   Breakpoints in these files will be ignored
```

## 更多
* [node-inspector github](https://github.com/node-inspector/node-inspector)
