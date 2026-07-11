// Problem - We need to find the count of an element, how many time the element occurs the array


function occurrence(arr,n,target,countCheck){
    let start = 0;
    let end = n;
    let ans = -1;
    while(start <= end){
        let mid = Math.floor(start + (end - start)/2);
        if(target === arr[mid]){
            ans = mid;
            if(countCheck){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }else if(target < arr[mid]){
            end = mid - 1;
        }else {
            start = mid + 1;
        }
    }
    return ans;
}


function countOfAnElement(arr,n,target){
    let firstOccurance = occurrence(arr,n,target,true);
    let lastOccurance = occurrence(arr,n,target,false);
    return lastOccurance - firstOccurance + 1;
    // console.log(firstOccurance)
}
const arr = [1,2,3,4,5,5,5,5,5,10];
const n = arr.length - 1;
const target = 5;

console.log(countOfAnElement(arr,n,target));