function MaximumEleFromSubArray(arr,k){
    if(arr.length === 0) return [];
    let maxSum = -Infinity;
    let i =0;
    let j = 0;
    let res = [];
    while(j < arr.length){
        if(arr[j] > maxSum){
            maxSum = Math.max(maxSum,arr[j]);
        }

        if(j - i + 1 < k){
            j++;
        }else if(j - i + 1 === k ){
            res.push(maxSum);
            i++;
            j++;
        }
    }
    return res;
};

const arr = [-1,-3,-1,-3,5,3,6,7];
const k = 3;
console.log(MaximumEleFromSubArray(arr,k))