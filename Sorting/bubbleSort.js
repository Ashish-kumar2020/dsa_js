
function bubbleSort(arr,n){
    for(let i = 0; i <n - 1; i++){
        for(let j = 0; j < n - i - 1;j++){
            if(arr[j] > arr[j + 1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}


function bubbleSortOptmize(arr,n){
    for(let i =0 ; i < n-1;i++){
        let isSwapped = false;
        for(let j = 0; j < n-i-1;j++){
            if(arr[j] > arr[j + 1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }
    return arr;

}
const arr = [4,2,7,6,5,8,9,1];
const n = arr.length;
// console.log(bubbleSort(arr,n))
console.log(bubbleSortOptmize([
  1, 2, 4, 5,
  6, 7, 8, 9
],n))