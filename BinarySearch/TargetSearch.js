/*

    Problem Description : Given a sorted array of N distinct integers and a target value X, return the index if the target is found. If not found then return -1.

    Note - Try implementing with O(logN) runtime complexity.

*/


function searchTarget(N,A,X) {
    let left = 0, right = N;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(A[mid] == X){
            return mid;
        } else if(A[mid] < X){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

//5 7

// 1 3 5 7 13
const N = 5
const X = 3;
const A = [1,3,5,7,13];
console.log(searchTarget(N,A,X))