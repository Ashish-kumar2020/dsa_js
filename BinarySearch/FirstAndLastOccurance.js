// Find First and Last Occurance of an elemenet

function firstOccuranceEle(arr, n, target) {
  let start = 0;
  let end = n;
  let firstOccurance = -1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (target === arr[mid]) {
      // return mid;

      firstOccurance = mid;

      end = mid - 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return firstOccurance;
}

function lastOccuranceEle(arr, n, target) {
  let start = 0;
  let end = n;

  let lastOccurance = -1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (target === arr[mid]) {
      // return mid;

      lastOccurance = mid;

      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return lastOccurance;
}


function occurrence(arr, target, findFirst) {
  let start = 0;
  let end = arr.length - 1;
  let ans = -1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === target) {
      ans = mid;

      if (findFirst) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return ans;
}

function firstAndLast(arr, target) {
  return [
    occurrence(arr, target, true),
    occurrence(arr, target, false)
  ];
}

console.log(firstAndLast([1,2,3,4,5,5,5,5,9,10], 5));

// const arr = [1, 2, 3, 5, 5, 5, 5, 5, 9, 10];
// const n = arr.length - 1;
// const target = 5;
// console.log(lastOccuranceEle(arr, n, target));
