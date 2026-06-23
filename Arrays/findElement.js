/*
    Problem Description: 
        Given an array of n elements and an integer x, find the index where x is present in the array. If there are multiple occurrences, find the leftmost one. If x is not present, return -1.
*/

function findElement(n, arr, x) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}

const arr = [1, 3, 4, 2, 1];
const x = 4;
const n = arr.length;
console.log(findElement(n, arr, x));
