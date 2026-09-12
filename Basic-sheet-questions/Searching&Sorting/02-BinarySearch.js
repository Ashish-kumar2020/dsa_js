/*
Binary Search

Problem Statement - Given a sorted array of integers in ascending order and a target value, find the index of the target element using binary search.

If the target is not present, return -1.

*/

function binarySearch(arr,target){
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2);
        if(arr[mid] === target){
            return mid;
        }else if(target < arr[mid]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return -1;
}
const arr = [1,2,3,4,5,6];
console.log(binarySearch(arr,6))