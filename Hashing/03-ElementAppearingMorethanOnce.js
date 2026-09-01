/*
 Find Elements Appearing More Than Once

Problem : Given an array, return all elements that appear more than once.

*/

function elementAppearingMoreThanOnceBrute(arr){
    let res = [];
    for(let i =0; i < arr.length;i++){
        for(let j = i + 1;j < arr.length; j++){
           if(arr[i] === arr[j]){
                if(!res.includes(arr[i])){
                    res.push(arr[i]);
                }
            }
        }
    }
    return res;
}

function elementAppearingMoreThanOnceOptimze(arr){
    let seen = new Set();
    let duplicate = new Set();
    for(let ele of arr){
        if(seen.has(ele)){
            duplicate.add(ele);
        }else{
            seen.add(ele);
        }
    }
    return [...duplicate];
}

const arr = [1, 2, 3, 2, 4, 1, 5]
// console.log(elementAppearingMoreThanOnceBrute(arr));
console.log(elementAppearingMoreThanOnceOptimze(arr));