/*
Find the Duplicate Number

Problem Statement:
Given an array of n + 1 integers where each integer is in the range 1 to n, find the duplicate number. There is exactly one repeated number, but it may appear more than twice.

*/

function findDuplicateNumber(arr) {
  let mpp = new Map();
  for (let val of arr) {
    if (mpp.has(val)) {
      mpp.set(val, mpp.get(val) + 1);
    } else {
      mpp.set(val, 1);
    }
  }
  // return mpp;
  for (const [key, val] of mpp) {
    if (val >= 2) {
      return key;
    }
  }
}

const arr = [1, 3, 4, 2, 2];
console.log(findDuplicateNumber(arr));
