// Problem : Search for an element in roated sorted array

function serachEle(arr,n,target){
    let start = 0;
    let end = n;
    while(start <= end){
        let mid = Math.floor(start + (end - start)/2);

        if(arr[mid] === target) return mid;
        // move to left side
        if(arr[start] <= arr[mid]){
            if(target >= arr[start] && target <= arr[mid]){
                end = mid - 1;
            }else {
                start = mid + 1;
            }
        }else {
            // move to right side
            if(target > arr[mid] && target <= arr[end]){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
        }
    }
    return -1;
}

const arr = [6, 12, 15, 18, 2, 3];

console.log(serachEle(arr, 12)); // 1
console.log(serachEle(arr, 2));  // 4
console.log(serachEle(arr, 3));  // 5