/*
    Problem - Find Maximum Depth of a Binary Tree
      
       1
      / \
     2   3
    / \
   4   5

*/

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }

  maxDepth(root) {
    if (root === null) return 0;
    let leftCount = this.maxDepth(root.left);
    let rightCount = this.maxDepth(root.right);
    return Math.max(leftCount,rightCount) + 1;
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

console.log(root.maxDepth(root, 0));
