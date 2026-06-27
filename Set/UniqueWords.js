/*
    Problem Description : You are given a list of words present in a book. Find out the count of unique words present in that book.
*/

function uniqueWords(n, s) {
  let res = new Set(s);
  let arr = [...res];
  return arr.length;
}

console.log(uniqueWords(7, ["Java", "is", "great", "Grails", "is", "also", "great"]));


