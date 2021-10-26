class Solution:
    def generateMatrix(self, n):
        """
        :type n: int
        :rtype: List[List[int]]
        """
        res = [[0] * n for _ in range(n)]
        r, c, dr, dc = 0, 0, 0, 1
        for i in range(1, n * n + 1):
            res[r][c] = i
            if res[(r + dr) % n][(c + dc) % n]:
                dr, dc = dc, -dr
            r += dr
            c += dc
        return res
