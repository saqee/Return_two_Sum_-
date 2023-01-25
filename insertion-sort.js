function inertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i
    while (j > 0 && arr[j] < arr[j - 1]) {
      let temp = arr[j]
      arr[j] = arr[j - 1]
      arr[j - 1] = temp
      j--
    }
  }
  return arr
}

let a = inertionSort([12, 11, 13, 5, 6])
console.log(a)
