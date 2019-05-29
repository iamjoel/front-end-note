# 百度统计

## 单页应用统计如何统计PV
### History API 模式
百度统计支持`History API`，不支持`hashchange`。在`百度统计>管理>单页应用`设置中，打开开启按钮即可对SPA进行统计。

### hash 模式
在每次hash变化时，加`PV`。如果用的是 `vue-router`，代码这么写:

```
// 用户访问一个安装了百度统计代码的页面时，不自动发送PV的统计请求
_hmt.push(['_setAutoPageview', false]) 
router.beforeEach((to, from, next) => {
    _hmt.push(['_trackPageview', `/wechat${to.path}`]) // SPA页面加PV
})
```