# 循环
在 JavaScript 中循环主要是 while 和 for。

## while
```
while(条件){
  //语句
}
```

如
```
var i = 0;
while(i < 5){
  console.log(i);
  i += 1;
}
```

## for
```
for(初始值;条件;每次循环执行后执行){
  //语句
}
```

如
```
for (var i = 0; i < 5; i++) {
   console.log(i);
}
```

## continue
结束本次循环，进入下一次循环。只能在 for 或 while 中使用。

如
```
for(var i = 0; i < 8; i++){
  if(i % 3 == 0){
    continue;
  }
  console.log(i);
}
```

## break
在 for 或 while 中使用，表示结束循环。
```
for(var i = 1; i < 8; i++){
  if(i % 3 == 0){
    break;
  }
  console.log(i);
}
```
