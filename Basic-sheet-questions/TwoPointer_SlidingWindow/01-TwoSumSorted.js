/*
Problem - Two Sum in a Sorted Array

Given a sorted array and a target, return whether a pair exists whose sum equals the target.

*/

function twoSumSortedBrute(arr,target){
    let mpp = new Map();
    for(let [i,val] of arr.entries()){
        const targetEle = target - val;
        if(mpp.has(targetEle)){
            return true;
        }else{
            mpp.set(val,i)
        }
    }
    return false;
}


function twoSumSortedOptimze(arr,target){
    let left = 0;
    let right = arr.length - 1;

   while(left < right){
        if(arr[left] + arr[right] === target){
            return true;
        }else if(arr[left] + arr[right] < target){
            left++;
        }else{
            right--;
        }
    }
    return false;
} 

const arr = [1, 2, 3, 4, 6, 8];

const target = 100;
// console.log(twoSumSortedBrute(arr,target));
console.log(twoSumSortedOptimze(arr,target));