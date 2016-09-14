# 不定参数和默认参数
## 不定参数
不定参数（也叫可变参数）：一个参数里存任意数量的参数。不定参数的位置只能放在最后。

写法：参数名前加`...`。如
```
var addFn = (...vals) => {
	return vals.reduce((prev, curr)=>{
		return prev + curr;
	}, 0);
}
```

## 默认参数
给函数参数设置默认值，如果不传值的话。写法
```
var defaultParamFn = (name = 'Joel', greet = 'Hello') => {
	console.log('%s, I am %s', greet, name);
}
```