class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        dp = [0 for _ in range(len(triangle) + 1)]
        for r in triangle[::-1]:
            for i in range(len(r)):
                dp[i] = r[i] + min(dp[i], dp[i + 1])
        return dp[0]
