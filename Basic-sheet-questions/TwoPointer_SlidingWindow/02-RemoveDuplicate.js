/*
Problem - Remove Duplicates Using Two Pointers

Given a sorted array, remove duplicates in-place and return the number of unique elements.

*/

function removeDuplicateBrute(arr) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i+1]){
        let j = i + 1;
        while(arr[j] === arr[i]){
            arr.splice(j,1);
        }
    }
  }
  return arr;
}

function removeDuplicateOptimize(arr){
    let j = 0;
    for(let i =1;i < arr.length;i++){
        if(arr[i] !== arr[j]){
            [arr[i],arr[j+1]] = [arr[j+1],arr[i]];
            j++;
        }
    }
    return arr;
}

const arr = [1, 1, 2, 2, 3]
// console.log(removeDuplicateBrute(arr));
console.log(removeDuplicateOptimize(arr));