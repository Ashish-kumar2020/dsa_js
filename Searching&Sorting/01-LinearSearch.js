/*

Linear Search

Problem Statement : Given an array of integers and a target value, find the index of the target element using linear search.

If the target element is not present in the array, return -1.

*/

function linearSearch(arr,target){
    let n = arr.length - 1;
    for(let i = 0;i <= n;i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}
const arr = [1,2,3,4,5,6];
console.log(linearSearch(arr,6))