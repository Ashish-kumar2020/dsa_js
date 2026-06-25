/*
    Problem Description :  Given a matrix of dimension nxn having elements 1 to nxn distinct elements. Check whether the matrix is magic square or not. Magic square is a square that has the same sum of rows, columns and diagonals.
*/


function checkMagicSquare(n, matrix) {
    let target = 0;
   
    let primaryD1 = 0;
    let secondaryD2 = 0;

    for(let i = 0; i < n;i++){
        target += matrix[0][i];
    }

    for(let i = 0; i < n;i++){
        let currentColSum = 0;
        let currentRowSum = 0;
        for(let j = 0; j < n;j++){
            currentRowSum += matrix[i][j];
            currentColSum += matrix[j][i];
            if(i == j){
                primaryD1 += matrix[i][j];
            }
            if(i + j == n-1){
                secondaryD2 += matrix[i][j]
            }
        }
        if(currentRowSum !== target || currentColSum !== target){
            return false;
        }
    }
        if(primaryD1 !== target || secondaryD2 !== target){
            return false;
        }
    return true;
}

const n = 3;
const matrix = [[4,9,2],[3,5,7],[8,1,6]];
console.log(checkMagicSquare(n,matrix))