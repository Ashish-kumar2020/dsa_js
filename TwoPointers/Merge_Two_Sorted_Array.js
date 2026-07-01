/*
Problem Description : Given two sorted arrays of size M and N, merge the two arrays and return the final array, sorted.

*/

function mergeSortedArray(m, nums1, n, nums2) {
    let i = 0;
    let j = 0;
    let res = [];
    while( i < m && j < n){
        if(nums1[i] < nums2[j] && i < m){
            res.push(nums1[i]);
            i++;
        } else {
            res.push(nums2[j]);
            j++;
        }
    } 
    while(i < m){
        res.push(nums1[i]);
        i++;
    }
    while(j < n){
        res.push(nums2[j]);
        j++;
    }
    return res;
}



console.log(mergeSortedArray(3,[1,2,3],3,[2,5,6]))