/*
    Problem Description
            Given an array, find a non-empty contiguous subarray with the largest sum.

            Input format
            There are 2 lines of input.

            First line contains N, the number of elements in the array.

            Second line contains N space separated numbers, representing the array elements.

*/


function contigiousSequence(n, arr) {
    let maxSum = arr[0];
    let sum = arr[0];
    for(let i = 1; i < n;i++){
        sum = Math.max(arr[i],sum+arr[i]);
        maxSum = Math.max(maxSum,sum);
    }
    return maxSum;
}