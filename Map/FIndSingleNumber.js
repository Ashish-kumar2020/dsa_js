/*
    Problem Description : You are given a non-empty array of integers arr, where every element appears twice except for one. Your task is to implement a program that takes the input as an array of integers and returns the element that appears only once.

*/

function findSingleNumber(arr) {
     let hashMap = new Map();
    for(let val of arr){
        if(hashMap.has(val)){
            hashMap.set(val,hashMap.get(val) + 1);
        } else {
            hashMap.set(val,1);
        }
    }
    for(let [count,num] of hashMap){
        if(num === 1){
            return count;
        }
    }
}

console.log(findSingleNumber([1,2,3,2,3,4,4]))