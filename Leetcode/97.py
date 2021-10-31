class Solution:
    def isInterleave(self, s1, s2, s3):
        """
        :type s1: str
        :type s2: str
        :type s3: str
        :rtype: bool
        """
        # m, n = len(s1), len(s2)
        # if len(s3) != m+n: return False
        # dp = [[False]*(n+1) for _ in range(m+1)]
        # dp[0][0] = True
        # for i in range(1, m+1):
        #     dp[i][0] = dp[i-1][0] and s3[i-1] == s1[i-1]
        # for j in range(1, n+1):
        #     dp[0][j] = dp[0][j-1] and s3[j-1] == s2[j-1]
        # for i in range(1, m+1):
        #     for j in range(1, n+1):
        #         dp[i][j] = (dp[i-1][j] and s1[i-1] == s3[i+j-1]) or (dp[i][j-1] and s2[j-1]==s3[i+j-1])
        # return dp[m][n]

        m, n = len(s1), len(s2)
        if len(s3) != m + n:
            return False
        dp = [False] * (m + 1)
        dp[0] = True
        for i in range(1, m + 1):
            dp[i] = dp[i - 1] and s1[i - 1] == s3[i - 1]
        for j in range(1, n + 1):
            dp[0] = dp[0] and s2[j - 1] == s3[j - 1]
            for i in range(1, m + 1):
                dp[i] = (dp[i] and s3[i + j - 1] == s2[j - 1]) or (
                    dp[i - 1] and s3[i + j - 1] == s1[i - 1]
                )
        return dp[m]
