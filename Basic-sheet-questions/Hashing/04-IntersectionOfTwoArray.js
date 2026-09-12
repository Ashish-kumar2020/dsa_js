/*
Find Intersection of Two Arrays

Given two arrays, return the common elements present in both arrays.

For this roadmap problem, return each common element only once.

*/

function findIntersectionBrute(arr1,arr2){
    let res = [];
    for(let i =0;i < arr1.length;i++){
        for(let j= 0;j <arr2.length;j++){
            if(arr1[i] === arr2[j] && !res.includes(arr2[j])){
                res.push(arr2[j]);
            }
        }
    }
    return res;
}

function findDuplicateOptimize(arr1,arr2){
    let stt = new Set(arr1);
    let res = new Set();
    for(let i =0 ;i < arr2.length;i++){
        if(stt.has(arr2[i])){
            res.add(arr2[i]);
        }
    }
    return [...res];
}

const arr1 = [1, 3, 3, 4];
const arr2 = [3, 4, 5, 6];

// console.log(findIntersectionBrute(arr1,arr2));
console.log(findDuplicateOptimize(arr1,arr2));