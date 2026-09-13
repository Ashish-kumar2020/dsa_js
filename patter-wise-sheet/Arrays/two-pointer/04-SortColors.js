//Use three pointers left, mid, and right to maintain three regions: 0s on the left, 1s in the middle, and 2s on the right. Move mid through the array, swapping 0 to left and 2 to right, while 1 simply advances mid.

// Dutch National Flag Algorithm

/*
    Pattern: Two Pointer → Multiple Pointers
        TC: O(n)
        SC: O(1)
*/

var sortColors = function(nums) {
    let left = 0;
    let mid = 0;
    let right = nums.length - 1;
    while(mid <= right){
        switch(nums[mid]){
            case 0:
                [nums[mid],nums[left]] = [nums[left],nums[mid]];
                left++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                [nums[mid],nums[right]] = [nums[right],nums[mid]];
                right--;
                break;
        }
    }
};