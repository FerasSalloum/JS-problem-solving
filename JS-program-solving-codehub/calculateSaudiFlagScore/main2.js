function calculateSaudiFlagScore(elements) {
    const symbolScores = new Map([
        ["Green", 10],
        ["Sword", 15],
        ["Arabic Calligraphy", 20],
        ["Palm", 5]
    ]);

    return elements.reduce((sum, symbol) => {
        return sum + (symbolScores.get(symbol) || 0);
    }, 0);
}
