function sumHighestAndLowestFrequency(nums) {
  let mpp = new Map();
  for (let val of nums) {
    if (mpp.has(val)) {
      mpp.set(val, mpp.get(val) + 1);
    } else {
      mpp.set(val, 1);
    }
  }

  let maxFreq = 0;
  let lowFreq = Infinity;
  for (let [ele, count] of mpp) {
    if (count > maxFreq) {
      maxFreq = count;
    } 
    if (count < lowFreq ) {
      lowFreq = count;
    }
  }
  console.log(maxFreq+ lowFreq, mpp);
}


function sumHighLow(nums){
    let high = 0;
    let low = 0;
    for(let i = 0; i < nums.length ;i++){
        if(nums[i] > high){
            low = high;
            high = nums[i];
        } else if(nums[i] > low && nums[i] < high){
            low = nums[i]
        }
    }
    return [high + low]
}


console.log(sumHighLow([1, 2, 3]));
