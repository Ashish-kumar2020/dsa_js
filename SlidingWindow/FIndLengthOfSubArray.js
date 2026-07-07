/*
Given an array containing N positive integers and an integer K. Your task is to find the length of the longest Sub-Array with sum of the elements equal to the given value K.

For Input:
1
7 5
4 1 1 1 2 3 5
your output is: 
4 . 


*/

function findLengthOfSubArray(arr, k) {
  let i = 0;
  let j = 0;
  let maxCount = 0;
  let sum = 0;
  while (j < arr.length) {
    sum += arr[j];

    while (sum > k) {
      sum -= arr[i];
      i++;
    }

    if (sum === k) {
      maxCount = Math.max(maxCount, j - i + 1);
    }
    j++;
  }
  return maxCount;
}

const arr = [4, 1, 1, 1, 2, 3, 5];
const sum = 5;

console.log(findLengthOfSubArray(arr, sum));
