# 数组方法
## 创建
```
var arr = [];
var arr1 = [1,2,3];
```

## 新增
push , 之后加
unshift， 之前加
splice() 中间加

var arr = [1,2,3]
[...arr, 4]
[0, ...arr]
[...arr.slice(0,2), 插入内容, ...arr.slice(2)]

## 删除
splice()
filter()

## 改
arr[index] = 新值 
pop
unshift
arr.map
```
arr = arr.map((item, index) => {
  if(index === 目标下标) {
    return {
      ...item,
      修改内容
    }
  } else {
    return item
  }
})
```

两个数组合并
[...arr1, arr2]
arr1.concat(arr2)

sort 排序

join 数组转字符串

## 查
arr[index]
arr.length
Array.isArray(目标) 是否是数组

forEach
some 有一个满足
every 所有都满足
reduce 

找一个
有没有 [1,3,4].indexOf(3)
find

找多个
filter

## 文档
* [数组文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)



