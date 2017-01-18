# 浏览器 bug list
* Chrome 的 `<input type="file" accept="image/*">` 打开弹出框会很慢，解决方案，用 `<input type="file" name="imgFile" accept="image/png, image/jpeg, image/gif">` 。