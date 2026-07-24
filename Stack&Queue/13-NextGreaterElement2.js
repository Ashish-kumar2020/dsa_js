/*
Next Greater Element II (Circular Array) - Quick Revision

Pattern

* Monotonic Decreasing Stack
* Circular Array
* Traverse 2 × n times from right → left.

⸻

Why Traverse 2 × n Times?

A circular array means after the last element, we continue from the first.

Instead of creating:

[1,2,3,4,1,2,3,4]

we simulate it using:

arr[i % n]

⸻

Why i % n?

Converts indices beyond n-1 back into the array.

Example:

n = 5
i = 9 → 9 % 5 = 4
i = 8 → 8 % 5 = 3
i = 7 → 7 % 5 = 2
...

⸻

Why Store Answer Only When i < n?

* First n iterations (2n-1 → n) are used only to build the stack.
* Last n iterations (n-1 → 0) compute the actual answers.

if (i < n) {
    res[i] = st[st.length - 1];
}

⸻

Stack Property

Maintain a Monotonic Decreasing Stack.

Before pushing current element:

while (
    st.length > 0 &&
    st[st.length - 1] <= arr[i % n]
) {
    st.pop();
}

Reason:

* Smaller elements can never become the Next Greater Element.
* Remove all useless candidates.

⸻

Algorithm

Create result array filled with -1
Create empty stack
Traverse from (2n-1) → 0
    current = arr[i % n]
    Pop all elements <= current
    If i < n and stack is not empty
        res[i] = stack top
    Push current into stack
Return result

⸻

Why Push After Finding Answer?

The current element should become a candidate for elements on its left.

st.push(arr[i % n]);

⸻

Common Mistakes

❌ Using

arr[i]

Use

arr[i % n]

⸻

❌ Filling answer during all 2n iterations.

Store answer only when

i < n

⸻

❌ Using push() on the result array.

Use

res[i] = ...

because you’re computing the answer for index i.

⸻

Complexity

* Time: O(n)
* Space: O(n)

Each element is pushed once and popped at most once.

⸻

Interview One-Liner

For Circular NGE:
1. Traverse from 2n-1 → 0.
2. Access element using arr[i % n].
3. Maintain a Monotonic Decreasing Stack.
4. Store answer only when i < n.


*/

class Solution {
    nextGreaterElements(arr) {
        let n = arr.length;
        let res = new Array(n).fill(-1);
        let st = [];
        for(let i = 2 * n - 1; i >= 0;i--){
            while(st.length > 0 && st[st.length - 1] <= arr[i]){
                st.pop();
            }

            if(i < n && st.length > 0){
                res[i] = st[st.length - 1];
            }
        st.push(arr[i % n])
        }
        return res;
    }
}