/*

Group Anagrams 

Given an array of strings, group all strings that are anagrams of each other.
*/

function isAnagram(str1, str2) {
  let mpp = new Map();
  if (str1.length !== str2.length) return false;
  for (let char of str1) {
    if (mpp.has(char)) {
      mpp.set(char, mpp.get(char) + 1);
    } else {
      mpp.set(char, 1);
    }
  }

  for (let char of str2) {
    if (mpp.has(char)) {
      mpp.set(char, mpp.get(char) - 1);
    } else {
      return false;
    }
  }

  for (let value of mpp.values()) {
    if (value !== 0) {
      return false;
    }
  }
  return true;
}

function groupAnagramsBrute(str) {
  let res = [];

  let visited = new Array(str.length).fill(false);

  for (let i = 0; i < str.length; i++) {
    if (visited[i]) continue;

    let group = [str[i]];

    visited[i] = true;

    for (let j = i + 1; j < str.length; j++) {
      if (visited[j]) continue;

      if (isAnagram(str[i], str[j])) {
        group.push(str[j]);

        visited[j] = true;
      }
    }

    res.push(group);
  }

  return res;
}

function groupAnagramsOptimize(str){
    let mpp = new Map();
    for(let word of str){
        let key = word.split("").sort().join("");
        if(mpp.has(key)){
            mpp.get(key).push(word);
        }else{
            mpp.set(key,[word]);
        }
    }
    return [...mpp.values()];
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagramsBrute(strs));
console.log(groupAnagramsOptimize(strs))
