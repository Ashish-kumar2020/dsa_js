/*
Find the Missing Number

Problem Statement

Given an array containing n distinct numbers from the range 0 to n, find the one number that is missing from the array.

*/

function findMissingNumber(arr){
    let count = arr.length;
    let sumNatural = Math.floor((count * (count + 1))/2);
    let currEleSum = 0;
    for(let i = 0; i < arr.length;i++){
        currEleSum += arr[i];
    }
    return sumNatural - currEleSum;
}
const arr = [9, 6, 4, 2, 3, 5, 7, 0, 1]
console.log(findMissingNumber(arr));