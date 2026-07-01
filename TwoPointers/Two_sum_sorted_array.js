/*
    Problem Description : Given a sorted array of integers and a target, find if there’s a pair of elements that add up to the target. Return true if such a pair can be found, and false otherwise.


*/



function twoSumInSortedArray(n, arr, target_sum) {
    for(let i = 0;i < n-1;i++){
        for(let j=i+1;j < n;j++){
            if(arr[i] + arr[j] === target_sum){
                return true;
            }
        }
    }
    return false;
}

function twoSumInSortedArrayOptimize(n, arr, target_sum) {
    let l =0;
    let r = n - 1;
    while(l <= r){
        if(arr[l] + arr[r] === target_sum){
            return true;
        } else if(arr[l] + arr[r] < target_sum){
            l++;
        } else{
            r--;
        }
    }
    return false;
}
const arr = [2,4,5,8,9];
const n = arr.length;
const target = 7
console.log(twoSumInSortedArrayOptimize(n,arr,target))