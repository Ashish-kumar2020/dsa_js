/*
Problem - Maximum Sum Subarray of Size K

Given an array and an integer k, find the maximum sum of any contiguous subarray of size k.

*/

function maximumSumSubArrayBrute(arr, k) {
    let maxSum = -Infinity;
    for (let i = 0; i <= arr.length - k; i++) {
        let currSum = 0;
        for (let j = i; j < i + k; j++) {
            currSum += arr[j];
        }
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
}

function maximumSumSubArrayOptimize(arr,k){
    let sum = 0;
    let maxSum = -Infinity;
    let i = 0;
    let j = 0;
    while(j < arr.length){
        sum += arr[j];
        if(j - i + 1 < k){
            j++;
        }else if(j - i + 1 === k){
            maxSum = Math.max(sum,maxSum);
            sum = sum - arr[i];
            i++;
            j++;
        }
    }
    return maxSum;
}

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
// console.log(maximumSumSubArrayBrute(arr, k));
console.log(maximumSumSubArrayOptimize(arr,k));