/*
    Problem Description : Partitioning an array means to split an array along an element, such that it divides the array into two parts with some specific property. The element that partitions the array is called the partitioning element.

Given an array, find the element, partitioning along which, the sum of elements to its left, equals the sum of elements to its right. The partition element itself is to be excluded from both sums.

Return the index of the partitioning element. If no such element exists, return -1.


*/

function equalPartition(n, arr) {
  let suffEle = [];
  let preEle = [];
  preEle[0] = arr[0];
  suffEle[n - 1] = arr[n - 1];

  for (let i = 1; i < n; i++) {
    preEle[i] = preEle[i - 1] + arr[i];
  }

  for (let i = n - 2; i >= 0; i--) {
    suffEle[i] = suffEle[i + 1] + arr[i];
  }

  for (let i = 0; i < n; i++) {
    if (preEle[i] === suffEle[i]) {
      return i;
    }
  }
  return -1;
}
