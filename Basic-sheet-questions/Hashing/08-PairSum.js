/*

Find Pairs with a Given Sum

Given an array and a target, return all unique pairs whose sum equals the target.
*/

function pairSum(arr, target) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        let allIdentical = res.some(([a,b]) => (a === arr[i] && b === arr[j]) || (a === arr[j] && b === arr[i]))
        if (!allIdentical) {
          res.push([arr[i], arr[j]]);
        }
      }
    }
  }
  return res;
}
function pairSumOptimize(arr, target) {
    let seen = new Set();
    let uniquePairs = new Set();
    let res = [];

    for (let ele of arr) {
        let complement = target - ele;

        if (seen.has(complement)) {
            // Keep pair in consistent order
            let first = Math.min(ele, complement);
            let second = Math.max(ele, complement);

            // Create a unique key for the pair
            let pairKey = `${first},${second}`;

            if (!uniquePairs.has(pairKey)) {
                uniquePairs.add(pairKey);
                res.push([first, second]);
            }
        }

        seen.add(ele);
    }

    return res;
}

const arr = [1, 2, 3, 4, 5, 2];
const target = 6;

console.log(pairSumOptimize(arr, target));
// [[2, 4], [1, 5]]