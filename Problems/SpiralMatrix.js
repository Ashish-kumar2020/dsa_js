/*
Problem Description
        Given an integer A, generate a square matrix filled with elements from 1 to A*A in spiral order. The spiral order will be clockwise in nature starting from (0,0)

        Input format
        One line of input, containing a single integer A.


*/

function spiralMatrixII(n) {
    // implement this function
    let mat = [];
    for(let i = 0; i < n;i++){
        let arr = new Array(n).fill(0);
        mat.push(arr);
    }
    let left = 0;
    let top = 0;
    let bottom = n-1;
    let right = n-1;

    let count = 1;
    while(count <= n*n ){
        for(let i = left; i <=right;i++){
            mat[top][i] = count;
            count = count+1;
            
        }
        top++;


         for(let i = top; i <=bottom;i++){
            mat[i][right] = count;
            count = count+1;
            
        }
        right--;

         for(let i = right; i >=left;i--){
            mat[bottom][i] = count;
            count = count+1;
            
        }
        bottom--;

         for(let i = bottom; i >=top;i--){
            mat[i][left] = count;
            count = count+1;
            
        }
       left++;
    }
    return mat;
}
