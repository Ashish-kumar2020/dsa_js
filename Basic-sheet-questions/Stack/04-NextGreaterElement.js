//Next Greater Element

function nextGreaterElementBrute(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let nextGreater = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        nextGreater = arr[j];
        break;
      }
    }
    res.push(nextGreater);
  }
  return res;
}
function nextGreaterElementOptimize(arr) {
  let res = [];
  let st = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    while (st.length > 0 && st[st.length - 1] <= arr[i]) {
      st.pop();
    }

    if (st.length === 0) {
      res.push(-1);
    } else {
      res.push(st[st.length - 1]);
    }

    st.push(arr[i]);
  }

  return res.reverse();
}

const arr = [2, 1, 5, 3];
// console.log(nextGreaterElementBrute(arr));
console.log(nextGreaterElementOptimize(arr));
