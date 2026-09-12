/*
Find the Sum of All Elements

Given an array of integers, return the sum of all elements in the array.

*/

function findSumOfElement(arr){
    let sum = 0;
    for(let i = 0;i < arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

const arr = [1,2,3,4,10,40,2];
console.log(findSumOfElement(arr))