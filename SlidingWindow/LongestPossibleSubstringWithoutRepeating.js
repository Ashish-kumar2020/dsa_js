

function longestSubsringWithoutRepeating(str){
    let mpp = new Map();
    let i = 0;
    let maxCount = 0;

    for (let j = 0; j < str.length; j++) {
        mpp.set(str[j], (mpp.get(str[j]) || 0) + 1);
        while (mpp.get(str[j]) > 1) {
            mpp.set(str[i], mpp.get(str[i]) - 1);

            if (mpp.get(str[i]) === 0) {
                mpp.delete(str[i]);
            }

            i++;
        }
        
            maxCount = Math.max(maxCount, j - i + 1);
        
    }

    return maxCount;
}

console.log(longestSubsringWithoutRepeating("abcabcbb"));