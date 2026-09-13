//Since the array is sorted, use two pointers from opposite ends. If the sum is greater than target, move right left; if smaller, move left right; if equal, return the 1-based indices.

/*
    TC: O(n) 
    SC: O(1)
*/


var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while(left < right){
        if(numbers[left] + numbers[right] === target){
            return [left + 1,right + 1];
        }else if(numbers[left] + numbers[right] > target){
            right--
        }else {
            left++;
        }
    }
};