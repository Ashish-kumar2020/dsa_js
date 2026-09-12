

class Node{
    constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;
    }

    inorderTraversal(root,res){
        if(root === null) return null;
        this.inorderTraversal(root.left,res);
        res.push(root.data);
        this.inorderTraversal(root.right,res);
    }

    preOrderTraversal(root,res){
        if(root === null) return null;
        res.push(root.data);
        this.preOrderTraversal(root.left,res);
        this.preOrderTraversal(root.right,res);
    }

    postOrderTraversal(root,res){
        if(root === null) return null;
        this.postOrderTraversal(root.left,res);
        this.postOrderTraversal(root.right,res);
        res.push(root.data);
    }
    
    levelOrderTraversal(root,level,res){
        if(root === null) return null;
        if(res.length <= level) res.push([]);
        res[level].push(root.data);
        this.levelOrderTraversal(root.left,level + 1,res);
        this.levelOrderTraversal(root.right,level + 1,res);
        return res;
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
root.levelOrderTraversal(root,0,res);
console.log(res);