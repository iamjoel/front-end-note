// serializationDoThing(['a', 'b', 'c']).then(() => {
//   console.log('done')
// })
// 如何传递 resolve 的可能需要全局，或传入一个数组的方式来做。

function serializationDoThing(arr) {
  var currDo = doThing(arr[0])
  if (arr.length > 1) {
    arr = arr.slice(1)
    arr.forEach(item => {
      currDo = currDo.then(() => {
        return doThing(item)
      })
    })
  }

  function doThing(item) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // debugger
        resolve(item + ':done')
        console.log(item)
      }, 10)
    })
  }
  return currDo
}
