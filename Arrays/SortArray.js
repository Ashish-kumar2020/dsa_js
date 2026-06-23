/*
    Problem Description : Given an array of n strings. Sort the array in lexicographical order.
*/


function sortArray(arr) {
    let n = arr.length ;
    for(let i = 0; i < n -1; i++){
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

const arr = ["abc", "abd" ,"ab" ,'a']
console.log(sortArray(arr))