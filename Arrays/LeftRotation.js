/*
    Problem Description
        You are given a array of numbers. Your task is to rotate the given array left(anti-clockwise) by 1 units from the starting index. You are required to return the rotated array.

*/


function leftRotation(arr) {
   
    let temp = arr[0];
    for(let i = 0; i < arr.length - 1;i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length - 1] = temp;
    return arr;
}

const arr = [1 ,2, 3, 4, 5]
console.log(leftRotation(arr))