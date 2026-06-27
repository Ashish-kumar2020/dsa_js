/*
    Problem Description : You are given a list of n integers, and your task is to calculate the number of distinct values in the list.

*/


function distinctNumbersBasic(n,nums) {
    let res = new Set(nums);
    return res.size;
}

console.log(distinctNumbersBasic(5,[2 ,3 ,2 ,2 ,3]))