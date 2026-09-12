/*
Problem - Check if a Binary Tree is Balanced

A binary tree is balanced if, for every node, the height difference between its left and right subtrees is at most 1.

*/

function checkHeight(node){
    if(node === null) return 0;
    let leftCheck = checkHeight(node.left);
    if(leftCheck === -1) return -1;
    let rightCheck = checkHeight(node.right);
    if(rightCheck === -1) return -1;
    if(Math.abs(leftCheck - rightCheck) > 1){
        return -1;
    } 
    return Math.max(leftCheck,rightCheck) + 1;
}


function isBalanced(root) {
   return checkHeight(root) !== -1;
}