# Time: O(n^2)
# Space: O(n)


class Solution:
    def numTrees(self, n):
        """
        :type n: int
        :rtype: int
        """
        # DP[n]: number of BST of a sequence with length n
        dp = [0] * (n + 1)
        dp[0] = dp[1] = 1
        for i in range(2, n + 1):
            for j in range(i):
                dp[i] += dp[j] * dp[i - 1 - j]
        return dp[n]
