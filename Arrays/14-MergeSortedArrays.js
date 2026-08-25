/*
Merge Two Sorted Arrays

Problem Statement

Given two arrays that are already sorted in ascending order, merge them into a single sorted array.

*/

function mergeSortedArray(arr1,arr2){
    let left = 0;
    let right = 0;
    let res = [];
    while(left < arr1.length && right < arr2.length){
        if(arr1[left] <= arr2[right]){
            res.push(arr1[left]);
            left++;
        }else{
            res.push(arr2[right]);
            right++;
        }
    }
    while(left <= arr1.length - 1){
        res.push(arr1[left]);
        left++;
    }
    while(right <= arr2.length - 1){
        res.push(arr2[right]);
        right++;
    }
    return res;
}

const arr1 = [1, 3, 5];

const arr2 = [2, 4, 6];

console.log(mergeSortedArray(arr1,arr2))