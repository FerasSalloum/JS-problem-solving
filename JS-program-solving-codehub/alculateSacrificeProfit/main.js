function calculateSacrificeProfit(buyPrices, sellPrices) {
    let allBuy = buyPrices.reduce((acc, css) => acc + css, 0);
    let allSell = sellPrices.reduce((acc, css) => acc + css, 0);
    let result = allSell - allBuy;
    return result
}