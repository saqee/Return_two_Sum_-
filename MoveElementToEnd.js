function moveElement(arr, value) {
  let i = 0
  let j = arr.length - 1

  while (i < j) {
    if (arr[j] == value) {
      j--
    } else {
      if (arr[i] == value) {
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
      if (arr[i] != value) {
        i++
      }
    }
    if (j < i) {
      break
    }
  }
  return arr
}

let a = moveElement([2, 1, 2, 2, 2, 3, 4, 2], 2)
console.log(a)
