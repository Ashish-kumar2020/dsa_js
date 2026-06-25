/*
    Problem Description : Given the array of integers nums of size n, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

*/


function maxProduct2(n,nums) {
    let largest = -Infinity;
    let secLarget  = -Infinity;

    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length;j++){
            largest = (nums[i] - 1) * (nums[j] - 1);
            secLarget = Math.max(largest,secLarget);
        }
    }
    return secLarget;
}

function maxProduct2Optimize(n,nums) {
   let largest = -Infinity;
   let secLargest = -Infinity;
   for(let i = 0; i < n;i++){
       if(nums[i] > largest){
           secLargest = largest;
           largest = nums[i];
       }else if(nums[i] > secLargest){
           secLargest = nums[i]
       }
   }
   let finalSum = (largest - 1) * (secLargest - 1)
   return finalSum;
}

const nums = [3, 4, 5, 2];
const n = nums.length;
console.log(maxProduct2(n,nums))