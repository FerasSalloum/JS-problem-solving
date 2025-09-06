
function count_ones(num) {
    // write your code here
    let cont = 0
    if (num == 0) return "0"

    let snum = Math.abs(num), reslt = ""

    while (snum > 0) {
        reslt += snum % 2
        snum = Math.floor(snum / 2);
    }

    reslt = reslt.split("").reverse().join("");
    for (var i = 0; i < reslt.length; i++) {
        if (reslt[i] == 1) { cont++ }
    }
    return cont
}
const num = 100
console.log(count_ones(num))
