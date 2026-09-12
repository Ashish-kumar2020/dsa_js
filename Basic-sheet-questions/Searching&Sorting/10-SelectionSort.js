

function selectionSort(arr){
   let n = arr.length;
   for(let i = 0;i < n - 1;i++){
    let minIdx = i;
    for(let j = i + 1;j < n;j++){
        if(arr[j] < arr[minIdx]){
            minIdx = j;
        }
    }
    [arr[i],arr[minIdx]] = [arr[minIdx],arr[i]];
   }
   return arr;
}
const arr = [
  2, 4, 5, 6,
  7, 8, 9, 1
]
console.log(selectionSort(arr));