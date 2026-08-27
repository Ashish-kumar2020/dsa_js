/*
Find the Last Occurrence of an Element

Problem Statement - Given a sorted array that may contain duplicate elements and a target value, find the index of the last occurrence of the target using binary search.

If the target is not present, return -1.

*/

function lastOccuranceBrute(arr,target){
    let n = arr.length - 1;
    for(let i = n;i >=0;i--){
        if(arr[i] === target) return i;
    }
    return -1;
}

function lastOccuranceOptimze(arr,target){
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] === target){
            if(arr[mid + 1] === target){
                start = mid + 1;
            }else{
                return mid;
            }
        }else if(target < arr[mid]){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}

const arr = [2, 2, 2, 2, 3, 4]

const target = 20;
// console.log(lastOccuranceBrute(arr,target));
console.log(lastOccuranceOptimze(arr,target));