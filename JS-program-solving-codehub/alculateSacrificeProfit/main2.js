function calculateSacrificeProfit(buyPrices, sellPrices) {
    const profits = buyPrices.map((buyPrice, i) => sellPrices[i] - buyPrice);
    return profits.reduce((sum, profit) => sum + profit, 0);
} 
