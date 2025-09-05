function replaceThe(txt) {
    const NewTxt = txt.split(" ")
    let result = ""
    console.log(NewTxt[NewTxt.length - 1][0])
    if ("aeiou".includes(NewTxt[NewTxt.length - 1][0])) {
        result = txt.replace("the", "an")
        console.log("an")
    } else {
        result = txt.replace("the", "a")
        console.log("a")
    }
    return result
}
