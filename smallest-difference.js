function smallestDiff(arr1, arr2) {
  arr1.sort((a, b) => {
    return a - b
  })
  arr2.sort((a, b) => {
    return a - b
  })
  let idxOne = 0
  let idxTwo = 0
  let smallest = Infinity
  let current = Infinity
  let smallestPair = []
  while (idxOne < arr1.length && idxTwo < arr2.length) {
    let firstNum = arr1[idxOne]
    let secondNum = arr2[idxTwo]
    if (firstNum < secondNum) {
      current = Math.abs(secondNum - firstNum)
      idxOne++
    } else if (secondNum < firstNum) {
      current = Math.abs(firstNum - secondNum)
      idxTwo++
    } else {
      return [firstNum, secondNum]
    }
    if (smallest > current) {
      smallest = current
      smallestPair = [firstNum, secondNum]
    }
  }
  return smallestPair
}
let a = smallestDiff([-1, 3, 5, 10, 20, 28], [15, 17, 26, 134, 135])
console.log(a)
