# React 和 Vue
## 相似点
* Virtual DOM
* 组件化

## 不同点
### 模板语言 VS JSX
声名数据与UI的关系，Vue 是用的是模板语言。React 是 JSX。

JSX 除了创建元素这块有点特别，别的都是 JS 操作。如
```
constructor(props) {
  super(props)
  this.state = {list: [{value:1}, {value:2}]}
}
render() {
  return (
    <ul>
      {this.state.list.length > 0 && this.state.list.map(item => <li key={item.value}> {item.value}</li>)}
     </ul>
  )
```

相对学习成本低。

对应 Vue
```
<templte>
<ul>
  <li v-if="list.length>0" v-for="item in list" :key="item.value">{{item.value}}</li>
<ul>
</template>

<script>
export default {
  data() {
    return {
      list: [{value:1}, {value:2}]
    }
  }
}
</script>
```

劣势是要学一些模板语言的语法，v-for,v-if, v-model 等。优势是，支持自定义指令(@keyup.enter="xxx")，过滤器等高级特性。

### 生态
React 的新鲜玩意比较多。
