
function longestAlternatingSubstring(digits) {
    // write your code here
    let NowNum = digits[0]
    let reselt = ""
    for (var i = 1; i < digits.length; i++) {
        if ((digits[i - 1] % 2) !== (digits[i] % 2)) {
            NowNum += digits[i]
        } else {
            if (NowNum.length > reselt.length) {
                reselt = NowNum
            }
            NowNum = digits[i]
        }
    }
    return reselt

}
