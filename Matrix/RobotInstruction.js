/*

Problem Description
There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

Input format
You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

*/


function robotReturnToOrigin(moves) {
    let x = 0;
    let y = 0;
    for(let i = 0; i < moves.length;i++){
        if(moves[i] === 'U'){
            y++;
        } else if(moves[i] === 'D'){
            y--;
        } else if(moves[i] === 'L'){
            x--;
        } else {
            x++;
        }
    }
    return x === 0 && y === 0;
}

const moves = ['L','R'];
console.log(robotReturnToOrigin(moves))