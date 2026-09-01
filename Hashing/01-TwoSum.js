/*

Problem Statement : Given an array of integers arr and an integer target, return the indices of the two numbers whose sum equals the target.

You may assume that exactly one valid pair exists.

*/

function twoSumBrute(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return -1;
}

function twoSumOptimize(arr, target) {
  let mpp = new Map();

  for (let [i,ele] of arr.entries()) {
    const targetEle = target - ele;
    if (mpp.has(targetEle)) {
      return [mpp.get(targetEle),i];
    } else {
      mpp.set(ele,i);
    }
  }
  return -1;
}

const arr = [2, 3, 4, 5, 6, 7];
// console.log(twoSumBrute(arr, 7));
console.log(twoSumOptimize(arr, 7));
