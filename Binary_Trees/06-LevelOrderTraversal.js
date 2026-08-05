
class Node{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

function levelOrderTraversal(root,level,res){
    if(root === null) return;
    if(res.length <= level) res.push([]);
    res[level].push(root.data)
    levelOrderTraversal(root.left,level+1,res);
    levelOrderTraversal(root.right,level+1,res);
    return res;
}

const root = new Node(5);
root.left = new Node(12);
root.right = new Node(13);

root.left.left = new Node(7);
root.left.right = new Node(14);

root.right.right = new Node(2);

root.left.left.left = new Node(17);
root.left.left.right = new Node(23);

root.left.right.left = new Node(27);
root.left.right.right = new Node(3);

root.right.right.left = new Node(8);
root.right.right.right = new Node(11);

console.log(levelOrderTraversal(root,0,[]));