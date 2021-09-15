class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        if m == 1 and n == 1:
            return 1
        grid = [[0 for _ in range(n)] for _ in range(m)]
        for i in range(1, m):
            grid[i][0] = 1
        for i in range(1, n):
            grid[0][i] = 1
        for i in range(1, m):
            for j in range(1, n):
                grid[i][j] += grid[i - 1][j] + grid[i][j - 1]
        print(grid)
        return grid[-1][-1]
