 function mostFrequentElement(nums) {
        let mpp = new Map();
        for(let val of nums){
            if(mpp.has(val)){
                mpp.set(val,mpp.get(val) + 1);
            } else {
                mpp.set(val,1);
            }
        }
        console.log(mpp)
    }

console.log(mostFrequentElement( [1, 2, 2, 3, 3, 3]))