/*
    Bubble Sort
*/

function bubbleSort(arr){
    for(let i =0;i < arr.length - 1;i++){
        let swapped = false;
        for(let j = 0;j < arr.length - i - 1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr;
}

const arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr));