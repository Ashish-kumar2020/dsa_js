/*
Problem - Longest Substring Without Repeating Characters 

Given a string, find the length of the longest substring without repeating characters.

*/

function longestSubstringWithoutRepeatingCharBrute(str){
    // let res = [];
    let maxLen = 0;
    for(let i = 0; i < str.length;i++){
        let s = "";
        for(let j = i;j < str.length;j++){
            if(s.includes(str[j])){
                // res.push(s);
                break;
            }else{
                s += str[j];
                 maxLen = Math.max(maxLen,s.length);
            }
        }
    }
    return maxLen;
}

function longestSubstringWithoutRepeatingCharOptimize(str){
    let st = new Set();
    let maxLen = 0;
    let j = 0;
    for(let i = 0; i < str.length;i++){
        while(st.has(str[i])){
            st.delete(str[j]);
            j++;
        }
        st.add(str[i]);
        maxLen = Math.max(maxLen,st.size);
    }
    return maxLen;
}

const str = "tmmzuxt";
// console.log(longestSubstringWithoutRepeatingCharBrute(str));
console.log(longestSubstringWithoutRepeatingCharOptimize(str));