/*
Problem Description
Given an array of integers as input, output the indices of two numbers in the array which add up to a specified target.

Assume that each input would have exactly one solution and you cannot use the same element twice. If 2 different elements have the same value, they can be used.

Print the indices in increasing order.


*/


function twoSum(nums, target) {
    let mpp = new Map();
    let neededEle;
    for(let i = 0; i < nums.length;i++){
        neededEle = target - nums[i];
        if(mpp.has(neededEle)){
            return [mpp.get(neededEle),i];
            // return mpp.get(neededEle)
        }else{
            mpp.set(nums[i],i);
        }
    }
}

console.log(twoSum([2,4,5,9,8],9))