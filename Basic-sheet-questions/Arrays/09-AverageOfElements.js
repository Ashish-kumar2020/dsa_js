/*
Find the Average of Elements

Given an array of integers, return the average (mean) of all the elements in the array.

*/

function averageOfElements(arr){
    let count = arr.length;
    let sum = 0;
    for(let i = 0;i < arr.length;i++){
        sum += arr[i];
    }
    let avg = sum / count;
    return avg;
}

const arr = [1,2,3,4,5];
console.log(averageOfElements(arr))