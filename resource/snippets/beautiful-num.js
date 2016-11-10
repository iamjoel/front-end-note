// 1234567 -> 1,234,567
function beautifulNum(num) {
  if (!num || isNaN(num)) {
    return 0
  }
  var str = num + ''
  var charArr = str.split('').reverse()
  charArr = charArr.map(function(each, index) {
    if (index % 3 === 2) {
      return ',' + each
    } else {
      return each
    }
  })
  var res = charArr.reverse().join('')
  res = res.replace(/^,/, '')
  return res
}
