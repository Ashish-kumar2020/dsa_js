function mergeIntervals(n, intervals) {
    if(n === 0) return [];
    let sortedinterval = intervals.sort((a,b) => a[0] - b[0]);
    let res = [sortedinterval[0]];
    for(let i = 0; i < sortedinterval.length;i++){
        let last = res[res.length - 1];
        let curr = sortedinterval[i];

        if(curr[0] <= last[1]){
            last[1] = Math.max(curr[1],last[1]);
        }else{
            res.push(curr)
        }
    }
    return res;
}
