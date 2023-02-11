/* function fibo(n) {
  if (n == 1) {
    return 0
  } else if (n == 2) {
    return 1
  } else {
    return fibo(n - 1) + fibo(n - 2)
  }
} */

function fib(n) {
  let result = {}
  if (n <= 1) {
    return n
  }
  if (n in result) {
    return result[n]
  } else {
    result[n] = fib(n - 1) + fib(n - 2)
  }
  return result[n]
}

let a = fib(6)
console.log(a)
