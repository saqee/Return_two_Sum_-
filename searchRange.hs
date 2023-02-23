function searchForRange(arr, target) {
  let finalRange = [-1, -1]
  binaryHelper(arr, target, 0, arr.length - 1, finalRange, true)
  binaryHelper(arr, target, 0, arr.length - 1, finalRange, false)
  return finalRange
}

function binaryHelper(arr, target, left, right, finalRange, goLeft) {
  if (left > right) {
    return -1
  }
  let mid = parseInt((left + right) / 2)
  if (arr[mid] < target) {
    binaryHelper(arr, target, mid + 1, right, finalRange, goLeft)
  } else if (arr[mid] > target) {
    binaryHelper(arr, target, left, mid - 1, finalRange, goLeft)
  } else {
    if (goLeft) {
      if (mid == 0 || arr[mid - 1] != target) {
        finalRange[0] = mid
      } else {
        binaryHelper(arr, target, left, mid - 1, finalRange, goLeft)
      }
    } else {
      if (mid == arr.length - 1 || arr[mid + 1] != target) {
        finalRange[1] = mid
      } else {
        binaryHelper(arr, target, mid + 1, right, finalRange, goLeft)
      }
    }
  }
}

let a = searchForRange([0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73], 45)
console.log(a)
