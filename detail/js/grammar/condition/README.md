# 条件
## if...else
```
if(判断条件){
  
} else if(判断条件) {
  
} else if(判断条件) {
  
} else {
  
}
```

如
```
if(score > 90){
  console.log('A');
} else if(score > 80) {
  console.log('B');
} else if(score > 70) {
  console.log('C');
} else {
  console.log('D');
}
```

## switch
```
switch (expression) {
  case value1:
    [break;]
  case value2:
    [break;]
  ...
  case valueN:
    [break;]
  default:
    [break;]
}
```

如
```
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + expr + ".");
}
```
