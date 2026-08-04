
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

function levelNode(root,target,level){
    if(root === null) return -1;
    if(root.data === target){
        return level;
    }
    let leftSearch = levelNode(root.left,target,level+1);
    if(leftSearch !== -1){
        return leftSearch;
    }
    return levelNode(root.right,target,level + 1);
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const target = 30;
console.log(levelNode(root, target, 1));