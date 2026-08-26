/*
Remove Duplicate Characters

Problem Statement : Given a string, remove all duplicate characters while preserving the first occurrence of each character.
*/

function removeDuplicateFromStrUsingMap(str){
    let mpp = new Map();
    for(let char of str){
        if(!mpp.has(char)){
            mpp.set(char,1);
        }
    }
    let res = "";
    for(let key of mpp.keys()){
        res += key;
    }
    return res;
}

function removeDuplicateFromStrUsingArr(str){
    let res = "";
    for(let i = 0; i <str.length ;i++){
        if(!res.includes(str[i])){
            res += str[i];
        }
    }
    return res
}

const str = "programming";
console.log(removeDuplicateFromStrUsingMap(str));
// console.log(removeDuplicateFromStrUsingArr(str));