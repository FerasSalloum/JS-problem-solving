
function middle_char(word) {
    // write your code here
    if (word.length == 0) {
        return "no word"
    } else if (word.length == 1 || word.length == 2) {
        return word
    } else if (word.length % 2 == 0) {
        return word[(word.length / 2) - 1] + word[(word.length / 2)]
    } else if (word.length % 2 != 0) {
        return word[Math.floor((word.length / 2))]
    }

}
