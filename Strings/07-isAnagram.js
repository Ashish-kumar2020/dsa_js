/*
Check if Two Strings are Anagrams

Problem Statement ; Given two strings, determine whether they are anagrams of each other.

Two strings are anagrams if they contain the same characters with the same frequencies, regardless of the order of the characters.

Return true if they are anagrams; otherwise, return false.

*/

function isAnagram(str1,str2){
    let mpp = new Map();
    if(str1.length !== str2.length) return false;
    for(let char of str1){
        if(mpp.has(char)){
            mpp.set(char,mpp.get(char) + 1);
        }else{
            mpp.set(char,1);
        }
    }
    for(let char of str2){
        if(mpp.has(char)){
            mpp.set(char,mpp.get(char) - 1);
        }else{
            mpp.set(char,1);
        }
    }

    for(let value of mpp.values()){
        if(value !== 0){
            return false;
        }
    }

    return true;
}

const str1 = "triangle";
const str2 = "integral";
console.log(isAnagram(str1,str2));