/*
Problem Description
Given an array nums, you need to find the maximum sum of triplet (nums[i] + nums[j] + nums[k]) such that 0 <= i < j < k and nums[i] < nums[j] < nums[k]. If no such triplet exists print 0.

*/

function getIthIndex(nums, j) {
  let answer = 0;
  for (let i = 0; i < j; i++) {
    if (nums[i] < nums[j]) {
      answer = Math.max(answer, nums[i]);
    }
  }
  return answer;
}

function getKthIndex(nums, j) {
  let answer = 0;
  for (let k = j + 1; k <= nums.length - 1; k++) {
    if (nums[k] > nums[j]) {
      answer = Math.max(answer, nums[k]);
    }
  }
  return answer;
}
function maxSumTriplet(n, nums) {
  let maxSum = 0;
  for (let j = 0; j < nums.length; j++) {
    let ithValue = getIthIndex(nums, j);
    let kthValue = getKthIndex(nums, j);
    if (
      nums[j] + ithValue + kthValue > maxSum &&
      ithValue > 0 &&
      kthValue > 0
    ) {
      maxSum = Math.max(maxSum, nums[j] + ithValue + kthValue);
    }
  }
  return maxSum;
}
