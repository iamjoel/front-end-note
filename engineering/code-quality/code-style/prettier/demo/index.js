{
  // if
  var str = 'a'
  if (str.includes('a')) {
    console.log('has a')
  } else if (str.includes('b') > 4) {
    console.log('has b')
  } else {
    console.log('has nothing')
  }

  // loop
  var i = 0
  while (i < 10) {
    i++
  }
  i = 4
  for (var i = 0; i < 5; i++) {
    console.log('xxx')
  }

  // String
  var str2 = `b ${str}
  dddd`

  // Array
  var arr = [1, 2, 3]
  var arrStrs = ['pizza', 'burger', 'pasta']
}
