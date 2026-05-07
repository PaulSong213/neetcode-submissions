class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = left + 1;

        let profit = 0;

        while(right <= prices.length - 1){
            profit = Math.max(profit, prices[right] - prices[left]);
            if(prices[right] < prices[left]){
                left = right;
            }
            right++;
        }

        return profit;
    }
}
