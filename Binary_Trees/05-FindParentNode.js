class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}


function findParent(root,target,parent){
    if(root === null) return -1;

    if(root.data === target) return parent;
    let searchLeft = findParent(root.left,target,root.data);
    
    if(searchLeft !== -1){
        return searchLeft
    }
    return findParent(root.right,target,root.data);
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

let target = 5;

let parent = findParent(root, target, -1);
console.log(parent);