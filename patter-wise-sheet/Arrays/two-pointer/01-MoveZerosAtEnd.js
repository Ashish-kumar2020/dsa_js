// Short Notes - Use slow + fast pointers where fast scans the array and slow tracks the position where the next non-zero element should go. When fast finds a non-zero element, swap it with slow and increment slow.

/*
    Pattern: Two Pointer → Slow/Fast
        TC: O(n)
        SC: O(1)
*/

var moveZeroes = function (nums) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
      slow++;
    }
  }
  return nums;
};
