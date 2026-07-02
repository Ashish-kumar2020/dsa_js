/*
Problem Description
Given a sorted array, remove the duplicates in-place, such that each element in the array appears at most twice, and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.


*/


function removeDuplicatesFromSortedArrayII(n, arr) {
    let mpp = new Map();
    for(let val of arr){
        if(mpp.has(val)){
            mpp.set(val,mpp.get(val) + 1);
        } else {
            mpp.set(val,1);
        }
    }
    let res = []
    for(let i = 0; i < n;i++){
        if(mpp.get(arr[i])  >= 2){
            res.push(arr[i]);
            mpp.set(arr[i],1) 
        } else if(mpp.get(arr[i]) == 1) {
            res.push(arr[i]);
           mpp.set(arr[i],0) 
        }
    }
    for(let i = 0; i < res.length;i++){
        arr[i] = res[i];
    }
    return res.length;
}