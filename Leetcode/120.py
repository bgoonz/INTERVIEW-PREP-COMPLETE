# down-top


class Solution:
    def minimumTotal(self, triangle):
        """
        :type triangle: List[List[int]]
        :rtype: int
        """
        dp = [0] * (len(triangle) + 1)
        for row in triangle[::-1]:
            for j in range(len(row)):
                dp[j] = min(dp[j], dp[j + 1]) + row[j]
        return dp[0]
