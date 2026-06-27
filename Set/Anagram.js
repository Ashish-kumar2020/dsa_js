/*
    Problem Description
        You are given a string str consisting of non-repeating lowercase English letters.
        Additionally, you have an array arr of strings, each containing non-repeating characters.
        Your task is to create a program that identifies and returns the strings from the arr that are anagrams of the given string str.

        The resulting array of strings should be in lexicographically sorted order.

*/

function isAnagram(str,word){
    if(str.length !== word.length) return false;

    let set = new Set(str);
    for(let ch of word){
        if(!set.has(ch)){
            return false;
        }
    }
    return true;
}

function findAllAnagrams(str, arr) {
    let res = [];
    for(let word of arr){
        if(isAnagram(str,word)){
            res.push(word);
        }
    }
    return res.sort();
}