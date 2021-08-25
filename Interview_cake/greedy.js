function stock_picker(stock_prices) {
    let currentProfit = stock_prices[1] - stock_prices[0];
    let currentMin = Math.min(stock_prices[0], stock_prices[1]);
    for (let i = 2; i<stock_prices.length; i++) {
        currentMin = currentMin <= stock_prices[i] ? currentMin : stock_prices[i];
        currentProfit = stock_prices[i] - currentMin > currentProfit ? stock_prices[i] - currentMin : currentProfit; 
    }
    return currentProfit;
}