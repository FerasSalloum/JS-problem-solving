function isPalindrome(s) {
    const oldS = s.toLowerCase().replace(/[^\w]/g,'');
    const newS = oldS.split("").reverse().join("");
    if(newS !== oldS)return false
    return true
}