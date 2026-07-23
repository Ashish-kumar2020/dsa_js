function stockSpanProblemBrute(arr, n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    let count = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] >= arr[j]) {
        count++;
      } else {
        break;
      }
    }
    res.push(count);
  }
  return res;
}

function stockSpanProblemOptimize(arr, n) {
  let res = [];
  let st = [];
  let ans = [];
  for (let i = 0; i < n; i++) {
    if (st.length === 0) res.push(-1);
    else if (st.length > 0 && arr[st[st.length - 1]] > arr[i]) {
      res.push(st[st.length - 1]);
    } else if (st.length > 0 && arr[st[st.length - 1]] <= arr[i]) {
      while (st.length > 0 && arr[st[st.length - 1]] <= arr[i]) {
        st.pop();
      }
      if (st.length === 0) res.push(-1);
      else res.push(st[st.length - 1]);
    }
    st.push(i);
  }
  for (let i = 0; i < res.length; i++) {
    if (res[i] === -1) {
      ans.push(i + 1);
    } else {
      ans.push(i - res[i]);
    }
  }
  return ans;
}

const arr = [100, 80, 60, 70, 60, 75, 85];
const n = arr.length;
console.log(stockSpanProblemOptimize(arr, n));
