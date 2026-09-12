/*
Find Common Elements in Two Arrays

Problem Statement:
Given two arrays, find all the elements that are present in both arrays.
*/


function findCommonElement(arr1,arr2){
    let res = [];
    for(let i =0; i < arr1.length;i++){
        for(let j = 0; j < arr2.length;j++){
            if(arr1[i] === arr2[j]){
                res.push(arr2[j]);
            }
        }
    }
    return res;
}

function findCommonElementOptimize(arr1,arr2){
    let stt = new Set(arr1);
    let res = [];
    for(let i = 0; i < arr2.length;i++){
        if(stt.has(arr2[i])){
            res.push(arr2[i]);
        }
    }
    return res;
}

const arr1 = [1, 2, 3, 4, 5,5]
const arr2 = [3, 4,5]
// console.log(findCommonElement(arr1,arr2));
console.log(findCommonElementOptimize(arr1,arr2))