class Node {
  constructor(root) {
    this.root = root
    this.left = null
    this.right = null
  }
}

function nodeDepth(root) {
  let sum = 0
  let stack = [{ node: root, depth: 0 }]
  while (stack.length > 0) {
    let { node, depth } = stack.pop()
    if (node == null) {
      continue
    }
    sum += depth
    stack.push({ node: root.left, depth: depth + 1 })
    stack.push({ node: root.right, depth: depth + 1 })
  }
  return sum
}

/* function calculateDepth(node, depth = 0) {
  if (!node) {
    return 0
  }
  return (depth +=
    calculateDepth(node.left, depth + 1) +
    calculateDepth(node.right, depth + 1))
} */

let tree = new Node(1)
tree.left = new Node(2)
tree.right = new Node(3)
tree.left.left = new Node(4)
tree.left.right = new Node(5)

let a = nodeDepth(tree)
console.log(a)
