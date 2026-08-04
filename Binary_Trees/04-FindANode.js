

class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

function checkIfNodeExists(root,key){
    if(root === null){
        return false;
    }
    if(root.data === key){
        return true;
    }

    let checkLeftSide = checkIfNodeExists(root.left,key);
    if(checkLeftSide) return true;

    let checkRightSide = checkIfNodeExists(root.right,key);
    return checkRightSide;

}

let root = new Node(0);
root.left = new Node(1);
root.left.left = new Node(3);
root.left.left.left = new Node(7);
root.left.right = new Node(4);
root.left.right.left = new Node(8);
root.left.right.right = new Node(9);
root.right = new Node(2);
root.right.left = new Node(5);
root.right.right = new Node(6);

let key = 40;

if (checkIfNodeExists(root, key))
    console.log("True");
else
    console.log("False");