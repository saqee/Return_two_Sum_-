function powerset(arr) {
  let subset = [[]]
  for (let ele in arr) {
    ele = parseInt(ele) + 1
    for (let j in subset) {
      let current = subset[j]
      subset.push(current + ele)
    }
  }
  return subset
}
let a = powerset([1, 2, 3])
console.log(a)
