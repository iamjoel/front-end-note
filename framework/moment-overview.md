# Moment.js  写法示例
[Moment.js](http://momentjs.com/) 是一个操作时间的工具库。它使得操作时间更简单。

## 创建
```
moment() // 当前时间
moment("1995-12-25") // 1995-12-25
moment("12-25-1995", "MM-DD-YYYY") // 1995-12-25
moment({ year :2010, month :3, day :5, hour :15, minute :10, second :3, millisecond :123})
moment(Date.now() - 24 * 60 * 60 * 1000) // 昨天
moment(new Date(2011, 9, 16)) // 2011-10-16
```

## 格式化
```
moment().format('YYYY年MM月DD日 HH:mm:ss') // 2016年11月11日 22:05:19
moment().format('hh:m:ss') // 10:5:19
```

## 转化成 Date 对象
```
moment().toDate()
```

## 获取/设置时间信息
```
moment().second() //获得 秒
moment().second(Number) //设置 秒。0 到 59
moment().minute() //获得 分
moment().minute(Number) //设置 分。0 到 59
// 类似的用法
moment().hour() // 小时
moment().date() // 一个月里的第几天
moment().day() // 星期几
moment().dayOfYear() // 一年里的第几天
moment().week() // 一年里的第几周
moment().month() // 第几个月
moment().quarter() // 一年里的第几个季度
moment().year() // 年
```

## 操作
```
moment().add(7, 'days') // 之后的第7天。第2个参数还可以是 'months', 'years' 等。注意是复数。
moment().add(7, 'd'）// 与上面一行代码的运行结果一样。
moment().subtract(1, 'months') // 上个月

moment().startOf('week') // 这周的第一天
moment().startOf('hour') // 等效与 moment().minutes(0).seconds(0).milliseconds(0)。
// 还支持 'year'，'month' 等

moment().endOf('week')
```

## 查询
```
moment('2010-10-20').isBefore('2010-10-21') // true
moment('2010-10-20').isBefore('2010-12-31', 'year') // false
moment('2010-10-20').isBefore('2011-01-01', 'year') // true

moment('2010-10-20').isSame('2010-10-20') // true
moment('2010-10-20').isSame('2009-12-31', 'year')  // false
moment('2010-10-20').isSame('2010-01-01', 'year')  // true

moment('2010-10-20').isAfter('2010-10-19') // true
moment('2010-10-20').isAfter('2010-01-01', 'year') // false
moment('2010-10-20').isAfter('2009-12-31', 'year') // true

// 在时间范围内
moment('2010-10-20').isBetween('2010-10-19', '2010-10-25') // true
moment('2010-10-20').isBetween('2010-01-01', '2012-01-01', 'year') // false
moment('2010-10-20').isBetween('2009-12-31', '2012-01-01', 'year') // true

moment().isLeapYear() // 是否是闰年

```