/*
Problem - Move Zeros to the End

Given an array, move all 0s to the end while maintaining the relative order of non-zero elements.

*/

function moveZerosAtEndBrute(arr){
    let res = [];
    for(let i =0;i< arr.length;i++){
        if(arr[i] !== 0){
            res.push(arr[i]);
        }
    }
    for(let i= 0;i < arr.length;i++){
        if(arr[i] === 0){
            res.push(0);
        }
    }
    return res;
}

function moveZerosAtEndOptimize(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
          j++;
    }
  }
  return arr;
}

const arr = [0, 1, 0, 3, 12];
console.log(moveZerosAtEndOptimize(arr));
