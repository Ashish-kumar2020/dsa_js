/*
Maximum Element in Every Window of Size K
const arr = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
*/

function maximumEleBrute(arr,k){
    let maxEle = -Infinity;
    let res = [];
    for(let i = 0; i <= arr.length - k;i++){
        for(let j = i; j < i + k;j++){
            maxEle = Math.max(arr[j],maxEle);
        }
        res.push(maxEle);
        maxEle = -Infinity;
    }
    return res;
}

// function maximumEleOptimize(arr,k){
//     let maxEle = -Infinity;
//     let i = 0;
//     let j = 0;
//     let res = [];
//     while(j < arr.length){
//         maxEle = Math.max(maxEle,arr[j]);
//         if(j - i + 1  < k){
//             j++;
//         }else if(j - i + 1 === k){
//             res.push(maxEle);
//             if(i === 2){
//                 // maxEle = maxEle
//                 // we need to update the value of max when the current max value index is equal to index of i
//             }
//             i++;
//             j++;
//         }
//     }
//     return res;
// }

function maximumEleOptimize(arr,k){
    let q = [];
    let res = [];
    for(let i =0;i<arr.length;i++){
        // remove smaller elements from the back
        while(q.length > 0 && arr[q[q.length - 1]] < arr[i]){
            q.pop();
        }

        // add current index in queue
        q.push(i);

        // remove elements outside of the currnet window
        if(q[0] <= i - k){
            q.shift();
        }

        // store maximum once window size become k
        if(i >= k-1){
            res.push(arr[q[0]]);
        }
    }
    return res;
}

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
// console.log(maximumEleBrute(arr,k));
console.log(maximumEleOptimize(arr,k));