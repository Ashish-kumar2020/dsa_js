


function isPalindrome(str){
    if(str.length <= 1) return true;
    if(str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, str.length - 1));
}

function isPalindromeOptimize(str, left = 0, right = str.length - 1) {
    if (left >= right) return true;

    if (str[left] !== str[right]) return false;

    return isPalindrome(str, left + 1, right - 1);
}


const str = "madam";
console.log(isPalindromeOptimize(str));