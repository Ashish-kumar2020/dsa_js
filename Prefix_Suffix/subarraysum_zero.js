function largestSubarraySumZero(n, arr) {
   
    let maxLengthSub = 0;
    let startIdx = -1;
    let endIdx = -1
    for(let i = 0; i < n;i++){
        let sum = 0;
        for(let j = i;j < n;j++){
            sum += arr[j];
            if(sum === 0 && (j-i + 1) > maxLengthSub){
                 maxLengthSub = j - i + 1;
                startIdx = i;
                endIdx = j;
            }
        }
    }
    if(startIdx == -1){
        return [-1];
    }
   return arr.slice(startIdx,endIdx + 1)
    
}

function largestSubarraySumZeroOptmize(n, arr) {
    let prefixSum = 0;
    let maxLength = 0;
    let start = -1;
    let end = -1;

    // prefixSum -> first index where it appeared
    const map = new Map();

    for (let i = 0; i < n; i++) {
        prefixSum += arr[i];

        // Case 1: Prefix itself has sum 0
        if (prefixSum === 0) {
            if (i + 1 > maxLength) {
                maxLength = i + 1;
                start = 0;
                end = i;
            }
        }

        // Case 2: Prefix sum seen before
        if (map.has(prefixSum)) {
            const prevIndex = map.get(prefixSum);
            const length = i - prevIndex;

            if (length > maxLength) {
                maxLength = length;
                start = prevIndex + 1;
                end = i;
            }
        } else {
            // Store only the FIRST occurrence
            map.set(prefixSum, i);
        }
    }

    if (start === -1) {
        return [-1];
    }

    return arr.slice(start, end + 1);
}

// console.log(largestSubarraySumZero(6,[2 ,3 ,1 ,-4, 0, 6]))
console.log(optimize(6,[2 ,3 ,1 ,-4, 0, 6]))