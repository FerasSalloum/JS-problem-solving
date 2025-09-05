function replaceThe(txt) {
    return txt.replace(/\bthe\b\s+([a-zA-Z]+)/gi, (_, word) => {
        const firstChar = word[0].toLowerCase();
        const article = 'aeiou'.includes(firstChar) ? 'an' : 'a';
        return `${article} ${word}`;
    });
}
