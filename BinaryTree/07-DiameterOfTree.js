/*
    Problem - Find the Diameter of a Binary Tree
    The diameter is the number of edges in the longest path between any two nodes in the tree.

*/


// TC: O(n²)
// SC: O(h)

function checkHeightBrute(node) {
    if (node === null) return 0;

    let leftCheck = checkHeightBrute(node.left);
    let rightCheck = checkHeightBrute(node.right);

    return Math.max(leftCheck, rightCheck) + 1;
}

function diameterBrute(root) {
    if (root === null) return 0;

    let leftCount = checkHeightBrute(root.left);
    let rightCount = checkHeightBrute(root.right);

    return Math.max(
        leftCount + rightCount,
        diameterBrute(root.left),
        diameterBrute(root.right)
    );
}

// TC - O(n)
// SC - O(h)

function checkHeight(node,maxVal){
    if(node === null) return 0;
    let leftCheck = checkHeight(node.left,maxVal);
    let rightCheck = checkHeight(node.right,maxVal);
    maxVal[0] = Math.max(maxVal[0],leftCheck + rightCheck);
    return Math.max(leftCheck , rightCheck) + 1;
}

function diameter(root) {
   let maxVal = [0];
   checkHeight(root,maxVal);
   return maxVal[0];
}