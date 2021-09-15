class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        n = len(prices)
        if n < 2:
            return 0
        if n // 2 <= k:
            return self.quickSolve(prices)
        dp = [[0 for _ in range(n + 1)] for _ in range(k + 1)]
        for i in range(1, k + 1):
            buy = float("-inf")
            for j in range(1, n + 1):
                dp[i][j] = max(dp[i][j - 1], buy + prices[j - 1])
                buy = max(buy, dp[i - 1][j - 1] - prices[j - 1])
        return dp[k][n]

    def quickSolve(self, prices):
        return sum(max(prices[i + 1] - prices[i], 0) for i in range(len(prices) - 1))
