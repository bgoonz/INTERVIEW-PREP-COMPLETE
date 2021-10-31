"""
Important: the 1st char cannot be *

Time: O(mn)
Space: O(m)
"""


class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        m, n = len(s), len(p)
        if n >= 1 and p[0] == "*":
            return False
        prev = [True]
        for j in range(n):
            prev.append(prev[j - 1] and p[j] == "*")

        for i in range(m):
            curr = [False]
            for j in range(n):
                if p[j] == "*":
                    curr.append(
                        curr[j - 1] or (prev[j + 1] and p[j - 1] in (s[i], "."))
                    )
                else:
                    curr.append(prev[j] and p[j] in {s[i], "."})
            prev = curr
        return prev[-1]

        # dp = [[False]*(len(s) + 1) for _ in range(len(p) + 1)]
        # dp[0][0] = True
        # for i in range(1, len(p)+1):
        #     dp[i][0] = p[i-1] == '*' and dp[i-2][0] if i > 1 else p[i-1] == '*' and dp[i-1][0]
        # for i in range(len(p)):
        #     for j in range(len(s)):
        #         if p[i] == '*':
        #             dp[i+1][j+1] = dp[i-1][j+1] or (dp[i+1][j] and p[i-1] in [s[j], '.'])
        #         else:
        #             dp[i+1][j+1] = dp[i][j] and p[i] in [s[j], '.']
        # return dp[-1][-1]
