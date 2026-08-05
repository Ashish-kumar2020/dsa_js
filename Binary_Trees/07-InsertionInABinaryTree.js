class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function insertInABinaryTree(root, data) {
  if (root === null) {
    return new Node(data);
  }

  let q = [];
  q.push(root);
  while (q.length > 0) {
    let curr = q.shift();
    if (curr.left !== null) {
      q.push(curr.left);
    } else {
      curr.left = new Node(data);
      return root;
    }

    if (curr.right !== null) {
      q.push(curr.right);
    } else {
      curr.right = new Node(data);
      return root;
    }
  }
}

function inorder(root) {
  if (root === null) return;
  inorder(root.left);
  console.log(root.data);
  inorder(root.right);
}

let root = new Node(10);
root.left = new Node(11);
root.right = new Node(9);
root.left.left = new Node(7);
root.right.left = new Node(15);
root.right.right = new Node(8);

let key = 12;
root = insertInABinaryTree(root, key);
inorder(root);
