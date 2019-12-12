# Puppeteer
## 安装
```
npm i puppeteer
```

## API
### 创建|关闭浏览器
```
(async () => {
  const browser = await puppeteer.launch({
    headless: false, // 是否打开浏览器
    slowMo:250
  })

  const page = await browser.newPage()
  await page.goto('跳转地址')
  

  await page.waitForNavigation({
    waitUntil: 'domcontentloaded'
  }) // 等待页面跳转

  await browser.close()

})()
```

### 控制元素
```
page.click('选择器') // 点击
page.type('选择器', '值') // 输入框输入值
```

### 输出
```
// 截屏成图片
await page.screenshot({
  fullPage: true,
  path: downloadPath
})

// 保存为 pdf
await page.pdf({
  path: 'example.pdf',
  format: 'A4'
});
```

### 在页面中插入第三方 JavaScript
在做端到端的测试时，插入 jQuery，方便控制 DOM。

```
await page
    .mainFrame()
    .addScriptTag({
      url: 'https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js'
    })
```

### 对页面中DOM做大量的操作
```
await page.evaluate(() => {
  document.querySelectorAll()
  console.log(`url is ${location.href}`)
})
```