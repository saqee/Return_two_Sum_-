function shiftedBinary(arr, target) {
  return binaryHelper(arr, target, 0, arr.length - 1)
}

function binaryHelper(arr, target, left, right) {
  if (left > right) {
    return -1
  }
  let middle = Math.floor((left + right) / 2)
  let potentialMatch = arr[middle]
  if (target == potentialMatch) {
    return middle
  } else if (arr[left] <= arr[middle]) {
    if (target < potentialMatch && target >= arr[left]) {
      return binaryHelper(arr, target, left, middle - 1)
    } else {
      return binaryHelper(arr, target, middle + 1, right)
    }
  } else {
    if (target > potentialMatch && target <= arr[right]) {
      return binaryHelper(arr, target, middle + 1, right)
    } else {
      return binaryHelper(arr, target, left, middle - 1)
    }
  }
}

let a = shiftedBinary([45, 61, 71, 72, 73, 0, 1, 5, 44, 55], 72)
console.log(a)
