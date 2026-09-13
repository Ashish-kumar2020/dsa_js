//Sort the array, fix one element using i, then use left and right pointers to find the remaining two elements. Move left when the sum is too small, right when too large, and move both when a triplet is found. Skip duplicate values for i, left, and right to avoid duplicate triplets.

/*
Pattern: Two Pointer → Multiple Pointers
TC: O(n²)
SC: O(1) excluding output.
*/

var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while(left < right && nums[left] === nums[left - 1]){
                    left++;
                }
                while(left < right && nums[right] === nums[right + 1]){
                    right--;
                }
            } else if (nums[i] + nums[left] + nums[right] > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return res;
};