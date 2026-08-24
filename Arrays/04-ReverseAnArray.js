
// Reverse an array

function reverseAnArrayInBuilt(arr){
    const res = arr.reverse();
    return res;
}

// using swapping - Two Pointers
function reverseAnArray(arr){
    let l = 0;
    let r = arr.length - 1;
    while(l < r){
        [arr[l],arr[r]] = [arr[r],arr[l]];
        l++;
        r--;
    }
    return arr;
}

const arr = [10, 5, 8, 3];
// console.log(reverseAnArrayInBuilt(arr));
console.log(reverseAnArray(arr))