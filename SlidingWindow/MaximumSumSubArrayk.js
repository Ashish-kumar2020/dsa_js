function maximumSumSubArray(arr,k){
    let sum = 0;
    let maxSum = -Infinity;
    let i = 0;
    let j = 0;
    while(j < arr.length){
        sum += arr[j];
        if(j - i + 1 < k){
            j++;
        }else if(j- i + 1 === k){
            maxSum = Math.max(sum,maxSum);
            sum = sum - arr[i]; // this wil remove the element from the sum of previos window
            i++;
            j++;
        }
    }
    return maxSum;
}

const nums = [1,50,4,2,9,9,9], k = 3;
console.log(maximumSumSubArray(nums,k))