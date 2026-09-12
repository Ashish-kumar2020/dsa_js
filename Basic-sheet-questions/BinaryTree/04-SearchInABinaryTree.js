/*
    Problem - Search in a Binary Tree
       1
      / \
     2   3
    / \   \
   4   5   6

Write a function that returns true if the given value exists in the tree, otherwise false.
*/

function search(root,value){
    if(root === null) return false;
    if(root.data === value) return true;
    let leftSearch = search(root.left,value);
    let rightSearch = search(root.right,value);
    return leftSearch || rightSearch;
}