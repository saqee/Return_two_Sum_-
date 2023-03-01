class BinaryTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function branchSum(root) {
  let sum = []
  calculateSum(root, 0, sum)
  return sum
}

function calculateSum(node, runningSum, sum) {
  if (!node) {
    return
  }
  let updatedSum = runningSum + node.value
  if (!node.left && !node.right) {
    sum.push(updatedSum)
  }
  calculateSum(node.left, updatedSum, sum)
  calculateSum(node.right, updatedSum, sum)
}

let bst = new BinaryTree(1)
bst.left = new BinaryTree(2)
bst.right = new BinaryTree(3)
bst.left.left = new BinaryTree(4)
bst.left.right = new BinaryTree(5)
let a = branchSum(bst)
console.log(a)
