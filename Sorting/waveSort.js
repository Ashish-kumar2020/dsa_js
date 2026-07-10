
function waveSort(arr) {
    arr.sort((a,b) => a - b);

    for(let i =0; i <arr.length - 1;i+=2){
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
    }
    return arr;
}

function waveSortOptimize(arr){
    let n = arr.length;
    for(let i = 0; i < n;i += 2){
        if(i > 0 && arr[i - 1] > arr[i]){
            [arr[i],arr[i-1]] = [arr[i-1],arr[i]];
        }
        if(i < n - 1 && arr[i+1] > arr[i]){
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
        }
    }
    return arr;
}


console.log(waveSortOptimize([1 ,5 ,1 ,1 ,6 ,4]))