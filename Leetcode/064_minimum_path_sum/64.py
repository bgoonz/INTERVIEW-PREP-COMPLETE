class Solution:
    def minPathSum(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """

        if not grid or len(grid) == 0:
            return 0

        # Space: O(m*n)
        # m, n = len(grid), len(grid[0])
        # dp = [[0]*n for _ in range(m)]
        # dp[0][0] = grid[0][0]
        # for i in range(1, m):
        #     dp[i][0] = dp[i-1][0] + grid[i][0]
        # for j in range(1, n):
        #     dp[0][j] = dp[0][j-1] + grid[0][j]
        # for i in range(1, m):
        #     for j in range(1, n):
        #         dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
        # return dp[m-1][n-1]

        # m, n = len(grid), len(grid[0])
        # prev, curr = [0]*m, [0]*m
        # prev[0] = grid[0][0]
        # for i in range(1, m):
        #     prev[i] = prev[i-1] + grid[i][0]
        # for j in range(1, n):
        #     curr = [0]*m
        #     curr[0] = prev[0] + grid[0][j]
        #     for i in range(1, m):
        #         curr[i] = min(prev[i], curr[i-1]) + grid[i][j]
        #     prev = curr
        # return prev[m-1]

        m, n = len(grid), len(grid[0])
        curr = [0] * m
        curr[0] = grid[0][0]
        for i in range(1, m):
            curr[i] = curr[i - 1] + grid[i][0]
        for j in range(1, n):
            curr[0] += grid[0][j]
            for i in range(1, m):
                curr[i] = min(curr[i - 1], curr[i]) + grid[i][j]
        return curr[m - 1]
