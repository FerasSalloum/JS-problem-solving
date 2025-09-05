function allSameCase(word) {
    let hasUpper = false;
    let hasLower = false;

    for (let i = 0; i < word.length; i++) {
        const char = word[i];

        if (char.toLowerCase() !== char.toUpperCase()) {
            if (char === char.toUpperCase()) {
                hasUpper = true;
            } else if (char === char.toLowerCase()) {
                hasLower = true;
            }
            if (hasUpper && hasLower) {
                return false;
            }
        }
    }

    return true;
}
