# On every day, we buy the share with the price as low as we can, and sell the share with price as high as we can.
# For the second transaction, we integrate the profit of first transaction into the cost of the second buy,
# then the profit of the second sell will be the total profit of two transactions.
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy1, buy2 = float("-inf"), float("-inf")
        sell1, sell2 = 0, 0
        for price in prices:
            buy1 = max(buy1, -price)
            sell1 = max(sell1, buy1 + price)
            buy2 = max(buy2, sell1 - price)
            sell2 = max(sell2, buy2 + price)
        return sell2
