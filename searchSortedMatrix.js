function sortedMatrix(arr, target) {
  let row = 0
  let col = arr[0].length - 1
  while (row <= arr.length && col >= 0) {
    if (arr[row][col] > target) {
      col = col - 1
    } else if (arr[row][col] < target) {
      row = row + 1
    } else {
      return [row, col]
    }
  }
  return [-1, -1]
}
let a = sortedMatrix(
  [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1003],
  ],
  35
)

console.log(a)
