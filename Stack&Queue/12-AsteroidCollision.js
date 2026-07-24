/*
Asteroid Collision (Stack) - Quick Revision

Pattern

* Stack Simulation
* Collision occurs only when:
    * stackTop > 0
    * current < 0

⸻

Collision Cases

1. Stack Top < |Current|

+5   -8

* Pop stack.
* Current survives.
* Continue checking.

2. Stack Top == |Current|

+8   -8

* Pop stack.
* Current dies.
* Stop.

3. Stack Top > |Current|

+10   -8

* Current dies.
* Stop.



Key Idea

* Stack stores surviving asteroids.
* A negative asteroid may collide with multiple positive asteroids.
* A positive asteroid is pushed immediately because it cannot collide with previous asteroids.

⸻

Common Mistakes

❌ Comparing signed values

top < current

✅ Compare magnitudes

top < -current

⸻

❌ Forgetting to pop in the equal-size case.

st.pop();
alive = false;

⸻

❌ Using a separate result array.

The stack itself is the final answer.

⸻

Complexity

* Time: O(n)
* Space: O(n)

⸻

Interview One-Liner

Collision is possible only when:
Stack Top > 0 && Current < 0


*/

class Solution {
    asteroidCollision(asteroids) {
     let st = [];
     let n = asteroids.length;
     for(let i = 0; i < n;i++){
        if(asteroids[i] > 0){
            st.push(asteroids[i]);
            continue;
        }
        let alive = true;
        while(alive && st.length > 0 && st[st.length - 1] > 0){
            let top = st[st.length - 1];
            if(top < -asteroids[i]){
                st.pop();
            }
            // Both are equal
            else if(top === -asteroids[i]){
                st.pop();
                alive = false;
            }
            // Stack top is graeter
            else{
                alive = false;
            }
        }
        if(alive){
            st.push(asteroids[i]);
        }
     }
     return st;
    }
}
