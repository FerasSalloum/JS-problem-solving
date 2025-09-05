function convertToBase7(num) {
    // write your code here
    if (num == 0) return "0"

    let snum = Math.abs(num), reslt = ""

    while (snum > 0) {
        reslt += snum % 7
        snum = Math.floor(snum / 7);
    }

    reslt = reslt.split("").reverse().join("");
    return num < 0 ? reslt = "-" + reslt : reslt
}
