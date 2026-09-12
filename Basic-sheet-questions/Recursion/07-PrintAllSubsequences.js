function printAllSubsequences(str, index = 0, current = "", res = []) {
  if (index === str.length) {
    res.push(current);
    return;
  }

  // Take Character
  printAllSubsequences(str, index + 1, current + str[index] , res);
  // skip the Character
  printAllSubsequences(str,index+1,current,res);
  return res;
}

console.log(printAllSubsequences("abc"));