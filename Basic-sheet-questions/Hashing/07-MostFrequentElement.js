/*
 Find the Most Frequent Element

Given an array, return the element that appears the maximum number of times.

*/

function mostFrequentEle(arr){
    let mpp = new Map();
    for(let ele of arr){
        if(mpp.has(ele)){
            mpp.set(ele,mpp.get(ele) + 1);
        }else{
            mpp.set(ele,1);
        }
    }
    let maxFreqVal = -Infinity;
    let maxFreqKey = -Infinity;
    for(let [key,val] of mpp){
        if(val > maxFreqVal){
            maxFreqVal = val;
            maxFreqKey = key;
        }
    }
    return maxFreqKey
}

const arr = [1, 3, 2, 1, 4, 4,4,4,4,4,4,1, 2];
console.log(mostFrequentEle(arr));