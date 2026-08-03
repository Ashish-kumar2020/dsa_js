

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
    // Inorder Traversal -> left subtree, Node, right subtree
    inorderTraversal(node,res){
        if(node === null) return;
        this.inorderTraversal(node.left,res);
        res.push(node.data);
        this.inorderTraversal(node.right,res);
    }
    // Preorder Traversal -> node -> left subtree -> right subtree
    preOrderTraversal(node,res){
        if(node === null) return;
        res.push(node.data);
        this.preOrderTraversal(node.left,res);
        this.preOrderTraversal(node.right,res);
    }
    // PostOrderTraversal -> left subtree -> right subtree -> node
    postOrderTraversal(node,res){
        if(node === null){
            return;
        }
        this.postOrderTraversal(node.left,res);
        this.postOrderTraversal(node.right,res);
        res.push(node.data);
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);
const res = [];
// root.inorderTraversal(root,res);
// root.preOrderTraversal(root,res);
root.postOrderTraversal(root,res);
console.log(res);