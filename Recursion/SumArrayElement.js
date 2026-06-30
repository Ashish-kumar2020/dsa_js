function sumArrayELe(nums,i,sum){
    if(i >= nums.length){
        return sum;
    }
    sum += nums[i];
    return sumArrayELe(nums,i+1,sum);
    

}
console.log(sumArrayELe([1,2,3,4,5],0,0));