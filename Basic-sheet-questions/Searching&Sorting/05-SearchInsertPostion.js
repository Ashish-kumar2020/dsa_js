/*
Search Insert Position

Problem Statement - Given a sorted array of distinct integers and a target value, return the index if the target is found.

If the target is not present, return the index where it should be inserted to maintain sorted order.

*/

function searchInputPositionBrute(arr, target) {
  let n = arr.length - 1;
  for (let i = 0; i <= n; i++) {
    if (arr[i] === target) {
      return i;
    }
    if (arr[i] > target) {
      return i;
    }
  }
  return arr.length;
}

function searchInputPositionOptimize(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if(arr[mid] === target) return mid;
    else if(arr[mid] > target){
        end = mid - 1;
    }else{
        start = mid + 1;
    }
  }
  return start;
}

const arr = [1, 3, 5, 6];

const target = 10;
// console.log(searchInputPositionBrute(arr,target));
console.log(searchInputPositionOptimize(arr, target));
