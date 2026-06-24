/*
    Problem Description : Given a paragraph of words, capitalize the first character of each word and return the
*/

function capitaliseBasic(paragraph) {
  let res = paragraph.split(" ");
  let firstChar = "";
  for (let i = 0; i < res.length; i++) {
    if (res[i] === "") {
      continue;
    }
    firstChar = firstChar + res[i][0].toUpperCase() + res[i].slice(1) + " ";
  }

  return firstChar;
}

// const paragraph = "the quick"
const paragraph = "the quick Brown fox jumps over The lazy dog. ";
console.log(capitaliseBasic(paragraph));
