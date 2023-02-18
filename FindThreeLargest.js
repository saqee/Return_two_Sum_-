function findThree(arr) {
  let threeLargest = [0, 0, 0]
  for (let num of arr) {
    updateLargest(threeLargest, num)
  }
  return threeLargest
}

function updateLargest(three, num) {
  if (three[2] == 0 || three[2] < num) {
    shiftAndUpdate(three, num, 2)
  } else if (three[1] == 0 || three[1] < num) {
    shiftAndUpdate(three, num, 1)
  } else if (three[0] == 0 || three[0] < num) {
    shiftAndUpdate(three, num, 0)
  }
}

function shiftAndUpdate(arr, num, idx) {
  for (let i = 0; i < idx + 1; i++) {
    console.log("i", i)
    if (i == idx) {
      arr[i] = num
      console.log("num", arr[i])
    } else {
      arr[i] = arr[i + 1]
      console.log("arr[i]=>", arr[i], "i+1->", arr[i + 1])
    }
  }
}

let a = findThree([141, 1, 17, -7, -27, 18, 541, 8, 7, 7])
console.log(a)
