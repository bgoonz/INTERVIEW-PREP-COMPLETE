class Solution(object):
    def isMatch(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: bool
        """
        prev = [True]
        for i in range(len(p)):
            prev.append(prev[i] and p[i] == "*")
        for i in range(len(s)):
            curr = [False]
            for j in range(len(p)):
                if p[j] == "*":
                    curr.append(curr[j] or prev[j + 1])
                else:
                    curr.append(prev[j] and p[j] in [s[i], "?"])
            prev = curr
        return prev[-1]

        # dp = [[False]*(len(s) + 1) for _ in range(len(p) + 1)]
        # dp[0][0] = True
        # for i in range(1, len(p) + 1):
        #     dp[i][0] = dp[i-1][0] and p[i-1] == '*'
        # for i in range(len(p)):
        #     for j in range(len(s)):
        #         if p[i] == '*':
        #             dp[i+1][j+1] = dp[i][j+1] or dp[i+1][j]
        #         else:
        #             dp[i+1][j+1] = dp[i][j] and p[i] in [s[j], '?']
        # return dp[-1][-1]
