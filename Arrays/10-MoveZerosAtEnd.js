/*
Move All Zeros to the End

Problem Statement :  Given an array of integers, move all 0s to the end of the array while maintaining the relative order of all non-zero elements.

*/

function moveZerosAtEnd(arr) {
  let left = 0;
  let right = 0;
  while (left < arr.length - 1) {
    if (arr[left] === 0) {
      right = left + 1;
      while (right < arr.length && arr[right] === 0) {
        right++;
      }
      if (right === arr.length) break;
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
    left++;
  }
  return arr;
}

function moveZerosAtEndOptimize(arr){
    let right = 0;
    for(let left = 0; left < arr.length;left++){
        if(arr[left] !== 0){
            [arr[left],arr[right]] = [arr[right],arr[left]];
            right++;
        }
    }
    return arr;
}

const arr = [0, 1, 0, 3, 12];
// console.log(moveZerosAtEnd(arr));
console.log(moveZerosAtEndOptimize(arr))
