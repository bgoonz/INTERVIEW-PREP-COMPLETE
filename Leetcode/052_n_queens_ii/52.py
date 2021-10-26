"""
Time: O(n!)
Space: O(n)
"""


class Solution:
    def totalNQueens(self, n):
        """
        :type n: int
        :rtype: int
        """
        self.ret = 0
        self.dfs([-1] * n, 0)
        return self.ret

    def dfs(self, b, r):
        if len(b) == r:
            self.ret += 1
            return
        for c in range(len(b)):
            b[r] = c
            if self.isValid(b, r):
                self.dfs(b, r + 1)

    def isValid(self, b, r):
        for i in range(r):
            if b[i] == b[r] or abs(b[r] - b[i]) == r - i:
                return False
        return True
