/*
Problem Description
        You are given two arrays A and B of size n and m respectively. You need to find the resultant array of the union between these two arrays.

        Elements are not necessarily distinct.

        Note:-Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union.

        Resultant Array should be in sorted order

*/

function unionOfTwoArrays(A, B) {
    A.sort((a,b) => a - b);
    B.sort((a,b) => a - b);
    let res = [];
    let a = 0
    let b = 0;
    while(a < A.length && b < B.length){
        if(A[a] < B[b]){
            if((res.length === 0) || (res[res.length - 1] !== A[a])){
                res.push(A[a]);
            }
            a++;
            
        } else if(A[a] > B[b]) {
            if(res.length === 0 || (res[res.length - 1] !== B[b])){
                res.push(B[b]);
            }

           
            b++;
        } else{
            if((res.length === 0) || (res[res.length - 1] !== A[a])){
                res.push(A[a]);
            }
            
            a++;
            b++;
        }
    }

    while(a < A.length){
        if((res.length === 0) || (res[res.length - 1] !== A[a])){
                res.push(A[a]);
            }
        a++;
    }
    while(b < B.length){
        if(res.length === 0 || (res[res.length - 1] !== B[b])){
                res.push(B[b]);
            }
        b++
    }
  return res
}