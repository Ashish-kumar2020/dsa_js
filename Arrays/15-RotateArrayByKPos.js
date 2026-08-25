/*
Rotate an Array by K Positions

Problem Statement

Given an array of integers and an integer k, rotate the array to the right by k positions.
*/

function rotateArrayByKPos(arr, k) {
  let res = [];
  k = k % arr.length;
  for (let i = 0; i < k; i++) {
    res.push(arr.pop());
  }
  res.reverse();
  for(let i =0;i < arr.length;i++){
    res.push(arr[i]);
  }
  return res;
}

function rotateArrayByKPosOptimize(arr, k) {
  k = k % arr.length;

  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);

  return arr;
}

function reverse(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}


const arr = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotateArrayByKPosOptimize(arr, k));




