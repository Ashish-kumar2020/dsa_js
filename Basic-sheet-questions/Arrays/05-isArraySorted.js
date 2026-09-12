// Check if an array is sorted

function isArraySorted(arr){
    for(let i =0;i < arr.length - 1;i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}

// const arr = [10, 5, 8, 3];
const arr = [3,4,5,6,7,8,9]
console.log(isArraySorted(arr))