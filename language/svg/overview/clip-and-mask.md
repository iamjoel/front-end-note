# 剪切和遮罩
## 剪切
只显示制定范围内的内容。下面的代码只显示上半个圆。

```
<defs>
    <clipPath id="cut-off-bottom">
      <rect x="0" y="0" width="200" height="100" />
    </clipPath>
  </defs>

<circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" />
```

