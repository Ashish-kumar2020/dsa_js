// In this Problem Statement it is not given in which direction array is sorted be it Ascending or descending


function orderAgnosticSearch(arr,n,target){
    if(n === 1) return arr;
    let start = 0;
    let end = n;
    if(arr[0] > arr[1]){
        while(start <= end){
            let mid = Math.floor(start + (end - start)/2);
            if(target === arr[mid]) return mid;
            else if(target < arr[mid]){
                start = mid + 1;
            }else {
                end = mid - 1;
            }
        }
    } else{
         while(start <= end){
            let mid = Math.floor(start + (end - start)/2);
            if(target === arr[mid]) return mid;
            else if(target < arr[mid]){
                end = mid - 1;
            }else {
                start = mid + 1;
            }
        }
    }
    return -1;
}

// const arr = [10,9,8,7,6,5,4,3,2,1];
const arr = [1,2,3,4,5,6,7,8,9,10]
const n = arr.length - 1;
const target = 9;
console.log(orderAgnosticSearch(arr,n,target))