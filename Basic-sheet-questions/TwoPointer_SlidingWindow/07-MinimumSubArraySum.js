/*
Problem - Minimum Size Subarray with a Given Sum 🔥

Given an array of positive integers and a target sum, find the minimum length of a contiguous subarray whose sum is greater than or equal to the target.

*/

function minimumSizeSubaaryGivenSum(arr, target) {
  let minLength = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let currSum = 0;
    let count = 0;
    for (let j = i; j < arr.length; j++) {
      currSum += arr[j];
      count++;
      if (currSum >= target) {
        minLength = Math.min(minLength, count);
        break;
      }
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

function minimumSizeSubaaryGivenSumOptimize(arr,target){
    let minLength = Infinity;
    let currSum = 0;
    let count = 0;
    let j = 0;
    for(let i = 0;i < arr.length;i++){
        currSum += arr[i];
        count++;
        while(currSum >= target){
            minLength = Math.min(minLength,count);
            count--;
            currSum -= arr[j];
            j++;
        }
        
    }
    return minLength === Infinity ? 0 : minLength;
}

const arr = [2, 3, 1, 2, 4, 3];
const target = 7;
// console.log(minimumSizeSubaaryGivenSum(arr, target));
console.log(minimumSizeSubaaryGivenSumOptimize(arr,target));
