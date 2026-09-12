/*
Find Union of Two Arrays

Given two arrays, return all unique elements from both arrays.

*/

function findUnionBrute(arr1,arr2){
    let res = [];
    for(let i = 0;i < arr1.length;i++){
        if(!res.includes(arr1[i])){
            res.push(arr1[i]);
        }
    }
    for(let i = 0 ; i< arr2.length;i++){
        if(!res.includes(arr2[i])){
            res.push(arr2[i]);
        }
    }
    return res;
}

function findUnionOptimize(arr1,arr2){
    let stt = new Set(arr1);

    for(let i = 0; i < arr2.length;i++){
        if(!stt.has(arr2[i])){
            stt.add(arr2[i])
        }
    }
    return [...stt];
}

// const arr1 = [1, 2, 2, 3]

// const arr2 = [2, 3, 4, 4]
const arr1 = [1, 2, 3, 4]

const arr2 = [3, 4, 5, 6]
console.log(findUnionBrute(arr1,arr2));
console.log(findUnionOptimize(arr1,arr2))