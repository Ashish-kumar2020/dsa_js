/*
Count Character Frequency

Problem Statement : Given a string, count how many times each character appears in the string.

*/

function countFrequency(str){
    let mpp = new Map();
    for(let char of str){
        if(mpp.has(char)){
            mpp.set(char,mpp.get(char) + 1);
        }else{
            mpp.set(char,1);
        }
    }
    return mpp;
}

const str = "hello";
console.log(countFrequency(str));