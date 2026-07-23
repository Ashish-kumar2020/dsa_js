function rainWaterTrapping(arr,n){
    let mxL =[];
    let mxR = [];
    mxL[0] = arr[0];
    mxR[n - 1] = arr[n-1];

    for(let i = 1; i < n;i++){
        mxL[i] = Math.max(mxL[i-1],arr[i]);
    }

    for(let i = n - 2;i >=0 ;i--){
        mxR[i] = Math.max(mxR[i+1],arr[i]);
    }

    let water = [];
    for(let i = 0; i < n;i++){
        water[i] = Math.min(mxL[i],mxR[i]) - arr[i];
    }

    let sum = 0;
    for(let i = 0;i < n;i++){
        sum = sum + water[i];
    }

    return sum;
}

const arr = [3,0,0,2,0,4];
const n = arr.length;
console.log(rainWaterTrapping(arr,n))