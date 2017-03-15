# 浏览器 bug list
* Chrome 的 `<input type="file" accept="image/*">` 打开弹出框会很慢，解决方案，用 `<input type="file" name="imgFile" accept="image/png, image/jpeg, image/gif">` 。

## angular
### 页面跳转
angular 中一个奇怪的bug：点按钮会执行一些异步操作，最终，会跳页面：
$navigate.go("/xxx")

发现代码执行了上面那行，但页面并没有跳转，也没有报错。如果在那行代码下加一行：
$timeout(function(){})

页面神奇的能跳转了~