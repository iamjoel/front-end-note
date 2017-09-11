# 使用注意点
## 控制 el-dialog 的显示隐藏
如果，显示 dialog 用`this.$refs.dialog.open()` 在有的浏览器上不显示，用 `:visible.sync="value"` 就没问题。