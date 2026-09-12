/*
Check if One String is a Substring of Another

Problem Statement

Given two strings str1 and str2, determine whether str2 is a substring of str1.

A substring is a sequence of characters that appears contiguously inside another string.

Return true if str2 exists inside str1; otherwise, return false.

*/

function isSubstring(str1, str2) {
  let startingPos = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[0]) {
      let j = 0;
      while (j < str2.length) {
        if (str1[i + j] === str2[j]) {
          j++;
        } else {
          break;
        }
    }
    if(j === str2.length){
        return true;

    }
    }
  }

  return false;
}

const str1 = "javascript";
const str2 = "script";
console.log(isSubstring(str1, str2));
