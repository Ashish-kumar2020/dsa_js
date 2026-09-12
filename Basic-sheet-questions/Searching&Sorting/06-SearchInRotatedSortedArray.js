/*
Search in Rotated Sorted Array

Problem Statement

You are given an array that was originally sorted in ascending order but has been rotated at an unknown position.

Find the index of the target using O(log n) time.

If the target does not exist, return -1.

*/

function searchInRotatedSortedArrayBrute(arr,target){
    for(let i =0 ;i < arr.length;i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
};

function searchInRotatedSortedArrayOptimize(arr,target){
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        let mid = Math.floor(left + (right - left)/2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[left] <= arr[mid]){
            if(arr[left] <= target && target < arr[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
           if(arr[mid] < target && target <= arr[right]){
                left = mid + 1;
           }else{
            right = mid - 1;
           }
        }
    }
    return -1;
}

const arr = [4, 5, 6, 7, 0, 1, 2];
const target = 7;
// console.log(searchInRotatedSortedArrayBrute(arr,target));
console.log(searchInRotatedSortedArrayOptimize(arr,target));