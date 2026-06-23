/*
    Problem Description
        Write a program to find the peaks in the sequence.

        An element is a peak element if it is greater than its neighbors (a[i] > a[i-1] AND a[i] > a[i+1]).

        For the leftmost element, only check the element to the right of it (a[0] > a[1]). Similarly, for the rightmost element, only check the element to the left of it (a[n-1] > a[n-2]).

        Below is an example, Input: Arr[] = [10,5,6,3,4,8,9,15] Output: [10,6,15]

*/

function peakElement(arr, n) {
    if(n == 0) return arr[0];
  let res = [];
  if (arr[0] > arr[1]) {
    res.push(arr[0]);
  }

  for (let i = 1; i < n -1 ; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      res.push(arr[i]);
    }
  }

  if(arr[n-1] > arr[n-2]){
    res.push(arr[n-1]);
  }
  return res;
}

// const arr = [10,5,6,3,4,8,9,15];
const arr = [4, 2, 3 ,1 ,5 ,6 ,4]
const n = arr.length;
console.log(peakElement(arr,n))
