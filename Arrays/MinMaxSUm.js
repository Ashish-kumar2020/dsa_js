/*
    Problem Description
    Given an array of integers, write a program to find the sum of the minimum and maximum values of the array.

*/
function minMaxArray(N, arr) {
  let minVal = Infinity;
  let maxVal = -Infinity;
  for (let i = 0; i < N; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
  }
  // console.log(minVal,maxVal)
  return maxVal + minVal;
}

const arr = [10, 15, 4, 5, 19];
const N = arr.length;
console.log(minMaxArray(N, arr));
