# time and space complexity: O(mn)


class Solution:
    # updated union find
    def numIslands(self, grid: List[List[str]]) -> int:
        def find(x):
            if UF[x] != x:
                UF[x] = find(UF[x])
            return UF[x]

        def union(x, y):
            UF[find(x)] = find(y)

        if not grid or not grid[0]:
            return 0
        m, n = len(grid), len(grid[0])
        locs = {(i, j) for i in range(m) for j in range(n) if grid[i][j] == "1"}
        UF = {n * i + j: n * i + j for (i, j) in locs}
        for i, j in locs:
            for x, y in [(i, j - 1), (i, j + 1), (i - 1, j), (i + 1, j)]:
                if x < 0 or y < 0 or x >= m or y >= n or (x, y) not in locs:
                    continue
                union(n * i + j, n * x + y)
        return len({find(x) for x in UF})


# dfs
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        m, n = len(grid), len(grid[0])
        count = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == "1":
                    self.dfs(grid, i, j)
                    count += 1
        return count

    def dfs(self, grid, x, y):
        if x < 0 or x >= len(grid) or y < 0 or y >= len(grid[0]) or grid[x][y] != "1":
            return
        grid[x][y] = "#"
        self.dfs(grid, x + 1, y)
        self.dfs(grid, x - 1, y)
        self.dfs(grid, x, y + 1)
        self.dfs(grid, x, y - 1)

    # union find
    def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        if not grid or not grid[0]:
            return 0
        m, n = len(grid), len(grid[0])
        roots = [-1] * (n * m)
        positions = [[i, j] for i in range(m) for j in range(n) if grid[i][j] == "1"]
        result = 0
        neighbors = [[0, -1], [-1, 0], [0, 1], [1, 0]]
        for p in positions:
            root = n * p[0] + p[1]
            roots[root] = root
            result += 1
            for nb in neighbors:
                x, y = p[0] + nb[0], p[1] + nb[1]
                nb_root = n * x + y
                if x < 0 or x >= m or y < 0 or y >= n or roots[nb_root] == -1:
                    continue
                nb_root = self.findRoot(roots, nb_root)
                if root != nb_root:
                    result -= 1
                    roots[root] = nb_root
                    root = nb_root
        return result

    def findRoot(self, roots, node):
        while node != roots[node]:
            roots[node] = roots[roots[node]]
            node = roots[roots[node]]
        return node
