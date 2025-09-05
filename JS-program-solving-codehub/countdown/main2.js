function countdownByThree(num) {
    return Array.from({ length: Math.floor((num - 1) / 3) }, (_, i) => num - 3 * (i + 1))
        .filter(x => x % 2 === 0)
        .sort((a, b) => a - b)
        || [0];
}
