"""
Time: O(2^n)
Space: O(n)
"""


class Solution:
    def generateParenthesis(self, n: "int") -> "List[str]":
        dp = [[] for _ in range(n + 1)]
        dp[0].append("")
        for i in range(n + 1):
            for j in range(i):
                dp[i] += ["(" + x + ")" + y for x in dp[j] for y in dp[i - j - 1]]
        return dp[n]


class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        result = []
        self.search(n, n, "", result)
        return result

    def search(self, l, r, s, result):
        if r < l:
            return
        if not l and not r:
            result.append(s)
        if l > 0:
            self.search(l - 1, r, s + "(", result)
        if r > 0:
            self.search(l, r - 1, s + ")", result)
