class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices or len(prices) < 2:
            return 0
        ret = 0
        buy = prices[0]
        for price in prices[1:]:
            buy = min(price, buy)
            ret = max(ret, price - buy)
        return ret
