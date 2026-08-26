/*
Find the First Non-Repeating Character

Problem Statement : Given a string, find the first character that appears exactly once in the string.

If there is no non-repeating character, return null.

*/

function firstNonRepeatingChar(str){
    let mpp = new Map();
    for(let char of str){
        if(mpp.has(char)){
            mpp.set(char,mpp.get(char) + 1);
        }else{
            mpp.set(char,1);
        }
    }

    for(const [key,val] of mpp){
        if(val === 1){
            return key;
        }
    }
    return null;
}

const str = "loveleetcode";
console.log(firstNonRepeatingChar(str))