function insertionSort(arr,n){
    for(let i = 1;i < n;i++){
        let key = arr[i];
        let j = i - 1;
        while(j >=0 && arr[j] > key ){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key
    }
    return arr;
}


const arr = [
  2, 4, 5, 6,
  7, 8, 9, 1
]
const n= arr.length;
console.log(insertionSort(arr,n))