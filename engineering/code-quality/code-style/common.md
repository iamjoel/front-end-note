# 通用规范
## 不要提交注释掉的代码
如
```
function foo(bar) {
  const baz = bar(false)
  // we no longer do this for some good reason
  // if (baz === 'foobar') {
  // return baz
  // } else {
  // return bar.foobar()
  // }
  return baz
}
```

我们提交这样的代码，可能是出于这代码以后可能会被用到的考虑。但有如下缺点
* 这对协同者来说，会有很多这会造成疑惑
* 让重要的代码变的不明显,如
```
// dozens
// of
// lines
// of
// commented
// code
someImportantCode()
// dozens
// of
// more
// lines
// of
// commented
// code
```

了解更多细节见[这里](https://medium.com/@kentcdodds/please-don-t-commit-commented-out-code-53d0b5b26d5f#.6t6ep47pq)

