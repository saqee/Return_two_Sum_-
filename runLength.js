function runLength(str) {
  let data = []
  let n = str.length
  for (let i = 0; i < str.length; i++) {
    let count = 1
    while (i < n - 1 && str[i] == str[i + 1]) {
      count++
      i++
    }
    data.push(str[i])
    data.push(count)
  }
  return data
}

let a = runLength("wwwwaaadexxxxxxywww")
console.log(a)
