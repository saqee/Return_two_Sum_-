function threeSum(arrayValue, targetValue) {
  let triplets = []
  for (let i = 0; i < arrayValue.length - 2; i++) {
    let left = i + 1
    let right = arrayValue.length - 1
    while (left < right) {
      let currentSum = arrayValue[i] + arrayValue[left] + arrayValue[right]
      if (currentSum == targetValue) {
        triplets.push([arrayValue[i], arrayValue[left], arrayValue[right]])
        left += 1
        right -= 1
      } else if (currentSum < targetValue) {
        left += 1
      } else {
        right -= 1
      }
    }
  }
  return triplets
}

let a = threeSum([-8, -6, 1, 2, 3, 5, 6, 12], 0)
console.log(a)
