/*
Find Duplicate Elements

Given an array of integers, return all the elements that appear more than once.

*/


// Brute TC - O(n^2) SC - O(n)
function findDuplicateBrute(arr){
    let res = [];
    for(let i =0;i < arr.length;i++){
        for(let j = i +1 ;j < arr.length;j++){
            if(arr[i] === arr[j]){
                if(!res.includes(arr[i])){
                    res.push(arr[i]);
                }
            }
        }
    }
    return res;
}

function findDuplicateOptimize(arr){
    let seen = new Set();
    let duplicate = new Set();
    for(let ele of arr){
        if(seen.has(ele)){
            duplicate.add(ele);
        }else{
            seen.add(ele);
        }
    }
    return duplicate;
}

const arr = [5, 5, 5, 2, 2, 3]
// console.log(findDuplicateBrute(arr));
console.log(findDuplicateOptimize(arr))