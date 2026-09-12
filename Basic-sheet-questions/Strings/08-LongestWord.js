/*
Find the Longest Word

Problem Statement : Given a string containing multiple words separated by spaces, find and return the longest word in the string.

If multiple words have the same maximum length, return the first longest word.

*/

function findLongestWord(str){
  let currSplitterStr = str.split(" ");
  let maxStr = "";
  for(let i =0; i< currSplitterStr.length;i++){
    if(currSplitterStr[i].length > maxStr.length ){
        maxStr = currSplitterStr[i];
    }
  }
  return maxStr
}

const str = "The quick brown fox";
console.log(findLongestWord(str));