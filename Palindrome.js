/* function isPalindrome(str) {
  let left = 0
  let right = str.length - 1
  while (left < right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
let a = isPalindrome("abcdcba")

console.log(a)

 */

function isPalindrome(str, i = 0) {
  let j = str.length - 1 - i
  if (i >= j) return true
  if (str[i] !== str[j]) return false
  return isPalindrome(str, i + 1)
}

let a = isPalindrome("abcdcba")

console.log(a)
