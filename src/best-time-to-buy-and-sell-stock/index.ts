function maxProfit(prices: number[]): number {
    let profit = 0;
    let buy = prices[0];
    let sell = 0;
    for (let i=1; i < prices.length; i++) {
        if(prices[i] < buy) {
            buy = prices[i];
            sell = 0;
        }
        else if(prices[i] > sell) {
            sell = prices[i];
            if(sell-buy > profit) {
                profit = sell-buy;
            }
        }
    }
    return profit;
}

export default maxProfit;