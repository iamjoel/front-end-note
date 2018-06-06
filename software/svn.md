# svn
检出repo代码
```
svn checkout 地址
```

拿最新的代码
```
svn update
```

添加到代码库
```
svn add path
```

删除文件
```
svn delete path
```

提交+推送到服务器
```
svn commit -m '修改代码'
```

解决冲突
```
svn resolved 文件路径
```

ignore 文件
创建 `.svnignore` 文件。然后执行：

```
svn propset svn:ignore -F .svnignore .
```


[更多命令](https://tortoisesvn.net/docs/nightly/TortoiseSVN_en/tsvn-cli-main.html)

