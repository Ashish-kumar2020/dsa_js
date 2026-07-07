/*
Problem - Given a string you need to print the size of the longest possible substring that has exactly k unique characters.


Example:
Input:
2
aabacbebebe
3
aaaa
1
Output:
7
4 
*/

function longestPossibleSubstring(str, k) {
    let mpp = new Map();
    let i = 0;
    let maxCount = 0;

    for (let j = 0; j < str.length; j++) {
        mpp.set(str[j], (mpp.get(str[j]) || 0) + 1);
        while (mpp.size > k) {
            mpp.set(str[i], mpp.get(str[i]) - 1);

            if (mpp.get(str[i]) === 0) {
                mpp.delete(str[i]);
            }

            i++;
        }
        if (mpp.size === k) {
            maxCount = Math.max(maxCount, j - i + 1);
        }
    }

    return maxCount;
}

console.log(longestPossibleSubstring("aabacbebebe", 3)); // 7
console.log(longestPossibleSubstring("aaaa", 1)); // 4