// Problem : We need to find how many times a Sorted Array is roated


function numberOfTimesRoated(arr,n){
    let start = 0;
    let end = n;
    while(start <= end){
        let mid = Math.floor(start + (end - start)/2);
        let prev = (mid + n - 1) % n;
        let next = (mid + 1) % n;

        if(arr[mid] <= arr[next] && arr[mid] <= arr[prev]){
            return mid;
        }
        if(arr[start] <= arr[mid] ){
            start = mid +1;
        }else {
            end = mid - 1;
        }
    }
    return -1;
}

const arr = [6, 12,15,18 ,2, 3];
const n = arr.length - 1;
console.log(numberOfTimesRoated(arr,n))