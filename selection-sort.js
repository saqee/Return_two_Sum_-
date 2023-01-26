function selectionSort(array) {
  let selection = []
  for (let i = 0; i < array.length; i++) {
    let smallest = array[i]
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < smallest) {
        smallest = array[j]
        let temp = array[i]
        array[j] = temp
        array[i] = smallest
      } else {
        array[i] = smallest
      }
    }
  }
  return array
}
let a = selectionSort([2, 8, 5, 9, 3])
console.log(a)
