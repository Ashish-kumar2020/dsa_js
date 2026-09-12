/*
    Problem - Check if Two Binary Trees Are Identical
    Two binary trees are identical if they have the same structure and the same values at corresponding nodes.

*/

function isIdentical(root1,root2){
    if(root1 === null && root2 === null) return true;
    if(root1 === null || root2 === null) return false;
    if(root1.data !== root2.data) return false;
    let leftSearch = isIdentical(root1.left,root2.left);
    let rightSearch = isIdentical(root1.right,root2.right);
    return (leftSearch && rightSearch)
}