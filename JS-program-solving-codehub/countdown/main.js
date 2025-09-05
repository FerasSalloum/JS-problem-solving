function countdown(num) {
    let result = [];
    let current = num - 3;

    while (current > 0) {
        if (current % 2 === 0) {
            result.push(current);
        }
        current -= 3;
    }

    return result.length > 0 ? result.sort((a, b) => a - b) : [0];
}
