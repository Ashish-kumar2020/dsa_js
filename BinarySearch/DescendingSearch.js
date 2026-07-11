// Find elemenet in Descending sorted array

function descendingSearch(arr,n,target){
    let start = 0;
    let end = n;
    while(start <= end){
        let mid = Math.floor(start + (end - start)/2);
        if(arr[mid] === target) return mid;
        else if(target < arr[mid]){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return -1;
}

const arr = [10,9,8,7,6,5,4,3,2,1];
const n = arr.length - 1;
const target = 8;
console.log(descendingSearch(arr,n,target));