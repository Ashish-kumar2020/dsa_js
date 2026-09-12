/*
Find Minimum in Rotated Sorted Array


Problem Given a sorted array rotated at an unknown position, find the minimum element.

You must solve it using binary search.

*/

function findMinimumInRoatedSortedArrayBrute(arr){
    let minEle = Infinity;
    for(let i = 0;i < arr.length;i++){
        minEle = Math.min(minEle,arr[i]);
    }
    return minEle;
}

function findMinimumInRoatedSortedArrayOptimize(arr){
    let left = 0;
    let right = arr.length - 1;
    let minEle = Infinity;
    while(left < right){
        let mid = Math.floor(left + (right - left)/2);
        if(arr[mid] > arr[right]){
            left = mid + 1;
        }else {
            right = mid ;
        }
    }
    return arr[left];
}

// const arr = [4,5,6,0,1,2];
const arr = [3, 1, 2];
console.log(findMinimumInRoatedSortedArrayOptimize(arr));
