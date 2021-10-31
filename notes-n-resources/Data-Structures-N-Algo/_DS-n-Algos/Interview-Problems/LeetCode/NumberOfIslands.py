from collections import deque


class Solution:
    def numIslands(self, grid) -> int:
        if not grid:
            return 0
        r = len(grid)
        c = len(grid[0])
        queue = deque()
        islands = 0
        for i in range(r):
            for j in range(c):
                if grid[i][j] == "1":
                    islands += 1
                    grid[i][j] = "0"
                    queue.append([i, j])
                    while queue:
                        el = queue.popleft()
                        rs = el[0]
                        cs = el[1]
                        if rs - 1 >= 0 and grid[rs - 1][cs] == "1":
                            queue.append([rs - 1, cs])
                            grid[rs - 1][cs] = "0"
                        if rs + 1 < r and grid[rs + 1][cs] == "1":
                            queue.append([rs + 1, cs])
                            grid[rs + 1][cs] = "0"
                        if cs - 1 >= 0 and grid[rs][cs - 1] == "1":
                            queue.append([rs, cs - 1])
                            grid[rs][cs - 1] = "0"
                        if cs + 1 < c and grid[rs][cs + 1] == "1":
                            queue.append([rs, cs + 1])
                            grid[rs][cs + 1] = "0"
        return islands
