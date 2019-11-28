# Nuxt.js
## 常见问题
### 有些组件会操作DOM，导致报错的处理。
用 `<no-ssr>` 组件。如
```
<no-ssr placeholder="Loading...">
      <!-- 此组件仅在客户端呈现 -->
  ...
</no-ssr>
```

## 常用链接
* [官网](https://nuxtjs.org/)
* [API](https://nuxtjs.org/api)